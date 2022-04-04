'use strict';

/**
 *  sn-region controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sn-region.sn-region', () => ({

    async find(ctx) {

        const regions = [];

        const { data } = await super.find(ctx);

        data.forEach(el => {
            regions.push(el.attributes.name)
        });

        return regions;

    },

    async findOne(ctx) {

        const { data } = await super.findOne(ctx);

        return data.attributes.name;

    }

}));
