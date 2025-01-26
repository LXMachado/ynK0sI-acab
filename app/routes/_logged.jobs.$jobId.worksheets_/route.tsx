import {
  Typography,
  Table,
  Button,
  Upload,
  Modal,
  Form,
  Input,
  Select,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function WorksheetsPage() {
  const { jobId } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form] = Form.useForm()
  const { checkRole } = useUserContext()
  const { mutateAsync: upload } = useUploadPublic()

  // Fetch job details with department
  const { data: job } = Api.job.findFirst.useQuery({
    where: { id: jobId },
    include: { department: true },
  })

  // Fetch worksheets
  const { data: worksheets, refetch } = Api.worksheet.findMany.useQuery({
    where: { jobId },
    include: { department: true },
  })

  // Create worksheet mutation
  const { mutateAsync: createWorksheet } = Api.worksheet.create.useMutation()

  // Update worksheet mutation
  const { mutateAsync: updateWorksheet } = Api.worksheet.update.useMutation()

  const handleCreateWorksheet = async (values: any) => {
    try {
      await createWorksheet({
        data: {
          title: values.title,
          status: values.status,
          jobId: jobId!,
          departmentId: job!.departmentId,
        },
      })
      message.success('Worksheet created successfully')
      setIsModalOpen(false)
      form.resetFields()
      refetch()
    } catch (error) {
      message.error('Failed to create worksheet')
    }
  }

  const handleFileUpload = async (file: File, record: any) => {
    try {
      const { url } = await upload({ file })
      await updateWorksheet({
        where: { id: record.id },
        data: { fileUrl: url, fileType: file.type },
      })
      message.success('File uploaded successfully')
      refetch()
    } catch (error) {
      message.error('Failed to upload file')
    }
  }

  const handleStatusChange = async (value: string, record: any) => {
    try {
      await updateWorksheet({
        where: { id: record.id },
        data: { status: value },
      })
      message.success('Status updated successfully')
      refetch()
    } catch (error) {
      message.error('Failed to update status')
    }
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
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
      render: (text: string, record: any) => (
        <Select
          defaultValue={text}
          onChange={value => handleStatusChange(value, record)}
          style={{ width: 120 }}
        >
          <Select.Option value="PENDING">Pending</Select.Option>
          <Select.Option value="IN_PROGRESS">In Progress</Select.Option>
          <Select.Option value="COMPLETED">Completed</Select.Option>
        </Select>
      ),
    },
    {
      title: 'File',
      key: 'file',
      render: (record: any) => (
        <Upload
          beforeUpload={file => {
            handleFileUpload(file, record)
            return false
          }}
          showUploadList={false}
        >
          <Button icon={<i className="las la-upload" />}>
            {record.fileUrl ? 'Update File' : 'Upload File'}
          </Button>
        </Upload>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Button
          icon={<i className="las la-download" />}
          disabled={!record.fileUrl}
          onClick={() => window.open(record.fileUrl)}
        >
          Download
        </Button>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}
        >
          <div>
            <Title level={2}>Worksheets</Title>
            <Text>Manage worksheets for job: {job?.title}</Text>
          </div>
          {checkRole('ADMIN') && (
            <Button
              type="primary"
              icon={<i className="las la-plus" />}
              onClick={() => setIsModalOpen(true)}
            >
              Create Worksheet
            </Button>
          )}
        </div>

        <Table
          columns={columns}
          dataSource={worksheets}
          rowKey="id"
          pagination={false}
        />

        <Modal
          title="Create New Worksheet"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleCreateWorksheet} layout="vertical">
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please input the title!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="status" label="Status" initialValue="PENDING">
              <Select>
                <Select.Option value="PENDING">Pending</Select.Option>
                <Select.Option value="IN_PROGRESS">In Progress</Select.Option>
                <Select.Option value="COMPLETED">Completed</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
