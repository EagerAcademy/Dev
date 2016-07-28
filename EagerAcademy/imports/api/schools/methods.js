import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';


import { Schools } from './schools.js';
import { Teachers } from '../teachers/teachers.js';
import { Students } from '../students/students.js';
import { Assignments } from '../assignments/assignments.js';
import { Courses } from '../courses/courses.js';

/*
--::TODO::--
*/
export const registerSchool = new ValidatedMethod({
  /*name: 'school.registerSchool',
  validate: new SimpleSchema({
    
  }).validate(),
  run()
  */
});

/*
--::TODO::--
*/
export const appendStudents = new ValidatedMethod({
 /* name: 'school.appendStudents',
  validate: new SimpleSchema({
    
  }),*/
});

/*
--::TODO::--
*/
export const appendTeachers = new ValidatedMethod({
 /* name: 'school.appendTeachers',
  validate: new SimpleSchema({
    
  }),*/
});

const SCHOOLS_METHODS = _.pluck([
  registerSchool,
  appendStudents,
  appendTeachers,
], 'name');

if(Meteor.isServer){
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(SCHOOLS_METHODS, name);
    },

    // Rate limit per connection ID
    connectionId() { return true; },
  }, 10, 1000);
}