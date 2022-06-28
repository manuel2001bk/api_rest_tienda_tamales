const assert = require('assert');
const chai = require('chai');
const expect = require('chai').expect;
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
const url = 'http://localhost:3000';

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