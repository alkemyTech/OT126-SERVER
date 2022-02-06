module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Members'],
    description: 'Create a new member',
    operationId: 'create',
    /*  consumes: 'multipart/form-data', */
    /* parameters: [{
      name: 'name',
      type: 'string',
      in: 'formData',
      description: 'The name of member',
      required: true
    },
    {
      name: 'description',
      type: 'string',
      in: 'formData',
      description: 'Some description of a member',
      required: false
    },
    {
      type: 'string',
      format: 'binary',
      name: 'image',
      in: 'formData',
      description: 'The image of member to create',
      required: true,
      'x-mimetype': 'application/jpg'

    }] */
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              name: {

                type: 'string',
                /*  in: 'formData', */
                description: 'The name of member',
                required: true
              },
              description: {
                name: 'description',
                type: 'string',
                /*  in: 'formData', */
                description: 'Some description of a member',
                required: false
              },
              image: {
                type: 'string',
                format: 'binary',
                name: 'image',
                /* in: 'formData', */
                description: 'The image of member to create',
                required: true
              }
            }
          }
        }
      }
    },

    responses: {
      201: {
        description: 'Create a new member',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/Members'

            }
          }
        }
      },
      400: {
        description: 'The new member cant create.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'Message of error',
                  example: 'Can\t create the new member'
                }
              }
            }
          }
        }
      },
      401: {
        description: 'The token has expired or Token Error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorJWT'
            }
          }
        }
      },
      403: {
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
