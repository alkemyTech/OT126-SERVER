module.exports = {
  delete: {
    security: [{ bearerAuth: [] }],
    tags: ['Authentication'],
    description: 'Remove of users',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/Id'
        },
        required: true,
        description: 'A user id'
      }
    ],
    responses: {
      200: {
        description: 'New user removed',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The user remove confirmation',
                  example: 'User {id} was removed succesfully'
                }
              }
            }
          }
        }
      },
      404: {
        description: 'Missing or invalid ID',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'Message of error',
                  example: 'Can\'t remove the user with id provided.'
                }
              }
            }
          }
        }
      }
    }
  }
}
