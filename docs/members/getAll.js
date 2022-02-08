const memberSchema = require('./schema')
module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Members'],
    description: 'Get all Members',
    operationId: 'getAll',
    parameters: [
      {
        name: 'page',
        type: 'integer',
        in: 'path',
        description: 'Number of page to find. Default 1. Integer',
        summary: '10 members by page',
        required: false
      }
    ],
    responses: {
      200: {
        description: 'Get all members',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                schema: memberSchema.Members
              }
            }
          }
        }
      },
      401: {
        $ref: '#/components/responses/Unauthorized'
      },
      403: {
        $ref: '#/components/responses/Forbidden'
      },
      500: {
        $ref: '#/components/responses/InternalServerError'
      }
    }
  }
}
