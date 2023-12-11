import Link from 'next/link'

import Container from '@/components/ui/container'
import NavbarActions from '@/components/navigation/navbar-actions'
import getCategories from '@/actions/get-categories'
import MainNav from './main-nav'

const Navbar = async () => {
  const categories = await getCategories()

  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl'>NEXT STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}

export default Navbar