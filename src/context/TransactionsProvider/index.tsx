import React, { createContext, useEffect, useState } from 'react'
import { ITransactions } from '../../Interfaces/ITransactions'
import { api } from '../../services/api'
import { ITransactionsProvider } from './types'

export const TransactionsContext = createContext<ITransactions[]>([])

export function TransactionsProvider({ children }: ITransactionsProvider) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(({ data }) => setTransactions(data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
