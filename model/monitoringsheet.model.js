module.exports = (sequelize, Sequelize) => {
    const MonitoringSheet = sequelize.define('monitoring_sheet', {
        time: {
            type: Sequelize.STRING
        },
        bp: {
            type: Sequelize.STRING
        },
        qb: {
            type: Sequelize.STRING
        },
        ap: {
            type: Sequelize.STRING
        },
        vp: {
            type: Sequelize.STRING
        },
        tbp: {
            type: Sequelize.STRING
        },
        uf_vol: {
            type: Sequelize.STRING
        } 
    });
    return MonitoringSheet;
}