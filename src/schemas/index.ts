import * as z from 'zod'

export const DeliveryAddressSchema = z.object({
  zipCode: z
    .string()
    .min(9, { message: 'Por favor informe um CEP válido (00000-000)' }),
  street: z.string().min(1, { message: 'Informe uma rua válida!' }),
  number: z.string().min(1, { message: 'Informe um número válido!' }),
  complement: z.string().optional(),
  district: z.string().min(1, { message: 'Informe um bairro válido!' }),
  city: z.string().min(1, { message: 'Informe uma cidade válida!' }),
  state: z.string().min(1, { message: 'Informe um estado válido!' }),
})

export const PaymentMethodSchema = z.object({
  type: z.enum(['credit', 'debit', 'money'], {
    required_error: 'Voce precisa selecionar alguma forma de pagamento!',
  }),
})
