import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useNavigate } from '@remix-run/react'
import { Card, Col, Row, Statistic, Typography } from 'antd'
const { Title, Text } = Typography

export default function HomeDashboardPage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch required data
  const { data: jobs } = Api.job.findMany.useQuery({})
  const { data: stocks } = Api.stock.findMany.useQuery({})
  const { data: worksheets } = Api.worksheet.findMany.useQuery({})
  const { data: departments } = Api.department.findMany.useQuery({}) // Fetch departments

  // Calculate metrics
  const totalJobs = jobs?.length || 0
  const inProgressJobs =
    jobs?.filter(job => job.status === 'IN_PROGRESS')?.length || 0
  const lowStockItems =
    stocks?.filter(
      stock => parseInt(stock.quantity) < parseInt(stock.minimumLevel || '0'),
    )?.length || 0
  const pendingWorksheets =
    worksheets?.filter(ws => ws.status === 'PENDING')?.length || 0

  const quickLinks = [
    { title: 'Clients', icon: 'users', path: '/clients' },
    { title: 'Jobs', icon: 'tasks', path: '/jobs' },
    { title: 'Stock', icon: 'warehouse', path: '/stock' },
    { title: 'Installation', icon: 'tools', path: '/installation' },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2}>Dashboard Overview</Title>
        <Text>
          Welcome back, {user?.name}! Here's your business at a glance.
        </Text>

        {/* Summary Cards */}
        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} sm={12} lg={6}>
            <Card
              hoverable
              style={{
                background: 'linear-gradient(135deg, #0072fe 0%, #00a1ec 100%)',
              }}
            >
              <Statistic
                title={
                  <span style={{ color: 'white' }}>
                    <i className="las la-clipboard-list" /> Total Jobs
                  </span>
                }
                value={totalJobs}
                valueStyle={{ color: 'white' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card
              hoverable
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              }}
            >
              <Statistic
                title={
                  <span style={{ color: 'white' }}>
                    <i className="las la-spinner" /> In Progress
                  </span>
                }
                value={inProgressJobs}
                valueStyle={{ color: 'white' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card
              hoverable
              style={{
                background: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
              }}
            >
              <Statistic
                title={
                  <span style={{ color: 'white' }}>
                    <i className="las la-exclamation-triangle" /> Low Stock
                  </span>
                }
                value={lowStockItems}
                valueStyle={{ color: 'white' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card
              hoverable
              style={{
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              }}
            >
              <Statistic
                title={
                  <span style={{ color: 'white' }}>
                    <i className="las la-bell" /> Pending Tasks
                  </span>
                }
                value={pendingWorksheets}
                valueStyle={{ color: 'white' }}
              />
            </Card>
          </Col>
        </Row>

        {/* Quick Links */}
        <Title level={3} style={{ marginTop: '32px' }}>
          Quick Links
        </Title>
        <Row gutter={[16, 16]}>
          {quickLinks.map((link, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                hoverable
                onClick={() => navigate(link.path)}
                style={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                <i
                  className={`las la-${link.icon}`}
                  style={{ fontSize: '32px', color: '#1890ff' }}
                />
                <Title level={4} style={{ marginTop: '16px', marginBottom: 0 }}>
                  {link.title}
                </Title>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Department Metrics */}
        <Title level={3} style={{ marginTop: '32px' }}>
          Department Metrics
        </Title>
        <Row gutter={[16, 16]}>
          {departments?.map((dept, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                title={dept.name}
                hoverable
                style={{
                  background:
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                }}
              >
                <Statistic
                  title={<span style={{ color: 'white' }}>Active Jobs</span>}
                  value={
                    jobs?.filter(job => job.departmentId === dept.id)?.length ||
                    0
                  }
                  valueStyle={{ color: 'white' }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}
