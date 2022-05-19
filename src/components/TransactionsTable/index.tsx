import { useEffect, useState } from 'react'
import { ITransactions } from '../../Interfaces/ITransactions'
import { api } from '../../services/api'
import { Container, Table } from './styles'

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  console.log('sa', transactions)
  useEffect(() => {
    api
      .get('transactions')
      .then(({ data }) => setTransactions(data.transactions))
  }, [])

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
