module.exports = {
  delete: {
    security: [{ bearerAuth: [] }],
    description: 'Remove a testimonial by ID',
    operationId: 'remove',
    tags: ['Testimonials'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'The ID of a testimonial',
        required: true,
        schema: {
          $ref: '#/components/schemas/Id'
        }
      }
    ],
    responses: {
      200: {
        description: 'Testimonial removed succesfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'Testimonial ID removed successfully'
                }
              }
            }
          }
        }
      },
      404: {
        description: 'Testimonial not found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'Not Found'
                }
              }
            }
          }
        }
      },
      403: {
        description: 'Admin role is required',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorIsAdmin'
            }
          }
        }
      }
    }
  }
}
