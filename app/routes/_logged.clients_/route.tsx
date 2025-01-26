import {
  Typography,
  Table,
  Input,
  Button,
  Modal,
  Form,
  Select,
  Space,
  Tag,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ClientsPage() {
  const navigate = useNavigate()
  const { checkRole } = useUserContext()
  const [searchText, setSearchText] = useState('')
  const [showActiveOnly, setShowActiveOnly] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingClient, setEditingClient] = useState<any>(null)
  const [form] = Form.useForm()

  // Fetch clients with their jobs
  const { data: clients, refetch } = Api.client.findMany.useQuery({
    include: { jobs: true },
  })

  // Mutations
  const { mutateAsync: createClient } = Api.client.create.useMutation()
  const { mutateAsync: updateClient } = Api.client.update.useMutation()
  const { mutateAsync: deleteClient } = Api.client.delete.useMutation()

  const filteredClients = clients?.filter(client => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchText.toLowerCase()) ||
      client.email.toLowerCase().includes(searchText.toLowerCase()) ||
      client.companyName?.toLowerCase().includes(searchText.toLowerCase())

    if (showActiveOnly) {
      return matchesSearch && client.jobs.some(job => job.status === 'ACTIVE')
    }

    return matchesSearch
  })

  const handleSubmit = async (values: any) => {
    try {
      if (editingClient) {
        await updateClient({
          where: { id: editingClient.id },
          data: values,
        })
      } else {
        await createClient({ data: values })
      }
      setIsModalOpen(false)
      form.resetFields()
      setEditingClient(null)
      refetch()
    } catch (error) {
      console.error('Error saving client:', error)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteClient({ where: { id } })
      refetch()
    } catch (error) {
      console.error('Error deleting client:', error)
    }
  }

  const columns = [
    {
      title: 'Name',
      key: 'name',
      render: (record: any) => (
        <Space>
          <i className="las la-user" />
          <Text>{`${record.name} ${record.surname || ''}`}</Text>
        </Space>
      ),
    },
    {
      title: 'Contact',
      key: 'contact',
      render: (record: any) => (
        <Space direction="vertical">
          <Text>
            <i className="las la-envelope" /> {record.email}
          </Text>
          {record.phone && (
            <Text>
              <i className="las la-phone" /> {record.phone}
            </Text>
          )}
        </Space>
      ),
    },
    {
      title: 'Address',
      key: 'address',
      render: (record: any) => (
        <Space direction="vertical">
          {record.streetAddress && <Text>{record.streetAddress}</Text>}
          {record.city && <Text>{`${record.city}, ${record.state}`}</Text>}
        </Space>
      ),
    },
    {
      title: 'Company',
      key: 'company',
      render: (record: any) =>
        record.companyName && (
          <Space direction="vertical">
            <Text>
              <i className="las la-building" /> {record.companyName}
            </Text>
            {record.companyPhone && (
              <Text>
                <i className="las la-phone" /> {record.companyPhone}
              </Text>
            )}
          </Space>
        ),
    },
    {
      title: 'Active Jobs',
      key: 'jobs',
      render: (record: any) => {
        const activeJobs = record.jobs.filter(
          (job: any) => job.status === 'ACTIVE',
        )
        return (
          <Tag color={activeJobs.length > 0 ? 'green' : 'default'}>
            {activeJobs.length} active
          </Tag>
        )
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Space>
          <Button
            icon={<i className="las la-edit" />}
            onClick={() => {
              setEditingClient(record)
              form.setFieldsValue(record)
              setIsModalOpen(true)
            }}
          />
          <Button
            icon={<i className="las la-folder-open" />}
            onClick={() => navigate(`/jobs?clientId=${record.id}`)}
          />
          {checkRole('ADMIN') && (
            <Button
              danger
              icon={<i className="las la-trash" />}
              onClick={() => handleDelete(record.id)}
            />
          )}
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-users" /> Clients Management
        </Title>
        <Text>Manage your clients and their associated information</Text>

        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Space>
            <Input
              placeholder="Search clients..."
              prefix={<i className="las la-search" />}
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              style={{ width: 300 }}
            />
            <Button
              type={showActiveOnly ? 'primary' : 'default'}
              onClick={() => setShowActiveOnly(!showActiveOnly)}
              icon={<i className="las la-filter" />}
            >
              Active Jobs Only
            </Button>
            <Button
              type="primary"
              icon={<i className="las la-plus" />}
              onClick={() => {
                setEditingClient(null)
                form.resetFields()
                setIsModalOpen(true)
              }}
            >
              Add Client
            </Button>
          </Space>
        </div>

        <Table columns={columns} dataSource={filteredClients} rowKey="id" />

        <Modal
          title={editingClient ? 'Edit Client' : 'Add New Client'}
          open={isModalOpen}
          onOk={form.submit}
          onCancel={() => {
            setIsModalOpen(false)
            setEditingClient(null)
            form.resetFields()
          }}
          width={800}
        >
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="surname" label="Surname">
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input />
            </Form.Item>
            <Form.Item name="streetAddress" label="Street Address">
              <Input />
            </Form.Item>
            <Form.Item name="city" label="City">
              <Input />
            </Form.Item>
            <Form.Item name="state" label="State">
              <Select>
                <Select.Option value="NSW">New South Wales</Select.Option>
                <Select.Option value="VIC">Victoria</Select.Option>
                <Select.Option value="QLD">Queensland</Select.Option>
                <Select.Option value="WA">Western Australia</Select.Option>
                <Select.Option value="SA">South Australia</Select.Option>
                <Select.Option value="TAS">Tasmania</Select.Option>
                <Select.Option value="ACT">
                  Australian Capital Territory
                </Select.Option>
                <Select.Option value="NT">Northern Territory</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="companyName" label="Company Name">
              <Input />
            </Form.Item>
            <Form.Item name="companyPhone" label="Company Phone">
              <Input />
            </Form.Item>
            <Form.Item name="companyAddress" label="Company Address">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
