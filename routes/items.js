const items = require('../Items')

function itemRoutes (fastify, options, done) {

 const getItemsOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: {type: 'integer'},
                        name: {type: 'string'}
                    }
                }
            }
        }
    }
 }

const getItemOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                    properties: {
                        id: {type: 'integer'},
                        name: {type: 'string'},
                    }
            }
        }
    }
}


fastify.get('/items', getItemsOptions, (req, reply) => {
    reply.send(items)
})

fastify.get('/items/:id', getItemOptions, (req, reply) => {
    const { id } = req.params

    const item = items.find((item) => item.id === id)

    reply.send(item)
})

done()
}

 module.exports = itemRoutes