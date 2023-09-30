const request=require('supertest')
const app=require('../app');
//const { describe } = require('mocha');

//testing get all users
//describe
/*
it('responde con json y contiene una lista de usuarios', done=>{
    request(app)
        .get('/users')
        .set('Aceptado','application/json')
        .expect('Content-Type, /json/')
        .expect(200,done);
})
*/

describe('api',function(){
    describe('GET /empleados',function (){
        it('Responde una lista de empleados',function (){
            request(app)
            .get('/empleados')
            .expect(200);
        });
    });
});

describe('api',function(){
    describe('POST /empleados',function (){
        it('TEST 01 usuario creado', done=>{
            const data={
                "nombre":"Ernesto Robles"
            }
            request(app)
            .post('/empleados')
            .send(data)
            .expect(404)
            .end((err)=>{
                if (err) return done(err);
                done();
            });
        });
    });
});

describe('api', function (){
    describe('DELETE /empleado/Steven',function(){
        it('TEST 02 Empleado no existe',function(){
            request(app)
            .delete('/empleados/Steven')
            .expect(404);
        });
    });
});

module.exports=app

//