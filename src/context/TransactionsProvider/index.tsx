import { createContext, useEffect, useState } from 'react'
import { api } from '../../services/api'
import {
  ITransactions,
  ITransactionsProvider,
  ITransactionInput,
  ITransactionsContext,
} from './types'

export const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext
)

export function TransactionsProvider({ children }: ITransactionsProvider) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(({ data }) => setTransactions(data.transactions))
  }, [])

  function createTransaction(transaction: ITransactionInput) {
    api.post('transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
