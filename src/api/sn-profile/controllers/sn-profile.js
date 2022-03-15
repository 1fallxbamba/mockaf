'use strict';

/**
 *  sn-profile controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const profile = {id: Number, fullName: String};

module.exports = createCoreController('api::sn-profile.sn-profile', () => ({

    async find(ctx) {

        const profiles = [];

        const {data} = await super.find(ctx);

        data.forEach(el => {
            profile.id = el.id;
            profile.fullName = el.attributes.fullName;

            profiles.push(profile)
        });
    
        return profiles;
    
    }

}));
