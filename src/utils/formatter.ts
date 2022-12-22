export const dateFormatter = Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BLR',
  minimumFractionDigits: 2,
})
