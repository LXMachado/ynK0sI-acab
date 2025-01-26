import {
  Typography,
  Card,
  Row,
  Col,
  Table,
  Progress,
  Tag,
  Button,
  Modal,
  Form,
  DatePicker,
  Select,
} from 'antd'
import { useState } from 'react'
import type { Prisma } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function InstallationSchedulePage() {
  const { user, checkRole } = useUserContext()
  const [selectedJob, setSelectedJob] = useState<string>()
  const [isModalVisible, setIsModalVisible] = useState(false)

  // Fetch team member data for the current user
  const { data: teamMember } = Api.teamMember.findFirst.useQuery({
    where: { userId: user?.id },
    include: { installationTeam: true },
  })

  // Fetch schedules based on user role
  const { data: schedules, refetch } = Api.schedule.findMany.useQuery({
    where: checkRole('ADMIN') ? {} : { teamMemberId: teamMember?.id },
    include: {
      job: {
        include: {
          client: true,
          department: true,
        },
      },
      teamMember: {
        include: {
          user: true,
          installationTeam: true,
        },
      },
    },
  })

  // Fetch all team members for admin assignment
  const { data: allTeamMembers } = Api.teamMember.findMany.useQuery({
    include: {
      user: true,
      installationTeam: true,
    },
  })

  // Fetch all jobs for assignment
  const { data: jobs } = Api.job.findMany.useQuery({
    include: {
      client: true,
      department: true,
    },
  })

  const { mutateAsync: createSchedule } = Api.schedule.create.useMutation()
  const { mutateAsync: updateSchedule } = Api.schedule.update.useMutation()

  const columns = [
    {
      title: 'Job Title',
      dataIndex: ['job', 'title'],
      key: 'title',
    },
    {
      title: 'Client',
      dataIndex: ['job', 'client', 'name'],
      key: 'client',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag
          color={
            status === 'COMPLETED'
              ? 'green'
              : status === 'IN_PROGRESS'
              ? 'blue'
              : 'orange'
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: 'Progress',
      key: 'progress',
      render: (record: any) => {
        const progress =
          record.status === 'COMPLETED'
            ? 100
            : record.status === 'IN_PROGRESS'
            ? 50
            : 0
        return <Progress percent={progress} size="small" />
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Button
          onClick={() => handleStatusUpdate(record)}
          type="primary"
          icon={<i className="las la-sync" />}
        >
          Update Status
        </Button>
      ),
    },
  ]

  const handleStatusUpdate = async (record: any) => {
    const newStatus =
      record.status === 'PENDING'
        ? 'IN_PROGRESS'
        : record.status === 'IN_PROGRESS'
        ? 'COMPLETED'
        : 'PENDING'

    await updateSchedule({
      where: { id: record.id },
      data: { status: newStatus },
    })
    refetch()
  }

  const handleCreateSchedule = async (values: any) => {
    await createSchedule({
      data: {
        jobId: values.jobId,
        teamMemberId: values.teamMemberId,
        startDate: values.dateRange[0].format('YYYY-MM-DD'),
        endDate: values.dateRange[1].format('YYYY-MM-DD'),
        status: 'PENDING',
      },
    })
    setIsModalVisible(false)
    refetch()
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px' }}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Card>
              <Title level={2}>
                <i className="las la-calendar" /> Installation Schedule
              </Title>
              <Text>Manage and track installation schedules and progress</Text>
            </Card>
          </Col>

          <Col span={24}>
            <Card>
              {checkRole('ADMIN') && (
                <Button
                  type="primary"
                  onClick={() => setIsModalVisible(true)}
                  icon={<i className="las la-plus" />}
                  style={{ marginBottom: '16px' }}
                >
                  Assign New Installation
                </Button>
              )}

              <Table
                columns={columns}
                dataSource={schedules}
                rowKey="id"
                pagination={{ pageSize: 10 }}
              />
            </Card>
          </Col>
        </Row>

        <Modal
          title="Assign Installation"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleCreateSchedule}>
            <Form.Item
              name="jobId"
              label="Select Job"
              rules={[{ required: true }]}
            >
              <Select>
                {jobs?.map(job => (
                  <Select.Option key={job.id} value={job.id}>
                    {job.title}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="teamMemberId"
              label="Assign To"
              rules={[{ required: true }]}
            >
              <Select>
                {allTeamMembers?.map(member => (
                  <Select.Option key={member.id} value={member.id}>
                    {member.user?.name} ({member.installationTeam?.name})
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="dateRange"
              label="Schedule Period"
              rules={[{ required: true }]}
            >
              <DatePicker.RangePicker />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Schedule
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
