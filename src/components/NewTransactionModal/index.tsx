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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form>
        <h2>Cadastrar transação</h2>

        <Input />
        <Input />
        <Input />

        <Button secondaryBgColor>Cadastrar</Button>
      </Form>
    </Modal>
  )
}
