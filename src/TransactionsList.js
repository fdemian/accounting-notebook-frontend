import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: text => (
    <Tag color={text == "debit" ? 'geekblue' : 'green'} key={text}>
      {text.toUpperCase()}
    </Tag>
    ),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  }
  /*
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },*/
];

const data = [
  {
    key: '1',
    type: 'credit',
    amount: 30000
  },
  {
    key: '2',
    type: 'debit',
    amount: 500
  },
  {
    key: '3',
    type: 'credit',
    amount: 250
  },
];

const TransactionsList = () => {
  return(
  <Table columns={columns} dataSource={data} />
  );
}

export default TransactionsList;
