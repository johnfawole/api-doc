const fastify = require('fastify')({logger: true})

//register it like you would a plugin

fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api'},
    }
})
fastify.register(require('./routes/items'))

const PORT = 4000

const items = require('./Items')
 
const start = async ( ) => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()