function Navbar() {
 
  return (
    <>
     <div className='w-full bg-yellow-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase text-gray-800'>Farmagen</div>

            <div className='flex gap-4 text-gray-800'>
              <div className='hover:text-zinc-950'>Produtos</div>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar Categoria</div>
              <div className='hover:underline'>Carrinho</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar