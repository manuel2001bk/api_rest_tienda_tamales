const assert = require('assert');
const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('funcion getAllUsers',()=>{
    it('Devuelve una petición correcta', (done) => {
        chai.request(url)
            .get('/users/getAllUsers')
            .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Devuelve como primer usuario manuel', (done) => {
        chai.request(url)
            .get('/users/getAllUsers')
            .end( function(err,res){
                console.log(res.body)
                assert.equal(res.body.body[0].nombre,'Manuel');
                assert.equal(res.body.body[0].idUsers,1);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Devuelve mas de un solo usuario', (done) => {
        chai.request(url)
            .get('/users/getAllUsers')
            .end( function(err,res){
                console.log(res.body)
                assert.equal(res.body.body.length,2);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('No acepta parametros y devuelve un error', (done) => {
        chai.request(url)
            .get('/users/getAllUsers/:manu')
            .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(404);
                done();
            });
    });
});