import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { DeliveryAddressSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export const DeliveryForm = () => {
  const form = useForm<z.infer<typeof DeliveryAddressSchema>>({
    resolver: zodResolver(DeliveryAddressSchema),
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

  const onSubmit = (values: z.infer<typeof DeliveryAddressSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-[16px_12px] min-[500px]:grid min-[500px]:grid-cols-form"
      >
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
      </form>
    </Form>
  )
}
