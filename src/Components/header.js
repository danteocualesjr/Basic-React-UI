import React from 'react';

import Avatar from './avatar';
import HeaderTitle from './headerTitle';
import HeaderText from './headerText';

const Header = () => {
    return (
        <div className="header">
            <Avatar />
            <HeaderTitle />
            <HeaderText />
        </div>
    )
}

export default Header;