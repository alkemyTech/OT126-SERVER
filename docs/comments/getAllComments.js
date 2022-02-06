module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Comments'],
    description: 'return all comments',
    responses: {
      200: {
        description: 'All comments',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Comments'
              }
            }
          }
        }
      },
      500: {
        description: 'Some server Error'
      }
    }
  }
}
