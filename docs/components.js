module.exports = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    },
    schemas: {
      Id: {
        type: 'number',
        description: 'An id of a categorie',
        example: '1'
      },
      Image: {
        type: ''
      },
      ErrorValidateJWT: {
        type: 'object',
        description: 'Something went wrong with the token',
        properties: {
          message: {
            type: 'string',
            description: 'Message of error',
            example:
            'Internal Server Error'
          }
        }
      },
      ErrorNoFoundJWT: {
        type: 'object',
        description: 'Token Authorization not found',
        properties: {
          message: {
            type: 'string',
            description: 'Message of error',
            example:
            'Please provided a token Bearer in authorization'
          }
        }
      },
      Categories: {
        type: 'object',
        description: 'Movie data',
        properties: {
          id: {
            $ref: '#/components/schemas/Id'
          },
          name: {
            type: 'string',
            description: 'name of the categorie',
            example: 'news'
          }
        }
      }
    }
  }
}
