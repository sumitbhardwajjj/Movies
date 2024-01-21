import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch,useSelector } from 'react-redux';
import {toogledarkMode} from '../components/Slice'

const Navbar = () => {

  const dispatch = useDispatch();

  const darkMode = useSelector(state=>state.dash.darkMode)

  const toogle = ()=>{
    dispatch(toogledarkMode())
  }


  return (
    <nav className='nav'>
       <div className='navbar'>
      <div className='wrapp'>
        <div className='search'>
        <MenuIcon id='menu' />
        <SearchIcon className='icon'/>
          <input type="text" placeholder='search' />
        </div>
        <div className='items'>
          <div className='item'>
            <DarkModeIcon  className='icon' onClick={()=>toogle(darkMode)}/>
          </div>
          <div className='item'>
            <NotificationsIcon className='icon'/>
          </div>
          <div className='item'>
            <ChatBubbleOutlineIcon className='icon'/>
          </div>
        </div>
      </div>
    </div>
    </nav>
  )
}

export default Navbar
