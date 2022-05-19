import Modal from 'react-modal'
import { Button } from '../Button'
import { Input } from '../Input'
import { Form } from './styles'
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
      <Form>
        <h2>Cadastrar transação</h2>

        <Input placeholder="Título" />
        <Input placeholder="Valor" />
        <Input placeholder="Categoria" />

        <Button secondaryBgColor>Cadastrar</Button>
      </Form>
    </Modal>
  )
}
