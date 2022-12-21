import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import imgLogo from '../../assets/image/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={imgLogo} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
