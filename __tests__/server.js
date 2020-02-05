const request = require('supertest');
const express = require('express');
const app = require('../server/index');
// const Images = require('../database/index.js');


describe('endpoints', () => {

    test('should respond with status code 200', (done) => {
        request(app)
        .get('/carousel')
        .set('accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        done()
    });

    test('should respond with an array of objects containing ids and image urls', (done) => {
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

    test('should correctly output the data types according to schema', (done) => {
        request(app)
        .get('/carousel')
        .expect(200)
        .expect(res => {
          const data = res.data;

          expect(data.id).toEqual(expect.any(Number));
          expect(data.url).toEqual(expect.any(String));
        });
        done()
    });

    test('should respond with a 404 for invalid endpoint', (done) => {
        request(app)
        .get('/nachocheese')
        .expect(404);
        done()
    });
})