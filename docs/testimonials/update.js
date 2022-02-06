module.exports = {
  put: {
    security: [{ bearerAuth: [] }],
    description: 'update a testimonial',
    operationId: 'update',
    tags: ['Testimonials'],
    parameters: [{
      name: 'id',
      in: 'path',
      description: 'The ID of a testimonial',
      required: true,
      schema: {
        $ref: '#/components/schemas/Id'
      }
    }],
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
        description: 'Testimonial updated',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'The message of response',
                  example: 'Testimonial ID updated successfully'
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
                  example: 'Testimonial ID dont exist'
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
