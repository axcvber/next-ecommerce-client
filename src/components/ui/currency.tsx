'use client'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

interface CurrencyProps {
  value?: string | number
}

const Currency: React.FC<CurrencyProps> = ({ value = 0 }) => {
  return <p className='font-semibold'>{formatter.format(Number(value))}</p>
}

export default Currency
