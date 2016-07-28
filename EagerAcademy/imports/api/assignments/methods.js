import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

import { Assignments } from './assignments.js';
import { Courses } from '../courses/courses.js';
import { Teachers } from '../teachers/teachers.js';
import { Students } from '../students/students.js';
/*
--::TODO::--
*/
export const createAssignment = new ValidatedMethod({
  /*name: 'assignment.createAssignment',
  validate: new SimpleSchema({
    
  }).validate(),
  run()
  */
});


/*
--::TODO::--
*/
export const submitAssignment = new ValidatedMethod({
 /* name: 'assignment.submitAssignment',
  validate: new SimpleSchema({
    
  }),*/
});

const ASSIGNMENTS_METHODS = _.pluck([
  createAssignment,
  submitAssignment,
], 'name');

if(Meteor.isServer){
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(ASSIGNMENTS_METHODS, name);
    },

    // Rate limit per connection ID
    connectionId() { return true; },
  }, 10, 1000);
}