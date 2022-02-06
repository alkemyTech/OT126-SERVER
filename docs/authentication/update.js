module.exports = {
    put: {
      security: [{ bearerAuth: [] }],
      tags: ['Authentication'],
      description: 'Update of users',
      parameters: [
        {
          name: 'id',
          in: 'path',
          schema: {
            $ref: '#/components/schemas/Id'
          },
          required: true,
          description: 'A Category id'
        },
        {
            name: 'user',
            in: 'body',
            schema: {
              $ref: '#/components/schemas/Register'
            },
            required: false,
            description: 'Data needed to update a user'
          }
      ],
      responses: {
        200: {
          description: 'New user updated',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                    msg: {
                      type: 'string',
                      description: 'The user update confirmation',
                      example: 'User {id} updated succesfully'
                    },
                      email: {
                        type: 'string',
                        description: 'The user email',
                        example: 'MarceloNewEmail@gmail.com'
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
                    example: 'The user dont exist'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  