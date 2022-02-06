module.exports = {
  delete: {
    security: [{ bearerAuth: [] }],
    description: 'Remove a comment by ID',
    operationId: 'remove',
    tags: ['Comments'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'The ID of a comments',
        required: true,
        schema: {
          $ref: '#/components/schemas/Id'
        }
      }
    ],
    responses: {
      200: {
        description: 'Comment removed succesfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'Comment ID removed successfully'
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
