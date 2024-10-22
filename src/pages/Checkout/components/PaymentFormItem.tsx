import { FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { RadioGroupItem } from '@/components/ui/radio-group'

interface PaymentFormItemProps {
  value: string
  method: string
  icon: React.ReactNode
}

export const PaymentFormItem = ({
  value,
  method,
  icon,
}: PaymentFormItemProps) => {
  return (
    <FormItem className="w-full">
      <FormControl className="peer hidden">
        <RadioGroupItem value={value} />
      </FormControl>
      <FormLabel className="flex cursor-pointer space-x-3 rounded-md bg-accent p-4 transition-colors hover:bg-accent/50 peer-data-[state=checked]:bg-product-purple-light">
        <span className="h-4 w-4 text-product-purple">{icon}</span>
        <span className="text-xs font-normal">{method}</span>
      </FormLabel>
    </FormItem>
  )
}
