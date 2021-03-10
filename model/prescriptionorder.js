module.exports = (sequelize, Sequelize) => {
    const MonitoringSheet = sequelize.define('prescription_order', {
        dialyzer_type: {
            type: Sequelize.STRING
        },
        dialysate_flow_rate: {
            type: Sequelize.STRING
        },
        blood_flow_rate: {
            type: Sequelize.STRING
        },
        frequency_of_hd_session: {
            type: Sequelize.STRING
        },
        duration_of_hd_treatment: {
            type: Sequelize.STRING
        },
        heparinization: {
            type: Sequelize.STRING
        },
        arterivenous_fistula_right: {
            type: Sequelize.STRING
        },
        arterivenous_fistula_left: {
            type: Sequelize.STRING
        },
        arteriovenus_graft_right: {
            type: Sequelize.STRING
        },
        date_inserted: {
            type: Sequelize.STRING
        },
        vascular_surgeon: {
            type: Sequelize.STRING
        },
        date_removed: {
            type: Sequelize.STRING
        },
        medication: {
            type: Sequelize.STRING
        },
        frequency: {
            type: Sequelize.STRING
        },
        route: {
            type: Sequelize.STRING
        } ,
        monthly_laboratory_exams: {
            type: Sequelize.STRING
        },
        semi_annual_exam: {
            type: Sequelize.STRING
        },
        annual_exam: {
            type: Sequelize.STRING
        }    
    });
    return PrescriptionOrder;
}