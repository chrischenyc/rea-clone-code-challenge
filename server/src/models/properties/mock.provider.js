const mockProperties = require('./mock.json');

const propertiesBySuburb = async (suburb) => {
  return mockProperties;
};

module.exports = { propertiesBySuburb };
