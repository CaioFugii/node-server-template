// const chai = require('chai');
// const chaiHttp = require('chai-http');

// const { USUARIO_CORRETO, USUARIO_EXISTENTE } = require('./dataTest.json')

// chai.use(chaiHttp);
// chai.should();

// describe('Usuario - Endpoints', () => {
//   describe('POST /api/user', () => {
//     it('deve retornar usuário criado - 201', done => {
//         chai.request('http://localhost:3000')
//         .post('/api/user/create-user')
//         .send(USUARIO_CORRETO)
//         .end((err, res) => {
//           res.should.have.status(201);
//           res.body.should.have.property('message').equal('Success');
//         });
//         done();
//     });
//   });
// });