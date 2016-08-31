import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/factory';
import { _ } from 'meteor/underscore';
import faker from 'faker';

import { Courses } from '../../courses/courses.js';
import { Teachers } from '../../teachers/teachers.js';
import { Schools } from '../../schools/schools.js';

/*
--::TODO::--
*/
//Mongo Methods
class StudentsCollection extends Mongo.Collection {
  /*insert(doc, callback) {
    const ourDoc = doc;
    ourDoc.createdAt = ourDoc.createdAt || new Date();
    const result = super.insert(ourDoc, callback);
    incompleteCountDenormalizer.afterInsertTodo(ourDoc);
    return result;
  }
  update(selector, modifier) {
    const result = super.update(selector, modifier);
    //incompleteCountDenormalizer.afterUpdateTodo(selector, modifier);
    return result;
  }
  remove(selector) {
    const todos = this.find(selector).fetch();
    const result = super.remove(selector);
    incompleteCountDenormalizer.afterRemoveTodos(todos);
    return result;
  }*/

}

export const Students = new StudentsCollection('Students');

Students.deny({
  //Denial of client-side updates, instead will use methods to manage this collection
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Students.schema = new SimpleSchema({
  _id: { //Unique student/user identifier within the system (Persistance of account between schools)
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
  },
  studentId: { //Unique student identifier relative to the school
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    label: "School defined student ID",
    denyUpdate: false,
  },
  schoolId: { //Unique school identifier the student associated with
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: false,
  },
  firstName: {
    type: String,
    label: "First name",
    max: 25,
  },
  lastName: {
    type: String,
    label: "Last name",
    max: 35,
  },
  password: {
    type: String,
    max: 30,
    //Encryption / Hashing ??
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    max: 50,
  },
  points: {
    type: Number,
    label: "Current number of acquired points",
    defaultValue: 0,
  },
  courseSchedule: { type: [Courses],} //Courses a student is currently enrolled in; cleared when course complete

});

Students.attachSchema(Students.schema);

// This represents the keys from Student objects that should be published to the client.
Students.publicFields = {
  _id: 1,
  studentId: 1,
  schoolId: 1,
  firstName: 1,
  lastName: 1,
  email: 1,
  points: 1,
  courseSchedule: 1,
};

/*
--::TODO::--
*/
// Factory for defining student
Factory.define('student', Students, {
  _id: () => _.uniqueId(),
  schoolId: () => Factory.get('school'),
});

/*
--::TODO::--
*/
//Helpers - Getter/Setter
Students.helpers({
  school() {
    return this.schoolId;
  },

});
