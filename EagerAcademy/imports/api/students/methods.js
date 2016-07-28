import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

import { Students } from './students.js';
import { Courses } from '../courses/courses.js';
import { Teachers } from '../teachers/teachers.js';

/*
--::TODO::--
*/
export const registerStudent = new ValidatedMethod({
  /*name: 'student.registerStudent',
  validate: new SimpleSchema({
    
  }).validate(),
  run(){
    
  },*/
  
});

/*
--::TODO::--
*/
export const updatePoints = new ValidatedMethod({
  /*name: 'student.updatePoints',
  validate: new SimpleSchema({
    
  }).validate(),
  run()
  */
});


/*
--::TODO::--
*/
export const addCourse = new ValidatedMethod({
 /* name: 'student.addCourse',
  validate: new SimpleSchema({
    
  }),*/
});


const STUDENTS_METHODS = _.pluck([
  updatePoints,
  addCourse,
], 'name');

if(Meteor.isServer){
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(STUDENTS_METHODS, name);
    },

    // Rate limit per connection ID
    connectionId() { return true; },
  }, 10, 1000);
}