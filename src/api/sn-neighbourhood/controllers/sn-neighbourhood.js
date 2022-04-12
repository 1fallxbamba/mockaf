'use strict';

const Neighbourhood = require('../../../models/neighbourhood');

/**
 *  sn-neighbourhood controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sn-neighbourhood.sn-neighbourhood', () => ({

    async find(ctx) {

        const neighbourhoods = [];

        const { data } = await super.find(ctx);

        data.forEach(el => {
            neighbourhoods.push(
                new Neighbourhood(el.id, el.attributes.name, el.attributes.region, el.attributes.subs)
            )
        });

        return neighbourhoods;

    },

    async findOne(ctx) {

        const { data } = await super.findOne(ctx);

        return new Neighbourhood(
            data.id,
            data.attributes.name,
            data.attributes.region,
            data.attributes.subs);
    }

}));
