import React from 'react';
import Navigation from '../nav/nav.component';
import { HeaderContainer, Logo, LogoContainer } from './header.styles';

const Header = () => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo
					src='/assets/images/marvel-logo.jpg'
					alt='Marvel Logo'></Logo>
            </LogoContainer>
            
            <Navigation />
		</HeaderContainer>
	);
};

export default Header;
