import { Minus, Plus } from '@phosphor-icons/react'
import { Container } from './styles'

interface Props {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  return (
    <Container>
      <button onClick={decrementQuantity}>
        <Minus size={22} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={22} />
      </button>
    </Container>
  )
}
