const memberSchema = require('./schema')
module.exports = {
  post: {
    security: [{ bearerAuth: [] }],
    tags: ['Members'],
    description: 'Create a new member in the database',
    operationId: 'create',
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: memberSchema.Members
        }
      }
    }
  },
  responses: {
    201: {
      description: 'Create a new member',
      content: {
        'application/json': {
          schema: memberSchema.Members
        }
      }
    },
    400: {
      $ref: '#/components/responses/ValidationOrBadRequest'
    },
    401: {
      $ref: '#/components/responses/Unauthorized'
    },
    403: {
      $ref: '#/components/responses/Forbidden'
    },
    404: {
      $ref: '#/components/responses/NotFound'
    },
    500: {
      $ref: '#/components/responses/InternalServerError'
    }
  }
}
