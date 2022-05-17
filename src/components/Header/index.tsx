import logoImg from '../../assets/logo.svg'
import { Button } from '../Button'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="dt money" />

      <Button text="Nova Transação" />
    </Container>
  )
}
