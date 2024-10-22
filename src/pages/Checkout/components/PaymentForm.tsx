import { Form, FormControl, FormField } from '@/components/ui/form'
import { RadioGroup } from '@/components/ui/radio-group'
import { PaymentFormItem } from '@/pages/Checkout/components/PaymentFormItem'
import { PaymentMethodSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PiBankThin, PiCreditCardThin, PiMoneyThin } from 'react-icons/pi'
import * as z from 'zod'

export const PaymentForm = () => {
  const form = useForm<z.infer<typeof PaymentMethodSchema>>({
    resolver: zodResolver(PaymentMethodSchema),
  })
  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="mt-8 flex gap-3"
              >
                <PaymentFormItem
                  icon={<PiCreditCardThin />}
                  method="CARTÃO DE CRÉDITO"
                  value="credit"
                />
                <PaymentFormItem
                  icon={<PiBankThin />}
                  method="CARTÃO DE DÉBITO"
                  value="debit"
                />
                <PaymentFormItem
                  icon={<PiMoneyThin />}
                  method="DINHEIRO"
                  value="money"
                />
              </RadioGroup>
            </FormControl>
          )}
        />
      </form>
    </Form>
  )
}
