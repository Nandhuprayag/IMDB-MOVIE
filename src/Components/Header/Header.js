import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
const Header = () => {
    return (
        <div className='Header'>
            
            <Link to='/'>
            <div className='Logo'>
                    Movie App
            </div>
           
            </Link>
             <div className='user-Pic'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlf26-P4BSopUQrgSpw5dCKDLbGAyhHO6Kzw&usqp=CAU' alt='user-img'/>
            </div>
        </div>
    );
};

export default Header;
