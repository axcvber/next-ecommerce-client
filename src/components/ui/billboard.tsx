import { Billboard } from '@/types'
import NextImage from '@/components/next-image'

interface BillboardProps {
  data: Billboard
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  if (!data) {
    return null
  }
  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
      <div
        // style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className='rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'
      >
        <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
          <h1 className='text-white font-medium text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>{data.label}</h1>
        </div>
        <NextImage
          src={data?.imageUrl}
          alt='Billboard'
          sizes='500px'
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  )
}

export default Billboard
