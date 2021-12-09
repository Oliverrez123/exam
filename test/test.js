const chai = require('chai');
const chaiHTTP = require('chai-http');
const should = chai.should()

chai.use(chaiHTTP);

describe('login', () => {
    describe('POST /login', () => {
        it('Send statuskode 200 hvis bruger kan logge ind', function (done) {
            chai
            .request('http://localhost:6969/users')
            .post('/login')
            .send({email: 'nu', password: 'nu'})
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
            describe('login', () => {
                describe('POST /login', () => {
                    it('Send statuskode 401 ved forkert PW', function(done){
                        chai
                        .request('http://localhost:6969/users')
                        .post('/login')
                        .send({email: 'nu', password: 'nej'})
                        .end((err, res) => {
                            res.should.have.status(401);
                            done()
                        })})})
                        describe('login', () => {
                            describe('POST /login', () => {
                        it('Send statuskode 404 hvis bruger ikke kan findes i DB', function(done){
                            chai
                            .request('http://localhost:6969/users')
                            .post('/login')
                            .send({email:"hej", password:"nu"})
                            .end((err, res) => {
                                res.should.have.status(404);
                                done()
                            }
)})})})})})})});