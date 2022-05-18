import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Box, Container } from './styles'

export function Summary() {
  return (
    <Container>
      <Box>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </Box>

      <Box>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-R$ 500,00</strong>
      </Box>

      <Box>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 500,000</strong>
      </Box>
    </Container>
  )
}
