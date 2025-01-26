import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import type { Stock } from '@prisma/client'
import {
  Button,
  Card,
  Col,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Space,
  Spin,
  Table,
  Typography,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
const { Option } = Select

export default function StockManagementPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('')
  const [editingStock, setEditingStock] = useState<Stock | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [formName, setFormName] = useState('')
  const [formQuantity, setFormQuantity] = useState<string>('')
  const [formUnit, setFormUnit] = useState<string>('')
  const [formMinLevel, setFormMinLevel] = useState<string>('')
  const [formSupplier, setFormSupplier] = useState('')
  const [formDepartment, setFormDepartment] = useState('')

  const { data: departments, isLoading: loadingDepts } =
    Api.department.findMany.useQuery({})
  const {
    data: stocks,
    isLoading: loadingStocks,
    refetch: refetchStocks,
  } = Api.stock.findMany.useQuery({
    where: selectedDepartment ? { departmentId: selectedDepartment } : {},
    include: { department: true },
  })

  const { mutateAsync: updateStock } = Api.stock.update.useMutation()
  const { mutateAsync: createStock } = Api.stock.create.useMutation()

  const handleSaveStock = async () => {
    try {
      const values = {
        name: formName,
        quantity: formQuantity,
        unit: formUnit,
        minimumLevel: formMinLevel,
        supplier: formSupplier,
      }

      if (editingStock?.id) {
        await updateStock({
          where: { id: editingStock.id },
          data: values,
        })
      } else {
        await createStock({
          data: {
            ...values,
            departmentId: formDepartment || selectedDepartment,
          } as any,
        })
      }
      await refetchStocks()
      setIsModalVisible(false)
      setEditingStock(null)
      resetForm()
    } catch (error) {
      console.error('Error saving stock:', error)
    }
  }

  const resetForm = () => {
    setFormName('')
    setFormQuantity('')
    setFormUnit('')
    setFormMinLevel('')
    setFormSupplier('')
    setFormDepartment('')
  }

  const openModal = (stock: Stock | null) => {
    if (stock) {
      setFormName(stock.name)
      setFormQuantity(stock.quantity)
      setFormUnit(stock.unit)
      setFormMinLevel(stock.minimumLevel || '')
      setFormSupplier(stock.supplier || '')
      setFormDepartment(stock.departmentId)
      setEditingStock(stock)
    } else {
      resetForm()
      setEditingStock(null)
    }
    setIsModalVisible(true)
  }

  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Department',
      dataIndex: ['department', 'name'],
      key: 'department',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Minimum Level',
      dataIndex: 'minimumLevel',
      key: 'minimumLevel',
    },
    {
      title: 'Supplier',
      dataIndex: 'supplier',
      key: 'supplier',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record: Stock) => (
        <Space>
          <Button type="primary" onClick={() => openModal(record)}>
            <i className="las la-edit" /> Edit
          </Button>
        </Space>
      ),
    },
  ]

  if (loadingDepts || loadingStocks) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-warehouse" /> Stock Management
        </Title>
        <Text type="secondary">
          Manage inventory levels, update stock quantities, and track
          department-specific stock details
        </Text>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} lg={6}>
            <Card title="Filters">
              <Select
                style={{ width: '100%' }}
                placeholder="Select Department"
                value={selectedDepartment}
                onChange={setSelectedDepartment}
                allowClear
              >
                {departments?.map(dept => (
                  <Option key={dept.id} value={dept.id}>
                    {dept.name}
                  </Option>
                ))}
              </Select>
            </Card>
          </Col>

          <Col xs={24} lg={18}>
            <Card
              title="Stock Items"
              extra={
                <Button type="primary" onClick={() => openModal(null)}>
                  <i className="las la-plus" /> Add Stock Item
                </Button>
              }
            >
              <Table
                columns={columns}
                dataSource={stocks}
                rowKey="id"
                pagination={{ pageSize: 10 }}
              />
            </Card>
          </Col>
        </Row>

        <Modal
          title={editingStock ? 'Edit Stock Item' : 'Add Stock Item'}
          open={isModalVisible}
          onCancel={() => {
            setIsModalVisible(false)
            setEditingStock(null)
            resetForm()
          }}
          onOk={handleSaveStock}
        >
          <Space direction="vertical" style={{ width: '100%' }}>
            <Input
              placeholder="Item Name"
              value={formName}
              onChange={e => setFormName(e.target.value)}
            />
            <InputNumber
              placeholder="Quantity"
              value={formQuantity}
              onChange={value => setFormQuantity(value?.toString() || '')}
              style={{ width: '100%' }}
            />
            <Select
              placeholder="Unit"
              value={formUnit}
              onChange={value => setFormUnit(value)}
              style={{ width: '100%' }}
            >
              <Option value="mm">Millimeters (mm)</Option>
              <Option value="m">Meters (m)</Option>
              <Option value="sets">Sets</Option>
            </Select>
            <InputNumber
              placeholder="Minimum Level"
              value={formMinLevel}
              onChange={value => setFormMinLevel(value?.toString() || '')}
              style={{ width: '100%' }}
            />
            <Input
              placeholder="Supplier"
              value={formSupplier}
              onChange={e => setFormSupplier(e.target.value)}
            />
            <Select
              placeholder="Department"
              value={formDepartment}
              onChange={value => setFormDepartment(value)}
              style={{ width: '100%' }}
            >
              {departments?.map(dept => (
                <Option key={dept.id} value={dept.id}>
                  {dept.name}
                </Option>
              ))}
            </Select>
          </Space>
        </Modal>
      </div>
    </PageLayout>
  )
}
