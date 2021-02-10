import React, { useState } from 'react';
import { Table, Tag } from 'antd';
import { useTransactions, useBalance } from './Actions';
import { EyeOutlined } from '@ant-design/icons';
import TransactionDetails from './TransactionDetails';

const TransactionsList = () => {

  const [showModal, setShowModal] = useState(false);
  const [currentTransaction, setCurrentTransaction ] = useState(null);

  const openTransactionModal = (transaction) => {
    setCurrentTransaction(transaction);
    setShowModal(true);
  }

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
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <a href="#" onClick={() => openTransactionModal(record)}>
          <EyeOutlined />
        </a>
       )
    }
  ];


  const _transactions = useTransactions();
  const _balance = useBalance();

  if(_transactions.isLoading || _balance.isLoading)
    return <p>Loading...</p>;

  const { balance } = _balance;
  const { transactions } = _transactions;

  return(
  <>
    <h2>Balance: {balance.balance}</h2>
    <Table columns={columns} dataSource={transactions} />
    <TransactionDetails
      currentTransaction={currentTransaction}
      visible={showModal}
      closeFn={() => setShowModal(false)}
    />
  </>
  );
}

export default TransactionsList;
