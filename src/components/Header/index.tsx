import logoImg from '../../assets/logo.svg'
import { Button } from '../Button'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        <Button text="Nova Transação" />
      </Content>
    </Container>
  )
}
