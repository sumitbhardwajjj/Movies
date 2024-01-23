import React from 'react'
import "../styles/Slidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import ClearIcon from '@mui/icons-material/Clear';
import {useSelector,useDispatch} from 'react-redux'
import {toogleSLider} from '../components/Slice'

const Slidebar = () => {

  const dispatch = useDispatch();

  const IsOpen = useSelector(state=>state.dash.isOpen)

  const toogleMenu = () =>{
    dispatch(toogleSLider())
  }

  return (
      <div className={IsOpen ? "side" : "slidebar"}>
      <div className="slide">
       <div className='heading'>
       <h2 className="logo">Dashboard</h2><ClearIcon id='clear' onClick={()=>toogleMenu(IsOpen)}/>
       </div>
        <ul>
          <p className="title">MAIN</p>
          <li className="lists">
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
          <p className="title">LISTS</p>
          <li className="lists">
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>
        </ul>
        <ul>
          <li className='lists'>
            <StoreIcon className="icon" />
            <span>Products</span>
          </li>
        </ul>
        <ul>
          <li className="lists">
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
        </ul>
        <ul>
          <li className="lists">
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
        </ul>
        <ul>
          <p className="title">USEFULL</p>
          <li className="lists">
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
        </ul>
        <ul>
          <li className="lists">
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
        </ul>
        <ul>
          <p className="title">SERVICES</p>
          <li className="lists">
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
        </ul>
        <ul>
          <li className="lists">
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
        </ul>
        <ul>
          <li className="lists">
            <SettingsIcon className="icon" />
            <span>Setting</span>
          </li>
        </ul>
        <ul>
          <p className="title">USER</p>
          <li className="lists">
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
        </ul>
        <ul>
          <li className="lists">
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Slidebar
