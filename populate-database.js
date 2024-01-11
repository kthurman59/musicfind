const fs = require('fs');
const csv = require('csv-parser');
const { Sequelize } = require('sequelize');
const sequelizeConfig = require('./sequelize.config');
const BandModel = require('./models/Band');

const sequelize = new Sequelize(sequelizeConfig.development);

const Band = BandModel(sequelize);

fs.createReadStream('/home/kevin/Projects/musicfind/backend/music.csv')
  .pipe(csv())
  .on('data', async (row) => {
    try {
        await Band.create({
            name: row.band,
            song: row.song,
            album: row.album,
            // Map other files from csv to your model
        });
    } catch (error) {
        console.error('Error creating record:', error);
    }
  })

  .on('end', () => {
    console.log('CSV file successfully processed.');
    process.exit(0);
  });