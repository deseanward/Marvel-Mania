import React from 'react';
import { PreviewCardContainer } from './preview-card.styles';

const PreviewCard = ({ text, show }) => {
	return (
		<PreviewCardContainer show={show}>
			<h3>Image</h3>
			{text}
		</PreviewCardContainer>
	);
};

export default PreviewCard;
