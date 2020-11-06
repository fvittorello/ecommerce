import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from 'redux/shop/shop.actions';

// Components
import CollectionsOverviewContainer from 'components/CollectionsOverview/collections-overview.container';
import CollectionPageContainer from 'pages/Collection/collection.container';

class Shop extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match } = this.props;

		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
