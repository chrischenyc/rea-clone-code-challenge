import React from 'react';
import PropTypes from 'prop-types';

function PropertiesList({ properties, renderItem }) {
  return (
    <div>
      <ul>
        {properties.map((property) => {
          return renderItem(property);
        })}
      </ul>
    </div>
  );
}

PropertiesList.propTypes = {
  properties: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default PropertiesList;
