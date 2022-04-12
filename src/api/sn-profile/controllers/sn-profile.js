'use strict';

const Profile = require('../../../models/profile');

/**
 *  sn-profile controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sn-profile.sn-profile', () => ({

    async find(ctx) {

        const profiles = [];

        const { data } = await super.find(ctx);

        data.forEach(el => {
            profiles.push(new Profile(
                el.id,
                el.attributes.fullName,
                el.attributes.username,
                el.attributes.age,
                el.attributes.gender,
                el.attributes.phone,
                el.attributes.email,
                el.attributes.address,
                el.attributes.picture
            ))
        });

        return profiles;

    },

    async findOne(ctx) {

        const { data } = await super.findOne(ctx);

        return new Profile(
            data.id,
            data.attributes.fullName,
            data.attributes.username,
            data.attributes.age,
            data.attributes.gender,
            data.attributes.phone,
            data.attributes.email,
            data.attributes.address,
            data.attributes.picture
        );

    }

}));
