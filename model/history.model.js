module.exports = (sequelize, Sequelize) => {
    const History = sequelize.define('history', {
        weight: {
            type: Sequelize.FLOAT
        },
        can_walk: {
            type: Sequelize.BOOLEAN
        }
    });
    return History;
}