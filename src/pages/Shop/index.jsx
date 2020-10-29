import React from 'react';

import CollectionsOverview from 'components/CollectionsOverview';

const Shop = ({ collections }) => {
	return (
		<div className='shop-page'>
			<CollectionsOverview />
		</div>
	);
};

export default Shop;
