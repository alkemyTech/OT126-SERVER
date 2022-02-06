module.exports = {
  put: {
    security: [{ bearerAuth: [] }],
    tags: ['Comments'],
    description: 'update a comment by id',
    operationId: 'update',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          type: 'integer',
          $ref: '#/components/schemas/Id'
        },
        required: true,
        description: 'The comment id'
      }
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            $ref: '#/components/schemas/Comments'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'The comment has been updated',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/Comments'
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
      },
      403: {
        description: 'it isnt your comment or you are not an admin',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorIsOwnComment'
            }
          }
        }
      },
      404: {
        description: 'Comment not found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'Commnet ID dont exist'
                }
              }
            }
          }
        }
      },
      500: {
        description: 'Some server error'
      }
    }
  }
}
