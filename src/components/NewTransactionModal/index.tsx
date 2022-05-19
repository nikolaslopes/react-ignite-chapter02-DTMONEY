import Modal from 'react-modal'
import { Button } from '../Button'
import { Input } from '../Input'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Content, Form, TransactionTypeContainer } from './styles'
import { INewTransactionModal } from './types'

Modal.setAppElement('#root')

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModal) {
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

        <Form>
          <h2>Cadastrar transação</h2>

          <Input placeholder="Título" />
          <Input placeholder="Valor" />
          <Input placeholder="Categoria" />

          <TransactionTypeContainer>
            <button type="button">
              <img src={incomeImg} alt="Income" />
              <span>Entrada</span>
            </button>

            <button type="button">
              <img src={outcomeImg} alt="Outcome" />
              <span>Saída</span>
            </button>
          </TransactionTypeContainer>

          <Button secondaryStyle type="submit">
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Modal>
  )
}
