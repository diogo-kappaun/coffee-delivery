import { Button } from '@/components/ui/button'
import { PiMinusBold, PiPlusBold } from 'react-icons/pi'

interface AmountControlProps {
  amount: number
}

export function AmountControl({
  amount /*, onIncrease, onDescrease */,
}: AmountControlProps) {
  return (
    <div className="flex min-h-9 items-center justify-center gap-1 rounded-md bg-muted px-2">
      <Button
        /* onClick={onDescrease} */ className="h-max px-0 py-0"
        variant="ghost"
      >
        <PiMinusBold
          size={16}
          className="text-muted-foreground text-product-purple"
        />
      </Button>
      <span className="w-6 text-center text-base">{amount}</span>
      <Button
        /* onClick={onIncrease} */ className="h-max px-0 py-0"
        variant="ghost"
      >
        <PiPlusBold
          size={16}
          className="text-muted-foreground text-product-purple"
        />
      </Button>
    </div>
  )
}
