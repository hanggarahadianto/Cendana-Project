'use strict';

/**
 * news-highlight service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-highlight.news-highlight');
