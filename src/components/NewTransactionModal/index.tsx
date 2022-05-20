import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { Button } from '../Button'
import { Input } from '../Input'
import { api } from '../../services/api'
import { INewTransactionModal } from './types'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Content, Form, RadioBox, TransactionTypeContainer } from './styles'

Modal.setAppElement('#root')

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModal) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      amount,
      category,
      type,
    }

    api
      .post('transactions', data)
      .then((response) => console.log('post', response.status))
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Content>
        <button
          type="button"
          className="react-modal-close"
          onClick={onRequestClose}
        >
          <img src={closeImg} alt="Close modal" />
        </button>

        <Form onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <Input
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <Input
            placeholder="Valor"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => {
                setType('deposit')
              }}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Income" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => {
                setType('withdraw')
              }}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Outcome" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <Input
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <Button secondaryStyle type="submit">
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Modal>
  )
}
