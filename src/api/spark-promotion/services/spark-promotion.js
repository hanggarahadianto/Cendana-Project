'use strict';

/**
 * spark-promotion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spark-promotion.spark-promotion');
