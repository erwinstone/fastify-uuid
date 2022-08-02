import { FastifyPluginCallback } from 'fastify'
import uuid from 'uuid'

declare const fastifyUUID: FastifyPluginCallback

export default fastifyUUID

declare module 'fastify' {
	interface FastifyInstance {
		uuid: typeof uuid
	}
}
