import homeLogo from '../../assets/home.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-white flex justify-center text-gray-800">
          <div className='container grid grid-cols-2'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold '>Bem vindo à FarmaGen!</h2>
              <p className='text-xl'></p>
              <div className="flex justify-around gap-4">
              </div>
            </div>
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;