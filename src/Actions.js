import useSWR from 'swr';

export const useTransactions = () => {

  const { data, error, mutate } = useSWR('/api/transactions');

  return {
    transactions: data,
    error: error,
    isLoading: !data && !error,
    mutate: mutate
  }

}

export const useBalance = () => {

  const { data, error, mutate } = useSWR('/api/account');

  return {
    balance: data,
    error: error,
    isLoading: !data && !error,
    mutate: mutate
  }

}
