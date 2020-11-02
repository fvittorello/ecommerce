import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from 'redux/directory/directory.selectors';

// Styles
import { DirectoryMenuContainer } from './directory.styles';

import MenuItem from 'components/Menu-Item';

const Directory = ({ sections }) => {
	return (
		<DirectoryMenuContainer>
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</DirectoryMenuContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
