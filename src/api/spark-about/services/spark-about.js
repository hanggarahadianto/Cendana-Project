'use strict';

/**
 * spark-about service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spark-about.spark-about');
