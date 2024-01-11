const { Sequelize } = require('sequelize');
const sequelizeConfig = require('./sequelize.config');
const BandModel = require('./models/Band');

const sequelize = new Sequelize(sequelizeConfig.development);

const Band = BandModel(sequelize);

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Databse synchronized successfully.')
        process.exit(0);
    } catch (error) {
        console.error('Error synchronizing database:', error);
        process.exit(1);
    }
})();