'use strict';

/**
 * banking-partner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::banking-partner.banking-partner');
