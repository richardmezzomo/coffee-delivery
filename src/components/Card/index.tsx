import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  CardContainer,
  CoffeeImage,
  Control,
  Description,
  Order,
  Price,
  QuantityContainer,
  Tags,
  Title,
} from './styles'
import { useTheme } from 'styled-components'
import { useState } from 'react'

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1)
  const theme = useTheme()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <CardContainer>
      <CoffeeImage src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>
      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <Order>
          <QuantityContainer>
            <button onClick={decrementQuantity}>
              <Minus size={22} color={theme.COLORS.purple} />
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
              <Plus size={22} color={theme.COLORS.purple} />
            </button>
          </QuantityContainer>
          <button>
            <ShoppingCart size={22} color={theme.COLORS['base-card']} />
          </button>
        </Order>
      </Control>
    </CardContainer>
  )
}
