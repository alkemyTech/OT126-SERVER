module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Authentication'],
    description: 'Sing in of users',
    parameters: [
      {
        name: 'user',
        in: 'body',
        schema: {
          $ref: '#/components/schemas/Login'
        },
        required: true,
        description: 'User login'
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
                  example: 'Logged in successfully. Data in token payload'
                },
                data: {
                  type: 'object',
                  properties: {
                    ok: {
                      type: 'string',
                      description: 'The user email',
                      example: 'true'
                    },
                    token: {
                      type: 'string',
                      description: 'The user email',
                      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY0NDE4MDczMywiZXhwIjoxNjQ0MjY3MTMzfQ.1eNk3cjmvkat7z_NsgStX7Wm2pXKoANSliuhTFwSdVM'
                    }
                  }
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
                  example: 'Email and/or Password incorrect'
                }
              }
            }
          }
        }
      }
    }
  }
}
