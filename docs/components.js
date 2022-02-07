const responses = require('./responses')

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
        description: 'ID',
        example: '1'
      },
      Image: {
        type: 'string',
        description: 'image url',
        example: 'https://cohorte-enero-835eb560.s3.amazonaws.com/df112830-8691-4c65-bf79-a80749cebd0c.jpg'
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
      },
      ValidationError: {
        type: 'object',
        properties: {
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  example: 'param required'
                },
                param: {
                  type: 'string',
                  example: 'name'
                },
                location: {
                  type: 'string',
                  example: 'body'
                }
              }
            }
          }
        }
      },
      BadRequest: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            example: 'Related entity with id 500 not found. Not updated'
          }
        }
      }
    },
    ...responses
  }
}
