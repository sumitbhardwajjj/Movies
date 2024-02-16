import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch,useSelector } from 'react-redux';
import {toogledarkMode,toogleSLider} from '../components/Slice'

const Navbar = () => {

  const dispatch = useDispatch();

  const darkMode = useSelector(state=>state.dash.darkMode)

  const IsOpen = useSelector(state=>state.dash.isOpen)

  const toogle = ()=>{
    dispatch(toogledarkMode())
  }
  
  const toogleMenu = () =>{
    dispatch(toogleSLider())
  }


  return (
    <nav className='nav'>
       <div className='navbar'>
      <div className='wrapp'>
        <div className='searc'>
        <MenuIcon id='menu' onClick={()=>toogleMenu(IsOpen)} />
        <div className='search'>
        <SearchIcon className='search-icon'/>
          <input type="text" placeholder='search' />
        </div>
        </div>
        <div className='items'>
          <div className='item'>
            <DarkModeIcon  className='icon' onClick={()=>toogle(darkMode)}/>
          </div>
          <div className='item'>
            <NotificationsIcon className='icon'/>
            <div className='icon3'>3</div>
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
