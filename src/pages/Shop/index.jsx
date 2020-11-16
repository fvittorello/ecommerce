import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from 'redux/shop/shop.actions';

// Components
import CollectionsOverviewContainer from 'components/CollectionsOverview/collections-overview.container';
import CollectionPageContainer from 'pages/Collection/collection.container';

const Shop = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
