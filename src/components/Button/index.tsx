import { IButton } from './types'

export function Button({ text, ...rest }: IButton) {
  return (
    <>
      <button type="button" {...rest}>
        {text}
      </button>
    </>
  )
}
