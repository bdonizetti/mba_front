import { PlusIcon } from 'lucide-react'
import LogoOnly from '../assets/LogoOnly.svg'
import { Button } from './button'
import { NavBar } from './nav-bar'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '../api/get-profile'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  })

  return (
    <div className="max-w-[1920px] w-full p-5 mx-auto h-20 bg-shape-background border-b border-b-shape-shape">
      <div className='grid grid-cols-3 items-center'>
        <button onClick={() => navigate('/')}>
          <img src={LogoOnly} alt="logo" className='place-items-start' />
        </button>

        <div className='flex justify-center items-center'>
          <NavBar />
        </div>

        <div className='flex items-center justify-end gap-4'>
          <Button onClick={() => navigate('/products/new')}><PlusIcon /> Novo produto</Button>
          <img src={data?.seller?.avatar?.url} alt={data?.seller?.name} className='w-12 h-12 rounded-xl object-cover' />
        </div>
      </div>
    </div>
  )
}