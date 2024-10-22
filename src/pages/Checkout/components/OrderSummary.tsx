interface OrderSummaryProps {
  text: string
  value: number
  isBold?: boolean
}

export const OrderSummary = ({
  text,
  value,
  isBold = false,
}: OrderSummaryProps) => {
  return (
    <div className="flex justify-between">
      <span className={isBold ? 'text-xl font-bold' : 'text-sm'}>{text}</span>
      <span className={isBold ? 'text-xl font-bold' : ''}>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(value)}
      </span>
    </div>
  )
}
