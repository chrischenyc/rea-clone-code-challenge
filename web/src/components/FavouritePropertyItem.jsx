import React from 'react';
import PropTypes from 'prop-types';

function FavouritePropertyItem({ property, onRemoveFromFavourites }) {
  const { price, address } = property;

  return (
    <div>
      <div>{price}</div>
      <div>{address}</div>

      <button
        onClick={() => {
          onRemoveFromFavourites();
        }}
      >
        remove from favourites
      </button>
    </div>
  );
}

FavouritePropertyItem.propTypes = {
  property: PropTypes.object.isRequired,
  onRemoveFromFavourites: PropTypes.func.isRequired,
};

export default FavouritePropertyItem;
