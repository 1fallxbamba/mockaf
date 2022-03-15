'use strict';

/**
 *  testing controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::testing.testing', () => ({

    async find(ctx) {

        const {data} = await super.find(ctx);
    
        return {data};
    
    }

}));
