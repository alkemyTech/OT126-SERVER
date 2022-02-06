module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    description: 'Create a testimonial',
    operationId: 'create',
    tags: ['Testimonials'],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Testimonials'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Testimonial created',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'Testimonial created successfully'
                },
                data: {
                  $ref: '#/components/schemas/Testimonials'
                }
              }
            }
          }
        }
      },
      422: {
        description: 'Validation Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'Describe the validation error',
                  example: 'the field must be string'
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
