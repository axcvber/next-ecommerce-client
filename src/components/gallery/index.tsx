'use client'

import NextImage from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Image } from '@/types'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface GalleryProps {
  images: Image[]
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  const [selected, setSelected] = useState(images[0].id)

  return (
    <Tabs defaultValue={images[0].id} className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <TabsList className='grid grid-cols-4 gap-6'>
          {images.map((image) => (
            <TabsTrigger
              onClick={() => setSelected(image.id)}
              key={image.id}
              value={image.id}
              className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'
            >
              <div>
                <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                  <NextImage fill src={image.url} alt='' className='object-cover object-center' />
                </span>
                <span
                  className={cn(
                    'absolute inset-0 rounded-md ring-2 ring-offset-2',
                    selected === image.id ? 'ring-black' : 'ring-transparent'
                  )}
                />
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <div className='aspect-square w-full'>
        {images.map((image) => (
          <TabsContent key={image.id} value={image.id}>
            <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
              <NextImage priority fill src={image.url} alt='Image' className='object-cover object-center' />
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  )
}

export default Gallery
