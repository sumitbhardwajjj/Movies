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

const Slidebar = () => {
  return (
      <div className='slidebar'>
      <div className="slide">
        <h2 className="logo">Dashboard</h2>
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>
        </ul>
        <ul>
          <li>
            <StoreIcon className="icon" />
            <span>Products</span>
          </li>
        </ul>
        <ul>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
        </ul>
        <ul>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
        </ul>
        <ul>
          <p className="title">USEFULL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
        </ul>
        <ul>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
        </ul>
        <ul>
          <p className="title">SERVICES</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
        </ul>
        <ul>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
        </ul>
        <ul>
          <li>
            <SettingsIcon className="icon" />
            <span>Setting</span>
          </li>
        </ul>
        <ul>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
        </ul>
        <ul>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Slidebar
