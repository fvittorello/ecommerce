import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from 'redux/shop/shop.selectors';
import WithSpinner from 'components/WithSpinner';
import CollectionPage from 'pages/Collection';

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionsPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionsPageContainer;
