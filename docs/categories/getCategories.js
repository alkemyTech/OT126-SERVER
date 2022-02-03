module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Categories'],
    description: 'Get one categorie',
    operationId: 'getById',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/CategorieId'
        },
        required: true,
        description: 'A categorie id'
      }
    ],
    responses: {
      200: {
        description: 'Get one categorie',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Categorie'
            }
          }
        }
      },

      404: {
        description: 'Didn\'t find any categorie',
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
                      example: 'Did\'t find any categorie'
                    },
                    status: {
                      type: 'number',
                      description: 'Number of error',
                      example: '404'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
