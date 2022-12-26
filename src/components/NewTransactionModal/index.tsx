import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import {
  Close,
  Content,
  Overlay,
  TransacitonTypeButton,
  TransactionType,
} from './styles'
import { Controller, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleNewTransaction(data: NewTransactionFormInputs) {
    createTransaction(data)
    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova transação</Dialog.Title>

          <Close>
            <X size={24} />
          </Close>

          <form action="" onSubmit={handleSubmit(handleNewTransaction)}>
            <input
              type="text"
              {...register('description')}
              placeholder="Descrição"
              required
            />
            <input
              type="number"
              {...register('price', { valueAsNumber: true })}
              placeholder="Preço"
            />
            <input
              type="text"
              {...register('category')}
              placeholder="Categoria"
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransacitonTypeButton variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransacitonTypeButton>
                    <TransacitonTypeButton variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saida
                    </TransacitonTypeButton>
                  </TransactionType>
                )
              }}
            />

            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
