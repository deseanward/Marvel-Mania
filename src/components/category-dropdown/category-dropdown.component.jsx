import React from 'react';
import { CategoryDropdownContainer } from './category-dropdown.styles';

const CategoryDropdown = ({ children, expand, hovered }) => {
  const show = expand;
  const category = hovered

	return (
		<CategoryDropdownContainer show={show} hovered={category}>
			<h3>{children}</h3>
		</CategoryDropdownContainer>
	);
};

export default CategoryDropdown;
