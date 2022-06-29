const assert = require('assert');
const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('funcion User - SignUp', () => {
    it('Agrega de manera correcta un nuevo usuario', (done) => {
        chai.request(url)
            .post('/users/signUp')
            .send({
                nombre: 'Carlos',
                apellidoPaterno: "Ramirez",
                userName: 'carl123',
                password: "1234",
                fechaNacimiento: '2000-03-13'
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Enviar la contraseña sin ser un valor string', (done) => {
        chai.request(url)
            .post('/users/signUp')
            .send({
                nombre: 'Carlos',
                apellidoPaterno: "Ramirez",
                userName: 'carl123',
                password: 1234,
                fechaNacimiento: '2000-03-13'
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Enviar nombre menor a 3 digitos', (done) => {
        chai.request(url)
            .post('/users/signUp')
            .send({
                nombre: 'Ca',
                apellidoPaterno: "Ramirez",
                userName: 'carl123',
                password: "1234",
                fechaNacimiento: '2000-03-13'
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Enviar apellido menor a 3 digitos', (done) => {
        chai.request(url)
            .post('/users/signUp')
            .send({
                nombre: 'Carlos',
                apellidoPaterno: "Ra",
                userName: 'carl123',
                password: "1234",
                fechaNacimiento: '2000-03-13'
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Enviar nombre de usuario menor a 3 digitos', (done) => {
        chai.request(url)
            .post('/users/signUp')
            .send({
                nombre: 'Carlos',
                apellidoPaterno: "Ramirez",
                userName: 'ca',
                password: "1234",
                fechaNacimiento: '2000-03-13'
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Enviar password menor a 3 digitos', (done) => {
        chai.request(url)
            .post('/users/signUp')
            .send({
                nombre: 'Carlos',
                apellidoPaterno: "Ramirez",
                userName: 'carl123',
                password: "12",
                fechaNacimiento: '2000-03-13'
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Enviar la fecha con el formato incorrecto', (done) => {
        chai.request(url)
            .post('/users/signUp')
            .send({
                nombre: 'Carlos',
                apellidoPaterno: "Ramirez",
                userName: 'carl123',
                password: "1234",
                fechaNacimiento: '01-01-2000'
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Enviar sin todos los datos para crear un usuario', (done) => {
        chai.request(url)
            .post('/users/signUp')
            .send({
                nombre: 'Carlos',
                apellidoPaterno: "Ramirez",
                userName: 'carl123',
                password: "1234",
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

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