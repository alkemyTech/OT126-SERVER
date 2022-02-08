const expect = require('chai').expect
const sinon = require('sinon')

const organizationService = require('../services/organizations')
const organizationRepository = require('../repositories/organizations')

describe('Organization Services', function () {
  let sandobox
  before(function (done) { done() })

  beforeEach(function () { sandobox = sinon.createSandbox() })

  afterEach(function () { sandobox.restore() })

  describe('Get Organization', function (done) {
    it('Get an organization if the id its correct', function (done) {
      const mockOrganization = {
        name: 'Somos Más',
        image: 'https://drive.google.com/file/d/1-j70Zmn2B1-0T_67JHJbNLKkI9sACMNi/view?usp=sharing',
        phone: 1160112988,
        address: 'barrio La Cava',
        urlFacebook: 'https://www.facebook.com/Somos_Más',
        urlLinkedin: 'https://www.linkedin.com/company/somosmas/'
      }

      sandobox.stub(organizationRepository, 'getById')
        .returns(mockOrganization)

      organizationService.getById(1)
        .then(organization => {
          expect(organization).to.have.property('name')
          expect(organization).to.have.property('image')
          expect(organization).to.have.property('phone')
          expect(organization).to.have.property('address')
          expect(organization).to.have.property('urlFacebook')
          expect(organization).to.have.property('urlLinkedin')
          done()
        })
    })

    it('Get an error if the id its incorrect', function (done) {
      const error = new Error('Not found ')
      error.status = 404
      sandobox.stub(organizationRepository, 'getById').throws(error)

      organizationService.getById(3)
        .then(() => {})
        .catch(err => {
          expect(err).to.be.an('error')
          expect(err).to.have.property('status', 404)
          done()
        })
    })
  })
})
