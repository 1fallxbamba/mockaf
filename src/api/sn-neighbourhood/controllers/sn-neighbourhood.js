'use strict';

/**
 *  sn-neighbourhood controller
 */

 let neighbourhood = {
    id: Number,
    name: String,
    region: String,
    subs: Object
};

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sn-neighbourhood.sn-neighbourhood', () => ({

    async find(ctx) {

        const neighbourhoods = [];

        const { data } = await super.find(ctx);

        data.forEach(el => {
            neighbourhood.id = el.id;
            neighbourhood.name = el.attributes.name;
            neighbourhood.region = el.attributes.region;
            neighbourhood.subs = el.attributes.subs;
            neighbourhoods.push(el)
        });

        return neighbourhoods;

    },

    async findOne(ctx) {

        const { data } = await super.findOne(ctx);

        neighbourhood.id = data.id;
        neighbourhood.name = data.attributes.name;
        neighbourhood.region = data.attributes.region;
        neighbourhood.subs = data.attributes.subs;

        return neighbourhood;

    }

}));
