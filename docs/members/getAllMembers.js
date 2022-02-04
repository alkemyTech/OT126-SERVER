module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Members'],
    description: 'Get all Members',
    operationId: 'getAll',
    responses: {
      200: {
        description: 'Get all members',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Members'
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
