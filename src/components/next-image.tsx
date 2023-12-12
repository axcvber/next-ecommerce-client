import getBase64 from '@/lib/get-base-64'
import Image, { ImageProps } from 'next/image'
import React from 'react'

interface INextImage extends ImageProps {
  blured?: boolean
}

const NextImage: React.FC<INextImage> = async ({ blured = true, ...props }) => {
  // const myBlurDataUrl = await getBase64(props.src as string)

  return <Image {...props} className={'duration-700 ease-in-out'} />
}

export default NextImage
