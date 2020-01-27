const request = require('supertest');
const express = require('express');
const app = express();
const Images = require('../database/index.js')

test('endpoint testing', () => {

  request(app)
    .get('/carousel')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) throw err;
    });

})

