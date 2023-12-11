'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Color, Size } from '@/types'

import Filter from './filter'
import { Modal } from '@/components/ui/modal'

interface MobileFiltersProps {
  sizes: Size[]
  colors: Color[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
        Filters
        <Plus size={20} />
      </Button>

      <Modal isOpen={open} onClose={onClose}>
        <div className='p-4'>
          <Filter valueKey='sizeId' name='Sizes' data={sizes} />
          <Filter valueKey='colorId' name='Colors' data={colors} />
        </div>
      </Modal>
    </>
  )
}

export default MobileFilters
