module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Categories'],
    description: 'Get one Category',
    operationId: 'getById',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/Id'
        },
        required: true,
        description: 'A Category id'
      }
    ],
    responses: {
      200: {
        description: 'Get one category',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Categories'
            }
          }
        }
      },
      404: {
        description: 'Didn\'t find any Category',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                ErrorCharacters: {
                  type: 'object',
                  description: '',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Message of error',
                      example: 'Not Found'
                    }
                  }
                }
              }
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
      },
      500: {
        description: 'Token Error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorValidateJWT'
            }
          }
        }
      }
    }
  }
}
