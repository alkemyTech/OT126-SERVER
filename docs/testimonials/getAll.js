module.exports = {
  get: {
    security: [{ bearerAuth: [] }],
    tags: ['Testimonials'],
    description: 'Get all testimonials',
    operationId: 'getAll',
    responses: {
      200: {
        description: 'Get all testimonials',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Testimonials'
            }
          }
        }
      }
    }
  }
}
