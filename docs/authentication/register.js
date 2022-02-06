module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Authentication'],
    description: 'Create a new user',
    parameters: [
      {
        name: 'user',
        in: 'body',
        schema: {
          $ref: '#/components/schemas/Register'
        },
        required: true,
        description: 'Registering for an account to makes the user experiences most satisfying'
      }
    ],
    responses: {
      200: {
        description: 'New user created',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'User registration successfully. Please login.'
                },
                data: {
                  $ref: '#/components/schemas/Register'
                }
              }
            }
          }
        }
      },
      404: {
        description: 'Missing or invalid data',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'Message of error',
                  example: 'Something went wrong. User registration failed.'
                }
              }
            }
          }
        }
      }
    }
  }
}
