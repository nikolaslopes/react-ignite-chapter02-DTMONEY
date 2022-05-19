import Modal from 'react-modal'
import { Button } from '../Button'
import { Input } from '../Input'
import closeImg from '../../assets/close.svg'
import { Content, Form } from './styles'
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

          <Button secondaryStyle type="submit">
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Modal>
  )
}
