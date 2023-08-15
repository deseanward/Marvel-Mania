import React, { useState } from 'react';
import CategoryDropdown from '../category-dropdown/category-dropdown.component';

import { VscTriangleUp } from 'react-icons/vsc';
import {
	ArrowContainer,
	NavContainer,
	NavContent,
	NavItem,
} from './nav.styles';

const Navigation = () => {
	// Navigation Categories
	const categories = ['comics', 'characters', 'movies', 'games'];

	// Cache of the hovered navigation category
	const [hoveredCategory, setHoveredCategory] = useState(null);

	const [expand, setExpand] = useState(false);

	// Display the navigation dropdown
	const handleShowPreview = category => {
		setHoveredCategory(category.toUpperCase());
		setExpand(true);
	};

	// Hide the navigation dropdown
	const handleHidePreview = () => {
		setHoveredCategory(null);
		setExpand(false);
	};

	return (
		<NavContainer onMouseLeave={() => handleHidePreview()}>
			<NavContent>
				{categories.map(category => {
					return (
						<>
							<NavItem
								key={category}
								value={category}
								to={`/${category}`}
								onMouseEnter={() =>
									handleShowPreview(category)
								}>
								{category.toUpperCase()}
								<ArrowContainer
									id='arrow'
									className='arrow'
									show={expand}>
									<VscTriangleUp />
								</ArrowContainer>
							</NavItem>
						</>
					);
				})}
			</NavContent>
			<CategoryDropdown expand={expand} hovered={hoveredCategory}>
				{hoveredCategory}
			</CategoryDropdown>
		</NavContainer>
	);
};

export default Navigation;
