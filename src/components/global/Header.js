import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/icon/logo.svg';
import home from '../../assets/icon/home.svg';
import location from '../../assets/icon/location.svg';
import search from '../../assets/icon/search.svg';
import { DeviceContext } from '../../services/DeviceContextProvider';

const StyledHeader = styled.header`
    position: sticky;
    z-index: 9999;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 4%;
    background: #fff;
    box-shadow: 0px 4px 8px #00000014;

    .logo-wrap {
        display: flex;
        gap: 16px;
    }

    nav a {
        margin: 0 16px;
        font-size: 15px;
    }

    nav .active {
        transition: .42s ease;
        font-weight: 700;
    }

    @media only screen and (max-width: 576px) {
        nav a {
            margin: 0 10px;
        }

        nav .active{
            display: none;
        }
    }

    @media only screen and (max-width: 768px) and (min-aspect-ratio: 3/2) {
        position: static;
    }
`

export default function Header(){
    const device = useContext(DeviceContext);

    return (
        <StyledHeader>
            <div className='logo-wrap'>
                <img src={logo} alt="logo" />
                <div>
                    <h4>台灣公廁 e 點通</h4>
                    <h6 className='fw-300'>Taiwan Toilet+</h6>
                </div>
            </div>
            
            {
                device === 'MOBILE' ? (
                    <nav>
                        <NavLink to='/'>
                            <img src={home} alt='home link'></img>
                        </NavLink>
                        <NavLink to='search'>
                            <img src={search} alt='search toilet link'></img>
                        </NavLink>
                        <NavLink to='nearby'>
                            <img src={location} alt='nearby toilet link'></img>
                        </NavLink>
                    </nav>
                ) : (
                    <nav>
                        <NavLink to='/'>首頁</NavLink>
                        <NavLink to='search'>公廁查詢</NavLink>
                        <NavLink to='nearby'>附近查詢</NavLink>
                    </nav>
                )
            }   
        </StyledHeader>
    )
}