/**
 * PropertiesController module
 *
 * at the moment, it only exports one async search function
 */

const { PropertiesDataProvider } = require('../models');

// search function is agnostic to the underlying data storage mechanism
const searchBySuburb = async (suburb) => {
  const properties = await PropertiesDataProvider.propertiesBySuburb(suburb);

  return properties;
};

module.exports = { searchBySuburb };
