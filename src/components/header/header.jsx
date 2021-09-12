import React from 'react';
import Flags from './flags/flags';
import './header.scss'
import Logo from './logo/logo';


const Header =()=>{

return (
<div className='header-container'>
    <Logo/>
<Flags/>
</div>
);

};

export default Header;