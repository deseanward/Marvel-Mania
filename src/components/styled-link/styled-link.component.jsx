import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLinkContainer, BackButtonContainer } from './styled-link.styles';

import { Link } from 'react-router-dom';

export const BackButton = ({ children }) => {
	const navigate = useNavigate();

	return (
		<BackButtonContainer onClick={() => navigate(-1)}>
			{children}
		</BackButtonContainer>
	);
};

export const NavButton = ({ children, to, target=null }) => {
	return (
		<StyledLinkContainer>
			<Link to={to} target={target}>{children}</Link>
		</StyledLinkContainer>
	);
};
