import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useUploadPublic } from '@/plugins/upload/client'
import { useNavigate } from '@remix-run/react'
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Select,
  Table,
  Typography,
  Upload,
} from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
const { Title, Text } = Typography

export default function RepresentativesPage() {
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: generatePdf } =
    Api.documentProcessor.htmlToPdf.useMutation()
  const { mutateAsync: parseDocument } =
    Api.documentProcessor.parseDocument.useMutation()

  const { data: representatives } = Api.representative.findMany.useQuery({
    include: { user: true },
  })

  // Fetch worksheets with department, job, client, and representative details
  const { data: worksheets, refetch } = Api.worksheet.findMany.useQuery({
    include: {
      department: true,
      job: {
        include: {
          client: true,
          representative: {
            include: {
              user: true, // Include the user relationship
            },
          },
        },
      },
    },
  })

  const { mutateAsync: createWorksheet } = Api.worksheet.create.useMutation()

  const handleFileUpload = async (file: File) => {
    try {
      const { url } = await uploadFile({ file })
      const fileType = file.name.split('.').pop()?.toLowerCase()

      if (fileType === 'pdf') {
        return url
      }

      // Parse document content for Word/Excel
      const { content } = await parseDocument({ url })

      // Generate PDF from parsed content
      const { url: pdfUrl } = await generatePdf({
        html: `<html><body>${content}</body></html>`,
      })

      return pdfUrl
    } catch (error) {
      message.error('Error processing file')
      return null
    }
  }

  const handleSubmit = async (values: any) => {
    try {
      if (!selectedFile) {
        message.error('Please select a file')
        return
      }

      const fileUrl = await handleFileUpload(selectedFile)
      if (!fileUrl) return

      await createWorksheet({
        data: {
          title: values.title,
          fileUrl,
          fileType: selectedFile.type,
          status: 'ACTIVE',
          jobId: values.jobId,
          departmentId: values.departmentId,
        },
      })

      message.success('Worksheet uploaded successfully')
      setIsModalVisible(false)
      refetch()
    } catch (error) {
      message.error('Error uploading worksheet')
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
      title: 'Client',
      dataIndex: ['job', 'client', 'name'],
      key: 'client',
    },
    {
      title: 'Representative',
      dataIndex: ['job', 'representative', 'user', 'name'],
      key: 'representative',
      render: (_, record) => record.job?.representative?.user?.name || 'N/A', // Handle null values
    },
    {
      title: 'Upload Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <div>
          <Button type="link" onClick={() => window.open(record.fileUrl)}>
            <i className="las la-download"></i> Download
          </Button>
          <Button type="link" onClick={() => navigate(`/jobs/${record.jobId}`)}>
            <i className="las la-eye"></i> View Job
          </Button>
        </div>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <Title level={2}>
            <i className="las la-file-upload"></i> Document Management
          </Title>
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            <i className="las la-plus"></i> Upload Document
          </Button>
        </div>

        <Text
          type="secondary"
          style={{ marginBottom: '24px', display: 'block' }}
        >
          Upload and manage documents, worksheets, and job quotes for your
          clients.
        </Text>

        <Table
          columns={columns}
          dataSource={worksheets}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />

        <Modal
          title="Upload Document"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleSubmit} layout="vertical">
            <Form.Item
              name="title"
              label="Document Title"
              rules={[{ required: true, message: 'Please enter a title' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="jobId"
              label="Job ID"
              rules={[{ required: true, message: 'Please enter a job ID' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="departmentId"
              label="Department"
              rules={[
                { required: true, message: 'Please select a representative' },
              ]}
            >
              <Select>
                {representatives?.map(rep => (
                  <Select.Option key={rep.id} value={rep.departmentId}>
                    {rep.user?.name || 'Unnamed Representative'}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Upload
              beforeUpload={file => {
                setSelectedFile(file)
                return false
              }}
              maxCount={1}
            >
              <Button icon={<i className="las la-upload"></i>}>
                Select File
              </Button>
            </Upload>

            <div style={{ marginTop: '24px', textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                Upload
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
