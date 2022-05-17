import { ButtonCustom } from './styles'
import { IButton } from './types'

export function Button({ text, ...rest }: IButton) {
  return (
    <ButtonCustom type="button" {...rest}>
      {text}
    </ButtonCustom>
  )
}
