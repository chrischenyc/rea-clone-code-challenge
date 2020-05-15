const PropertiesMockProvider = require('./mock.provider');
const PropertiesDatabaseProvider = require('./database.provider');
const PropertiesElasticSearchProvider = require('./elastic-search.provider');

let PropertiesDataProvider;

switch (process.env.DATA_PROVIDER) {
  case 'mock':
    PropertiesDataProvider = PropertiesMockProvider;
    break;

  case 'database':
    PropertiesDataProvider = PropertiesDatabaseProvider;
    break;

  case 'elastic-search':
    PropertiesDataProvider = PropertiesElasticSearchProvider;
    break;

  default:
    break;
}

module.exports = { PropertiesDataProvider };
