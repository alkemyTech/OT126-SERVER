module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Authentication'],
    description: 'Get list of users',
    responses: {
      200: {
        description: 'List of users',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                data: {
                  $ref: '#/components/schemas/Users'
                }
              }
            }
          }
        }
      },
      404: {
        description: 'Missing data',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'Message of error',
                  example: 'There are no users in our database'
                }
              }
            }
          }
        }
      }
    }
  }
}
