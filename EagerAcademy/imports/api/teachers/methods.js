import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';


import { Teachers } from './teachers.js';
import { Students } from '../students/students.js';
import { Assignments } from '../assignments/assignments.js';
import { Courses } from '../courses/courses.js';

/*
--::TODO::--
*/
export const createCourse = new ValidatedMethod({
  /*name: 'Teacher.createCourse',
  validate: new SimpleSchema({
    
  }).validate(),
  run()
  */
});


/*
--::TODO::--
*/
export const createCourseAssignment = new ValidatedMethod({
 /* name: 'Teacher.createCourseAssignment',
  validate: new SimpleSchema({
    
  }),*/
});

/*
--::TODO::--
*/
export const postGrade = new ValidatedMethod({
 /* name: 'Teacher.postGrade',
  validate: new SimpleSchema({
    
  }),*/
});

const COURSES_METHODS = _.pluck([
  createCourse,
  createCourseAssignment,
  postGrade,
], 'name');

if(Meteor.isServer){
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(TEACHERS_METHODS, name);
    },

    // Rate limit per connection ID
    connectionId() { return true; },
  }, 10, 1000);
}