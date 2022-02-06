module.exports = {
  put: {
    security: [{ bearerAuth: [] }],
    tags: ['Members'],
    description: 'Update a member by ID',
    operationId: 'update',
    consumes: ['multipart/form-data'],
    produces: ['application/json'],
    parameters: [
      {
        name: 'id',
        type: {
          $ref: '#/components/schemas/Id'
        },
        in: 'path',
        description: 'The ID of member to update',
        required: true
      },
      {
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
        required: true
      },
      {
        name: 'image',
        type: 'file',
        in: 'formData',
        description: 'The image of member to update',
        required: true
      }
    ],
    responses: {
      201: {
        description: 'Update a member by ID',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  description: 'Some message of response',
                  example: 'The member was successfully updated'
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
      },
      404: {
        description: 'Not found the ID input',
        content: {
          'application/json': {
            schema: {
              msg: {
                description: 'Message of response error',
                type: 'string',
                example: 'Not found the ID input.'
              }
            }
          }
        }
      }
    }
  }
}
