import React from 'react';
import { connect } from 'react-redux';
import { getByCategoryByName } from '../../redux/shop/shop.actions';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match, collection,getByCategoryByName }) => {
    getByCategoryByName(match.params.collectionId);
    return (
      <div className="collection-page">
        <h2 className="title">{collection ? (collection.title): (null) }</h2>
        <div className="items">
          {collection ? (
            collection.items.map((item) => (
                <CollectionItem key={item.id} item={item} />
          ))
          ): (
              null)}
        </div>
      </div>
    );}

export default connect(
    (state) => ({
        collection: state.shop.collectionItems
    }),
    {getByCategoryByName}
)(CollectionPage);