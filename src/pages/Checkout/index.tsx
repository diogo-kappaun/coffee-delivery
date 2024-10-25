import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup } from '@/components/ui/radio-group'
import { CartItem } from '@/pages/Checkout/components/CartItem'
import { OrderSummary } from '@/pages/Checkout/components/OrderSummary'
import { DeliverySchema } from '@/schemas'
import { useCart } from '@/store/cart'
import { useOrder } from '@/store/order'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  PiBankThin,
  PiCreditCardThin,
  PiCurrencyDollar,
  PiMapPinLine,
  PiMoneyThin,
} from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import * as z from 'zod'
import { PaymentFormItem } from './components/PaymentFormItem'

export interface CartProductsProps {
  id: string
  url: string
  name: string
  price: number
  quantity: number
}

export const Checkout = () => {
  const { items, cleanCart } = useCart()
  const { create } = useOrder()

  const navigate = useNavigate()

  const deliveryPrice = 3.5
  const totalCartProducts = items.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0,
  )

  const form = useForm<z.infer<typeof DeliverySchema>>({
    resolver: zodResolver(DeliverySchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      method: undefined,
    },
  })

  const onSubmit = (values: z.infer<typeof DeliverySchema>) => {
    const newOrder = {
      delivery: values,
      items,
    }
    create(newOrder)

    cleanCart()

    navigate('/success')
  }

  return items.length === 0 ? (
    <div className="mx-auto flex w-page flex-col items-center">
      <h2 className="text-2xl font-bold">Sem items no carrinho</h2>
      <Link to="/">
        <Button variant="link">Voltar para o início</Button>
      </Link>
    </div>
  ) : (
    <main className="mx-auto mt-10 flex w-page flex-col gap-8 px-5 pb-12 lg:flex-row">
      <div className="space-y-4">
        <h2 className="font-baloo text-lg font-bold">Complete seu pedido</h2>
        <Form {...form}>
          <form
            id="delivery"
            className="space-y-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-8 rounded-md bg-card p-10">
              <div className="flex space-x-2">
                <PiMapPinLine className="text-product-yellow-dark" size={22} />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p className="text-sm">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[16px_12px] min-[500px]:grid min-[500px]:grid-cols-form">
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="CEP" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem className="col-span-3 row-start-2 row-end-2">
                      <FormControl>
                        <Input {...field} placeholder="Rua" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem className="row-start-3 row-end-3">
                      <FormControl>
                        <Input {...field} placeholder="Numero" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="complement"
                  render={({ field }) => (
                    <FormItem className="col-span-2 row-start-3 row-end-3">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Complemento"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="district"
                  render={({ field }) => (
                    <FormItem className="row-start-4 row-end-4">
                      <FormControl>
                        <Input {...field} placeholder="Bairro" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="row-start-4 row-end-4">
                      <FormControl>
                        <Input {...field} placeholder="Cidade" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="row-start-4 row-end-4">
                      <FormControl>
                        <Input {...field} placeholder="UF" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-8 rounded-md bg-card p-10">
              <div className="flex space-x-2">
                <PiCurrencyDollar
                  className="text-product-yellow-dark"
                  size={22}
                />
                <div>
                  <h3>Pagamento</h3>
                  <p className="text-sm">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
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
                      className="flex flex-col gap-3"
                    >
                      <div className="flex flex-1 gap-3">
                        <PaymentFormItem
                          icon={<PiCreditCardThin />}
                          method="CRÉDITO"
                          value="credit"
                        />
                        <PaymentFormItem
                          icon={<PiBankThin />}
                          method="DÉBITO"
                          value="debit"
                        />
                        <PaymentFormItem
                          icon={<PiMoneyThin />}
                          method="DINHEIRO"
                          value="money"
                        />
                      </div>
                      <FormMessage className="" />
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </div>
          </form>
        </Form>
      </div>

      <div className="space-y-4">
        <h2 className="font-baloo text-lg font-bold">Cafés selecionados</h2>
        <div className="w-full space-y-6 rounded-[6px_36px] bg-card p-10 lg:w-[456px]">
          {items && items.map((item) => <CartItem key={item.id} data={item} />)}

          <div className="flex flex-col gap-3">
            <OrderSummary text="Total de itens" value={totalCartProducts} />
            <OrderSummary text="Taxa de entrega" value={deliveryPrice} />
            <OrderSummary
              isBold
              text="Total do pedido"
              value={totalCartProducts + deliveryPrice}
            />
            <Button
              type="submit"
              form="delivery"
              className="mt-3 w-full bg-product-yellow py-5 hover:bg-product-yellow/80"
            >
              CONFIRMAR PEDIDO
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
