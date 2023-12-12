'use client'

import { Trash2, X } from 'lucide-react'

import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import { Product } from '@/types'
import { Button } from '@/components/ui/button'
import NextImage from '@/components/next-image'
import getBase64 from '@/lib/get-base-64'

interface CartItemProps {
  data: Product
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart()

  const onRemove = () => {
    cart.removeItem(data.id)
  }

  return (
    <li className='flex py-6 border-b'>
      <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
        <NextImage fill src={data.images[0].url} alt='' className='object-cover object-center' />
      </div>
      <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div className='absolute z-10 right-0 top-0'>
          <Button size={'icon'} className='p-2 w-auto h-auto' variant={'destructive'} onClick={onRemove}>
            <Trash2 size={15} />
          </Button>
        </div>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div className='flex justify-between'>
            <p className=' text-lg font-semibold text-black'>{data.name}</p>
          </div>

          <div className='mt-1 flex text-sm'>
            <p className='text-gray-500'>{data.color.name}</p>
            <p className='ml-4 border-l border-gray-200 pl-4 text-gray-500'>{data.size.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  )
}

export default CartItem
