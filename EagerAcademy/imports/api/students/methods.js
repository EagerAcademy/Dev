import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

import { Students } from './students.js';
import { Courses } from '../courses/courses.js';
import { Teachers } from '../teachers/teachers.js';
import { Assignments } from '../assignments/assignments.js';
import { Schools } from '../schools/schools.js';

const STUDENT_ID_ONLY = new SimpleSchema({
  studentId: { type: String },
}).validator();

/*
--::TODO::--
*/
export const registerStudent = new ValidatedMethod({
  /*name: 'student.registerStudent',
  validate: new SimpleSchema({
    
  }).validator(),
  run(){
    
  },*/
  
});


export const updatePoints = new ValidatedMethod({
  name: 'student.updatePoints',
  validate: new SimpleSchema({
    studentId: {type: String},
    points: {type: Number },
  }).validator(),
  run({ studentId, assignmentId }){
    const student = Students.findOne(studentId);
    const assignment = Assigntments.findOne(assignmentId);
    const course = Courses.findOne(assignment.courseId);
    //--::TODO::--
  },
});


/*
--::TODO::--
*/
export const addCourse = new ValidatedMethod({
  name: 'student.addCourse',
  validate: new SimpleSchema({
    studentId: {type: String},
  }).validator(),
  run({ studentId, courseId }){
    const student = Students.findOne(studentId);
    const course = Courses.findOne(courseId);
    
    
  },
});


const STUDENTS_METHODS = _.pluck([
  registerStudent,
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