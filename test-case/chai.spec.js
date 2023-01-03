import chai from 'chai'
var assert = chai.assert
let should = chai.should()
let expect = chai.expect

//////////  ASSERT  ///////

describe("---Aspect check---", function () {
    let userName = 'hannajmal'
    it('check string', function () {
        assert.typeOf(userName, 'string')
    })
    it('equal match', function () {
        assert.equal(userName, 'hannajmal')
    })
    it('length match', function () {
        assert.equal(userName.length, 9)
    })
})

//////////  SHOULD  ///////

describe('should check', function () {
    let name = "ajmal"
    it('check string', function () {
        name.should.be.a('string')
    })
})

//////////  EXPECT  ///////

describe('expect check ', function () {
    let name = 'ajuuuu'
    it('string match', function () {
        expect(name).to.be.a('string')
    })
    it('length match', function () {
        expect(name).to.length()
    })
})