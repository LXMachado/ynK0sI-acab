import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useNavigate } from '@remix-run/react'
import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Typography,
} from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
const { Title, Text } = Typography

export default function JobsPage() {
  const navigate = useNavigate()
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false)
  const [form] = Form.useForm()
  const [filterDepartment, setFilterDepartment] = useState<string>('')
  const [filterStatus, setFilterStatus] = useState<string>('')
  const [filterClient, setFilterClient] = useState<string>('')

  // Fetch data
  const { data: jobs, refetch } = Api.job.findMany.useQuery({
    include: {
      client: true,
      department: true,
    },
    where: {
      ...(filterDepartment && { departmentId: filterDepartment }),
      ...(filterStatus && { status: filterStatus }),
      ...(filterClient && { clientId: filterClient }),
    },
  })

  const { data: departments } = Api.department.findMany.useQuery({})
  const { data: clients } = Api.client.findMany.useQuery({})

  // Mutations
  const { mutateAsync: createJob } = Api.job.create.useMutation()
  const { mutateAsync: updateJob } = Api.job.update.useMutation()

  const handleCreateJob = async (values: any) => {
    await createJob({
      data: {
        title: values.title,
        description: values.description,
        status: 'NEW',
        materialRequirements: values.materialRequirements,
        clientId: values.clientId,
        departmentId: values.departmentId,
      },
    })
    setIsCreateModalVisible(false)
    form.resetFields()
    refetch()
  }

  const handleStatusChange = async (jobId: string, newStatus: string) => {
    await updateJob({
      where: { id: jobId },
      data: { status: newStatus },
    })
    refetch()
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Client',
      dataIndex: ['client', 'name'],
      key: 'client',
    },
    {
      title: 'Department',
      dataIndex: ['department', 'name'],
      key: 'department',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string, record: any) => (
        <Select
          value={status}
          onChange={value => handleStatusChange(record.id, value)}
          style={{ width: 120 }}
        >
          <Select.Option value="NOT_STARTED">Not Started</Select.Option>
          <Select.Option value="NO_WORKSHEETS">No Worksheets</Select.Option>
          <Select.Option value="NEW">New</Select.Option>
          <Select.Option value="IN_PROGRESS">In Progress</Select.Option>
          <Select.Option value="COMPLETED">Completed</Select.Option>
        </Select>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            onClick={() => navigate(`/jobs/${record.id}/worksheets`)}
            icon={<i className="las la-file-alt" />}
          >
            Worksheets
          </Button>
          <Button
            onClick={() => navigate(`/installation?jobId=${record.id}`)}
            icon={<i className="las la-calendar" />}
          >
            Schedule
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
        <Card>
          <div style={{ marginBottom: 24 }}>
            <Title level={2}>
              <i className="las la-tasks" /> Jobs Management
            </Title>
            <Text>
              Manage and track all jobs, their status, and related information
            </Text>
          </div>

          <Space style={{ marginBottom: 16 }}>
            <Button
              type="primary"
              onClick={() => setIsCreateModalVisible(true)}
              icon={<i className="las la-plus" />}
            >
              Create New Job
            </Button>
            <Select
              style={{ width: 200 }}
              placeholder="Filter by Department"
              allowClear
              onChange={setFilterDepartment}
            >
              {departments?.map(dept => (
                <Select.Option key={dept.id} value={dept.id}>
                  {dept.name}
                </Select.Option>
              ))}
            </Select>
            <Select
              style={{ width: 200 }}
              placeholder="Filter by Status"
              allowClear
              onChange={setFilterStatus}
            >
              <Select.Option value="NOT_STARTED">Not Started</Select.Option>
              <Select.Option value="NO_WORKSHEETS">No Worksheets</Select.Option>
              <Select.Option value="NEW">New</Select.Option>
              <Select.Option value="IN_PROGRESS">In Progress</Select.Option>
              <Select.Option value="COMPLETED">Completed</Select.Option>
            </Select>
            <Select
              style={{ width: 200 }}
              placeholder="Filter by Client"
              allowClear
              onChange={setFilterClient}
            >
              {clients?.map(client => (
                <Select.Option key={client.id} value={client.id}>
                  {client.name}
                </Select.Option>
              ))}
            </Select>
          </Space>

          <Table
            columns={columns}
            dataSource={jobs}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />

          <Modal
            title="Create New Job"
            open={isCreateModalVisible}
            onCancel={() => setIsCreateModalVisible(false)}
            footer={null}
          >
            <Form form={form} onFinish={handleCreateJob} layout="vertical">
              <Form.Item
                name="title"
                label="Job Title"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="description" label="Description">
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                name="materialRequirements"
                label="Material Requirements"
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                name="clientId"
                label="Client"
                rules={[{ required: true }]}
              >
                <Select>
                  {clients?.map(client => (
                    <Select.Option key={client.id} value={client.id}>
                      {client.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="departmentId"
                label="Department"
                rules={[{ required: true }]}
              >
                <Select>
                  {departments?.map(dept => (
                    <Select.Option key={dept.id} value={dept.id}>
                      {dept.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Create Job
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Card>
      </div>
    </PageLayout>
  )
}
