import { Button } from '../Button'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import { IHeader } from './types'

export function Header({ onOpenNewTransactionModal }: IHeader) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        <Button text="Nova Transação" onClick={onOpenNewTransactionModal} />
      </Content>
    </Container>
  )
}
