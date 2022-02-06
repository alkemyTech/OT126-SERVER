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
      ErrorIsAdmin: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Message of error',
            example:
            'Role admin required'
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
      Testimonials: {
        type: 'object',
        description: 'Representation of testimonial ',
        properties: {
          name: {
            type: 'String',
            description: 'Testimonial name',
            example: 'Rodrigo Velazquez'
          },
          content: {
            type: 'string',
            description: 'Testimonial content',
            example: 'Soy Licenciado en Relaciones Institucionales y trabajo vinculando a la fundación...'
          },
          Image: {
            type: 'string',
            description: 'Save Url String',
            example: 'www.google.com'
          }
        }
      }
    }
  }
}
