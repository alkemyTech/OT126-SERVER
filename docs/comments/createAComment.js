module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    description: 'Create a comment',
    operationId: 'create',
    tags: ['Comments'],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Comments'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Comment has been created',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'comment created successfully'
                },
                data: {
                  $ref: '#/components/schemas/Comments'
                }
              }
            }
          }
        }
      },
      401: {
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
