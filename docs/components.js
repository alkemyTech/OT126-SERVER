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
      CategorieId: {
        type: 'number',
        description: 'An id of a categorie',
        example: '1'
      },
      Categorie: {
        type: 'object',
        description: 'Movie data',
        properties: {
          id: {
            $ref: '#/components/schemas/CategorieId'
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
