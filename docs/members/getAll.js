module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Members'],
    description: 'Get all Members',
    operationId: 'getAll',
    produces: ['application/json'],
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
                $ref: '#/components/schemas/Members'
              }
            }
          }
        }
      },
      401: {
        description: 'The token has expired or Token Error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorJWT'
            }
          }
        }
      },
      403: {
        description: 'Token Error not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorNoFoundJWT'
            }
          }
        }
      }
    }
  }
}
