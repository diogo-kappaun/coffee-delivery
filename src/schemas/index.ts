import * as z from 'zod'

export const DeliverySchema = z.object({
  zipCode: z.string().min(1, { message: 'Informe um CEP' }),
  street: z.string().min(1, { message: 'Informe uma Rua' }),
  number: z.string().min(1, { message: 'Informe um Numero' }),
  complement: z.string().optional(),
  district: z.string().min(1, { message: 'Informe um Bairro' }),
  city: z.string().min(1, { message: 'Informe um Cidade' }),
  state: z.string().min(1, { message: 'Informe um Estado' }),
  method: z.enum(['credit', 'debit', 'money'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})
