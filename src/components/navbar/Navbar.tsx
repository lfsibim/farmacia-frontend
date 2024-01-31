import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
 
  return (
    <>
     <div className='w-full bg-yellow-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase text-gray-800'>Farmagen</Link>

            <div className='flex gap-4 text-gray-800'>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar