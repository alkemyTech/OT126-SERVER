module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Categories'],
    description: 'Get one Categories',
    operationId: 'getById',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/Id'
        },
        required: true,
        description: 'A Categories id'
      }
    ],
    responses: {
      200: {
        description: 'Get one Categories',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Categories'
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
