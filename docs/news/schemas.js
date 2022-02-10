const id = {
  $ref: '#/components/schemas/Id'
}
const name = {
  type: 'string',
  description: 'news name',
  example: 'Inauguración de comedor comunitario'
}
const content = {
  type: 'string',
  description: 'news content',
  example: 'Se realizó la apertura del nuevo comedor comunitario en la localidad...'
}
const imageUrl = {
  $ref: '#/components/schemas/Image'
}
const imageFile = {
  type: 'string',
  example: 'https://cohorte-enero-835eb560.s3.amazonaws.com/df112830-8691-4c65-bf79-a80749cebd0c.jpg',
  format: 'binary'
}
const categoryId = {
  oneOf: [
    {
      type: 'number',
      description: 'id of the related category',
      example: 1
    },
    {
      type: 'null',
      description: 'nolvety is not related to a category',
      example: null
    }
  ]
}

module.exports = {
  resNewsGetAll: {
    type: 'object',
    properties: {
      pagesUrl: {
        type: 'object',
        properties: {
          previous: {
            oneOf: [
              {
                type: 'string',
                description: 'url to previous page',
                example: 'http://localhost:3000/news/?page=1'
              },
              {
                type: 'null',
                description: 'previous page does not exist',
                example: null
              }
            ]
          },
          next: {
            oneOf: [
              {
                type: 'null',
                description: 'next page does not exist',
                example: null
              },
              {
                type: 'string',
                description: 'url to next page',
                example: 'http://localhost:3000/news/?page=3'
              }
            ]
          }
        }
      },
      itemsCount: {
        type: 'number',
        description: 'count of entities in database',
        example: 15
      },
      totalPages: {
        type: 'number',
        description: 'count of available pages',
        example: 2
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id,
            name
          }
        }
      }
    }
  },
  newsGetById: {
    type: 'object',
    properties: {
      id,
      name,
      content,
      image: imageUrl,
      categoryId
    }
  },
  newsCreate: {
    type: 'object',
    properties: {
      name,
      content,
      image: imageFile
    }
  },
  newsUpdate: {
    type: 'object',
    properties: {
      name,
      content,
      categoryId,
      image: imageFile
    }
  }
}
