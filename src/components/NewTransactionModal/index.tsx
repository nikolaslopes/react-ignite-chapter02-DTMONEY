import Modal from 'react-modal'
import { INewTransactionModal } from './types'

Modal.setAppElement('#root')

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModal) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cadastrar transação</h2>
    </Modal>
  )
}
