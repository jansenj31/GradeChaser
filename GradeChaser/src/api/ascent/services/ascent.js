'use strict';

/**
 * ascent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ascent.ascent');
