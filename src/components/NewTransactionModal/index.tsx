import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import {
  Close,
  Content,
  Overlay,
  TransacitonTypeButton,
  TransactionType,
} from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova transação</Dialog.Title>

          <Close>
            <X size={24} />
          </Close>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" />
            <input type="text" placeholder="Categoria" />

            <TransactionType>
              <TransacitonTypeButton variant="income">
                <ArrowCircleUp size={24} />
                Entrada
              </TransacitonTypeButton>
              <TransacitonTypeButton variant="outcome">
                <ArrowCircleDown size={24} />
                Saida
              </TransacitonTypeButton>
            </TransactionType>

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
