import React from 'react';
import PropTypes from 'prop-types';

function PropertyItem({ property, onAddToFavourites, onRemoveFromFavourites }) {
  const { price, address } = property;

  // TODO: figure out if the property has been added to favourites or not
  const favoured = false;

  return (
    <div>
      <div>{price}</div>
      <div>{address}</div>

      {favoured && (
        <button
          onClick={() => {
            onRemoveFromFavourites();
          }}
        >
          remove from favourites
        </button>
      )}
      {!favoured && (
        <button
          onClick={() => {
            onAddToFavourites();
          }}
        >
          add to favourites
        </button>
      )}
    </div>
  );
}

PropertyItem.propTypes = {
  property: PropTypes.object.isRequired,
  onAddToFavourites: PropTypes.func.isRequired,
  onRemoveFromFavourites: PropTypes.func.isRequired,
};

export default PropertyItem;
