process.env.NODE_ENV = 'test';

import app from "../src/server";
import chai, { expect, should, assert } from 'chai';
import chaiHttp from "chai-http";
import { describe, it } from 'mocha';

import { Book } from '../src/database/models/book'
import bookMock from './mocks/bookMoks'
import mongoose from '../src/database/config/dbConfig'



chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
    // beforeEach((done) => { //Before each test we empty the database
    //     // Book.remove({
    //     //   justOne: false,
    //     // }, (err) => { 
    //     //    done();           
    //     // });   
    //     Book.deleteMany({
    //       // collation: "books",
    //       // justOne: true,
    //     },(err)=>{
    //       done()
    //     })
     
    // });
/*
  * Test the /GET route
  */
  beforeEach(function (done) {
    console.log("Initialising...");
    done()
  });
  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
        chai.request(app)
            .get('/books')
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              // expect(res.body).to.be.an('array');
              // expect(res.body).to.have.lengthOf(0);
                  // res.should.have.status(200);
                  // res.body.should.be.a('array');
                  // res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  describe('/POST book', () => {
    it('it should create  books', (done) => {
      chai.request(app)
          .post('/books')
          .send(bookMock.createBook)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
            done();
          });
    });
  });

  /*
  * Test the /GET route
  */
  describe('/GET book', () => {
    it('it should GET all the books', (done) => {
      chai.request(app)
          .get('/books')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.a('array');
            // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
            done();
          });
      });
  });

});