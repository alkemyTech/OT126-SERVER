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
        description: 'Save Url String',
        example: 'www.google.com'
      },
      ErrorJWT: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Jwt expired or Bearer Token Invalid',
            example:
            'Jwt expired or Bearer Token Invalid'
          }
        }
      },
      ErrorNoFoundJWT: {
        type: 'object',
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
      },
      Register: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
            description: 'The user name',
            example: 'Marcelo'
          },
          lastName: {
            type: 'string',
            description: 'The user lastName',
            example: 'Perez'
          },
          email: {
            type: 'string',
            description: 'The user email',
            example: 'MarceloPerez@gmail.com'
          },
          password: {
            type: 'string',
            description: 'The user password',
            example: 'contraseña123'
          }
        }
      },
      Users: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
            description: 'The user name',
            example: 'Marcelo'
          },
          email: {
            type: 'string',
            description: 'The user email',
            example: 'MarceloPerez@gmail.com'
          },
          image: {
            type: 'string',
            description: 'The user password',
            example: 'https://i.pinimg.com/280x280_RS/6a/77/98/loremimpsuum45215loreml812lorem.jpg'
          }
        }
      }
    }
  }
}
