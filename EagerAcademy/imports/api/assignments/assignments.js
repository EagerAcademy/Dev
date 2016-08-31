import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/factory';
import { _ } from 'meteor/underscore';
import faker from 'faker';


import { Students } from '../../students/students.js';
import { Courses } from '../../courses/courses.js';
import { Teachers } from '../../teachers/teachers.js';

/*
--::TODO::--
*/
//Mongo Methods
class AssignmentsCollection extends Mongo.Collection {


}

export const Assignments = new AssignmentsCollection('Assignments');

Assignments.deny({
  //Denial of client-side updates, instead will use methods to manage this collection
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Assignments.schema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
  },
  courseId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
  },
  submitterId: {
    type: String,
    egEx: SimpleSchema.RegEx.Id,
    denyUpdate: false,
  },
  name: { type: String, },
  startDate: {
    type: Date,
  },
  dueDate: {
    type: Date,
  },
  submissionDate: {
    type: Date,
  },
  weight: {
    type: Number,
  },
  grade: {
    type: Number,
  },
  studentComments: {
    type: String,
    max: 500,
  },
  teacherComments: {
    type: String,
    max: 500,
  },
});

Assignments.attachSchema(Assignments.schema);

// This represents the keys from Course objects that should be published to the client.
Assignments.publicFields = {
  _id: 1,
  courseId: 1,
  name: 1,
  startDate: 1,
  dueDate: 1,
  studentComments: 1,
  teacherComments: 1,
};

/*
--::TODO::--
*/
// Factory for defining assignment
Factory.define('assignment', Assignments, {

});

/*
--::TODO::--
*/
// Helpers - Getter/Setter
Assignments.helpers({

});
