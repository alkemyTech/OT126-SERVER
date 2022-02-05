module.exports = {
  delete: {
    security: [{ bearerAuth: [] }],
    description: 'Remove a  member of organization by ID',
    operationId: 'remove',
    tags: ['Members'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'The ID of a member',
        required: true,
        schema: {
          $ref: '#/components/schemas/Id'
        }
      }
    ],
    responses: {
      200: {
        description: 'The user was removed successfully from server',
        content: {
          'application/json': {

            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'The ID input was removed successfully'
                }
              }
            }
          }
        }
      },
      401: {
        description: 'The token has expired or isn\'t valid',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorJWT'
            }
          }
        }
      },
      403: {}
    }
  }
}
