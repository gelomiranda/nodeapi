module.exports = (sequelize, Sequelize) => {
    const Treatment = sequelize.define('treatment', {
        machine: {
            type: Sequelize.STRING(50)
        },
        patient_care: {
            type: Sequelize.STRING(50)
        },
        dialyzer: {
            type: Sequelize.STRING(50)
        },
        duration: {
            type: Sequelize.STRING(50)
        },
        peroxide_residual_strip_test: {
            type: Sequelize.STRING(50)
        },
        peracetic_acid_test: {
            type: Sequelize.STRING(50)
        },
        hepatitis_status: {
            type: Sequelize.STRING(50)
        },
        anticoagulant: {
            type: Sequelize.STRING(50)
        },
        dry_weight: {
            type: Sequelize.FLOAT
        },
        pre_hd_weight: {
            type: Sequelize.FLOAT
        },
        dialysis_bath: {
            type: Sequelize.BOOLEAN
        },
        dialysis_acid: {
            type: Sequelize.STRING(50)
        },
        uf_goal: {
            type: Sequelize.STRING(50)
        },
        meqs: {
            type: Sequelize.STRING(50)
        },
        QB: {
            type: Sequelize.STRING(50)
        },
        QD: {
            type: Sequelize.STRING(50)
        },
        pre_hd_status: {
            type: Sequelize.STRING(50)
        },
        pre_hd_bp: {
            type: Sequelize.STRING(50)
        },
        pre_hd_hr: {
            type: Sequelize.STRING(50)
        },
        pre_hd_rr: {
            type: Sequelize.STRING(50)
        },
        pre_hd_temp: {
            type: Sequelize.STRING(50)
        },
        pre_hd_pulse: {
            type: Sequelize.STRING(50)
        },
        pre_hd_lungs: {
            type: Sequelize.STRING(50)
        },
        pre_hd_neuro: {
            type: Sequelize.STRING(50)
        },
        pre_hd_edema: {
            type: Sequelize.STRING(50)
        },
        pre_hd_gastro: {
            type: Sequelize.STRING(50)
        },
        pre_hd_skin_color: {
            type: Sequelize.STRING(50)
        },
        pre_hd_turgor: {
            type: Sequelize.STRING(50)
        },
        pre_hd_others: {
            type: Sequelize.STRING(50)
        },
        pre_hd_neck_veins: {
            type: Sequelize.STRING(50)
        },
        pre_hd_genito_urinary: {
            type: Sequelize.STRING(50)
        },
        pre_hd_complaints: {
            type: Sequelize.STRING(50)
        },
        pre_hd_vascular_access: {
            type: Sequelize.STRING(50)
        },
        pre_hd_bruit: {
            type: Sequelize.STRING(50)
        },
        pre_hd_thrili: {
            type: Sequelize.STRING(50)
        },
        pre_hd_catheter_assessment: {
            type: Sequelize.STRING(50)
        },
        pre_hd_catheter_opened_by: {
            type: Sequelize.STRING(50)
        },
        pre_hd_catheter_dressing: {
            type: Sequelize.STRING(50)
        },
        pre_hd_av_fistula_needle_cannulation: {
            type: Sequelize.STRING(50)
        },
        pre_hd_annesthesia: {
            type: Sequelize.STRING(50)
        },
        pre_hd_cannulated_by: {
            type: Sequelize.STRING(50)
        },
        pre_hd_new_fistula_assessment: {
            type: Sequelize.STRING(50)
        },
        pre_hd_new_fistula_assessment_date: {
            type: Sequelize.STRING(50)
        },
        pre_hd_new_fistula_sign_of_infection: {
            type: Sequelize.STRING(50)
        },
        pre_hd_primed_by: {
            type: Sequelize.STRING(50)
        },
        pre_hd_hooked_by: {
            type: Sequelize.STRING(50)
        },
        post_hd_status: {
            type: Sequelize.STRING(50)
        },
        post_hd_bp: {
            type: Sequelize.STRING(50)
        },
        post_hd_hr: {
            type: Sequelize.STRING(50)
        },
        post_hd_rr: {
            type: Sequelize.STRING(50)
        },
        post_hd_temp: {
            type: Sequelize.STRING(50)
        },
        post_hd_pulse: {
            type: Sequelize.STRING(50)
        },
        post_hd_lungs: {
            type: Sequelize.STRING(50)
        },
        post_hd_neuro: {
            type: Sequelize.STRING(50)
        },
        post_hd_edema: {
            type: Sequelize.STRING(50)
        },
        post_hd_gastro: {
            type: Sequelize.STRING(50)
        },
        post_hd_skin_color: {
            type: Sequelize.STRING(50)
        },
        post_hd_turgor: {
            type: Sequelize.STRING(50)
        },
        post_hd_others: {
            type: Sequelize.STRING(50)
        },
        post_hd_neck_veins: {
            type: Sequelize.STRING(50)
        },
        post_hd_genito_urinary: {
            type: Sequelize.STRING(50)
        },
        post_hd_complaints: {
            type: Sequelize.STRING(50)
        },
        post_hd_vascular_access: {
            type: Sequelize.STRING(50)
        },
        post_hd_bruit: {
            type: Sequelize.STRING(50)
        },
        post_hd_thrili: {
            type: Sequelize.STRING(50)
        },
        post_hd_catheter_assessment: {
            type: Sequelize.STRING(50)
        },
        post_hd_catheter_opened_by: {
            type: Sequelize.STRING(50)
        },
        post_hd_catheter_dressing: {
            type: Sequelize.STRING(50)
        },
        post_hd_discharged: {
            type: Sequelize.STRING(50)
        },
        post_hd_date: {
            type: Sequelize.STRING(50)
        },
        post_hd_monthly_labs_due_on: {
            type: Sequelize.STRING(50)
        },
        post_hd_last_follow_up: {
            type: Sequelize.STRING(50)
        },
        post_hd_last_monitored_by: {
            type: Sequelize.STRING(50)
        },
        post_hd_terminated_by: {
            type: Sequelize.STRING(50)
        },
        status: {
            type: Sequelize.STRING(50)
        }
    });
    return Treatment;
}