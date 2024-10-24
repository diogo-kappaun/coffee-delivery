import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup } from '@/components/ui/radio-group'
import { PaymentFormItem } from '@/pages/Checkout/components/PaymentFormItem'
import { DeliveryFormSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  PiBankThin,
  PiCreditCardThin,
  PiCurrencyDollar,
  PiMapPinLine,
  PiMoneyThin,
} from 'react-icons/pi'
import * as z from 'zod'

export const DeliveryForm = () => {
  const form = useForm<z.infer<typeof DeliveryFormSchema>>({
    resolver: zodResolver(DeliveryFormSchema),
    defaultValues: {
      city: '',
      complement: '',
      district: '',
      number: '',
      state: '',
      street: '',
      zipCode: '',
    },
  })
  return (
    <Form {...form}>
      <form className="flex flex-1 flex-col gap-3">
        <div className="space-y-8 rounded-md bg-card p-10">
          <div className="flex gap-2">
            <PiMapPinLine size={22} className="text-product-yellow-dark" />
            <div>
              <span>Endereço de Entrega</span>
              <p className="text-sm">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[16px_12px] min-[500px]:grid min-[500px]:grid-cols-form">
            <FormField
              control={form.control}
              name="zipCode"
              render={(field) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="CEP" type="text" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={(field) => (
                <FormItem className="col-span-3 row-start-2 row-end-2">
                  <FormControl>
                    <Input {...field} placeholder="Rua" type="text" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={(field) => (
                <FormItem className="row-start-3 row-end-3">
                  <FormControl>
                    <Input {...field} placeholder="Número" type="text" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="complement"
              render={(field) => (
                <FormItem className="col-span-2 row-start-3 row-end-3">
                  <FormControl>
                    <Input {...field} placeholder="Complemento" type="text" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="district"
              render={(field) => (
                <FormItem className="row-start-4 row-end-4">
                  <FormControl>
                    <Input {...field} placeholder="Bairro" type="text" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={(field) => (
                <FormItem className="row-start-4 row-end-4">
                  <FormControl>
                    <Input {...field} placeholder="Cidade" type="text" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={(field) => (
                <FormItem className="row-start-4 row-end-4">
                  <FormControl>
                    <Input {...field} placeholder="UF" type="text" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-8 rounded-md bg-card p-10">
          <div className="flex gap-2">
            <PiCurrencyDollar size={22} className="text-product-yellow-dark" />
            <div>
              <span>Pagamento</span>
              <p className="text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar{' '}
              </p>
            </div>
          </div>
          <FormField
            control={form.control}
            name="method"
            render={({ field }) => (
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-3"
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
        </div>
      </form>
    </Form>
  )
}
