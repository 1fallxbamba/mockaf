'use strict';

/**
 *  sn-profile controller
 */

let profile = {
    id: Number,
    fullName: String,
    username: String,
    gender: String,
    age: Number,
    email: String,
    phone: String,
    address: Object,
    picture: String,
    createdAt: Date
};

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sn-profile.sn-profile', () => ({

    async find(ctx) {

        const profiles = [];

        const { data } = await super.find(ctx);

        data.forEach(el => {
            profile.id = el.id;
            profile.fullName = el.attributes.fullName;
            profile.username = el.attributes.username;
            profile.gender = el.attributes.gender;
            profile.age = el.attributes.age;
            profile.email = el.attributes.email;
            profile.phone = el.attributes.phone;
            profile.address = el.attributes.address;
            profile.picture = el.attributes.picture;
            profile.createdAt = el.attributes.createdAt;
            profiles.push(profile)
        });

        return profiles;

    },

    async findOne(ctx) {

        const { data } = await super.findOne(ctx);

        profile.id = data.id;
        profile.fullName = data.attributes.fullName;

        return profile;

    }

}));
