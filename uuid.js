'use strict'

const fp = require('fastify-plugin')
const uuid = require('uuid')

function fastifyUUID(fastify, _options, next) {
	fastify.decorate('uuid', uuid)
	next()
}

module.exports = fp(fastifyUUID, {
	fastify: '4.x',
	name: 'fastify-uuid',
})

module.exports.uuid = uuid
