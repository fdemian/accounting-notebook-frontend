import { Tag, Modal, Button , Descriptions} from 'antd';

const TransactionDetails = ({currentTransaction, visible, closeFn}) => {

  if(!currentTransaction)
    return null;

  const { type , id, amount, effectiveDate } = currentTransaction;

  return(
  <Modal
      visible={visible}
      title="Transaction Details"
      onCancel={closeFn}
      footer={[
        <Button key="submit" type="primary" loading={false} onClick={closeFn}>
          Close
        </Button>,
      ]}
    >

    <Descriptions title={`Transaction ${id}`} layout="vertical" bordered>
        <Descriptions.Item label="Id">{id}</Descriptions.Item>
        <Descriptions.Item label="Type">
          <Tag color={type === "debit" ? 'geekblue' : 'green'} key={type}>
            {type.toUpperCase()}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Amount">{`$${amount}`}</Descriptions.Item>
        <Descriptions.Item label="Date">{effectiveDate}</Descriptions.Item>
      </Descriptions>
    </Modal>
  );
}

export default TransactionDetails;
