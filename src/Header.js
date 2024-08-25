import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Headeroption from './Headeroption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import NotificationAdd from '@mui/icons-material/NotificationAdd';
import Message from '@mui/icons-material/Message';
import { useDispatch } from 'react-redux';
import { logout } from './features/counter/userSlice';
import { getAuth, signOut } from "firebase/auth";


const Header = () => {
    const auth = getAuth();
    const dispatch = useDispatch();

    const logOutApp = () => {
        signOut(auth)
            .then(() => {

                dispatch(logout());
            })
    };
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' />

                <div className='header__search'>
                    <SearchIcon />
                    <input type='text' />

                </div>
            </div>

            <div className='header__right'>
                <Headeroption Icon={HomeIcon} title="Home" />
                <Headeroption Icon={SupervisorAccount} title="My Network" />
                <Headeroption Icon={BusinessCenter} title="Jobs" />
                <Headeroption Icon={Message} title="Messages" />
                <Headeroption Icon={NotificationAdd} title="Notification" />
                <Headeroption avatar="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy5QMODyHm-LaMpgXOqMIUHPbQ-Y51jAZR_UJYC-9Dv1IL3ovh" title="me"
                    onClick={logOutApp}
                />

            </div>
        </div>
    )
}

export default Header