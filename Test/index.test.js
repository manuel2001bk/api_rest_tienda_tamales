const assert = require('assert');
const chai = require('chai');
const expect = require('chai').expect;
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe('funcion UserNameValidate',()=>{
    it('El usuario no se encuentra disponible', (done) => {
        chai.request(url)
            .get('/users/usernameValidate/manu')
            .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('El usuario se encuentra disponible', (done) => {
        chai.request(url)
            .get('/users/usernameValidate/man')
            .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Error al enviar el parametro nulo', (done) => {
        chai.request(url)
            .get('/users/usernameValidate')
            .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(404);
                done();
            });
    });
});