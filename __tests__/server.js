const request = require('supertest');
const express = require('express');
const app = express();
// const Images = require('../database/index.js');


describe('endpoints', () => {
  describe('GET /carousel images', () => {
    test('should respond with status code 200', (done) => {
        request(app)
        .get('/carousel')
        .expect(200)
        done()
    });

    test('should respond with a array of objects containing ids and image urls', (done) => {
        request(app)
        .get('/carousel')
        .expect(200)
        .expect(res => {
          expect(res.data).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                id: expect.anything(),
                url: expect.anything(),
              })
            ])
          );
        });
        done()
    });


    // test('endpoint testing', (done) => {

    //   request(app)
    //     .get('/carousel')
    //     .set('accept', 'application/json')
    //     .expect('Content-Type', /json/)
    //     .expect(200)
    //     done()
    // })
  })
})