import { NavLink, useNavigate } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { useContext } from 'react';
import UserContext from '../context/User.context';

const Navbar = () => {

    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const DoLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    let publicNav = () => {
        return (
            <header className='header'>
                <div className="nav-wrapper">
                    <div className="header-side-1">
                        <NavLink to="/home"> CafeMX</NavLink>
                        <NavLink to="/products">Productos</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </div>
                    <div className="header-side-2">
                        <NavLink to="/login">Login</NavLink>
                    </div>
                </div>
            </header>
        )
    }

    let privateNav = () => {
        return (
            <header className='header'>
                <div className="nav-wrapper">
                    <div className="header-side-1">
                        <NavLink to="/home"> CafeMX</NavLink>
                        <NavLink to="/products">Productos</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </div>
                    <div className="header-side-2">
                        <NavLink to="/checkout"><BsFillCartFill /></NavLink>
                        <NavLink to="/profile" style={{ "textDecoration": "underline" }}>{user?.name}</NavLink>
                        <button className='btn btn-light btn-sm ms-2' onClick={DoLogout} >Logout</button>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <>
            {
                user?.id ? (privateNav()) : (publicNav())
            }
        </>
    );
}

export default Navbar;