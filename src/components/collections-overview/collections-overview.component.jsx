import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection.preview.component';
import './collections-overview.component';

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
  {collections.map(({ id, ...otherCollectionProps }) => (
    <CollectionPreview key={id} {...otherCollectionProps} />
  ))}
  </div>
);

export default connect(
    (state)=>({
      collections: state.shop.collections
    })
  )(CollectionOverview);