import React from 'react';

import Avatar from '../Avatar/avatar';
import HeaderTitle from '../HeaderTitle/headerTitle';
import HeaderText from '../HeaderText/headerText';

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