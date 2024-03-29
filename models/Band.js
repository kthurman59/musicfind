const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Band = sequelize.define('Band', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        song: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //  Add other fields as needed
    });

    return Band;
};