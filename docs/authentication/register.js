const authSchema = require('./schema')

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
          type: 'object',
          properties: {
            data: authSchema.Register
          }
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
                data: authSchema.Register,
                token: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDQzNjE2NjYsImV4cCI6MTY0NDQ0ODA2Nn0.UFirOOyxZCdknP4wTkSrGQCfWtDqYZR8hSDgsYSQPok'
                }
              }
            }
          }
        }
      },
      400: {
        $ref: '#/components/responses/ValidationError'
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
