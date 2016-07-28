import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';


import { Courses } from './courses.js';
import { Teachers } from '../teachers/teachers.js';
import { Students } from '../students/students.js';
import { Assignments } from '../assignments/assignments.js';

/*
--::TODO::--
*/
export const createCourse = new ValidatedMethod({
  /*name: 'course.createCourse',
  validate: new SimpleSchema({
    
  }).validate(),
  run()
  */
});


/*
--::TODO::--
*/
export const appendAssignment = new ValidatedMethod({
 /* name: 'course.appendAssignment',
  validate: new SimpleSchema({
    
  }),*/
});

/*
--::TODO::--
*/
export const joinCourse = new ValidatedMethod({
 /* name: 'course.joinCourse',
  validate: new SimpleSchema({
    
  }),*/
});

const COURSES_METHODS = _.pluck([
  createCourse,
  appendAssignment,
  joinCourse,
], 'name');

if(Meteor.isServer){
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(COURSES_METHODS, name);
    },

    // Rate limit per connection ID
    connectionId() { return true; },
  }, 10, 1000);
}