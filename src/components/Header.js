import React,{useContext} from 'react'
import AddIcon from '@mui/icons-material/Add';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';

const Header = () => {
  const useAppstate=useContext(Appstate)
  return (
    <div className=' sticky top-0 header z-10 text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500'>
      <Link to={'/'} ><span>Movie<span className='text-white'>Fied</span></span></Link>
      {useAppstate.login?
        <Link to={"/addmovie"}><h1 className='text-lg text-white flex items-center cursor-pointer' ><Button><AddIcon className='mr-1  color:secondary'/><span className='text-white'>Add New</span></Button>
      </h1></Link>:
       <Link to={"/login"}><h1 className='text-lg text-white flex items-center cursor-pointer bg-green-500' ><Button><span className='text-white font-medium text-capitalize'>Login</span></Button>
       </h1></Link>}
    </div>
  )
}

export default Header
