import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/factory';
import { _ } from 'meteor/underscore';
import faker from 'faker';

import { Courses } from '../../courses/courses.js';
import { Students } from '../../students/students.js';
import { Schools } from '../../schools/schools.js';
import { Assignments } from '../../assignments/assignments.js';

/*
--::TODO::--
*/
//Mongo Methods
class TeachersCollection extends Mongo.Collection {
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

export const Teachers = new TeachersCollection('Teachers');

Teachers.deny({
  //Denial of client-side updates, instead will use methods to manage this collection
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Teachers.schema = new SimpleSchema({
  _id: { //Unique school identifier the teacher associated with
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
  },
  teacherId: {//Unique teacher identifier the course associated with
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: false,
  },
  schoolId: { //Unique school identifier the teacher associated with
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: false,
  },
  formalName: {
    type: String,
    label: "Name referred to by students",
    
  },
  firstName: {
    type: String,
    label: "First name",
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
  courses: {
    type: [Courses],
    label: "Courses taught",
    minCount: 1,
  },
  classroom: { type: [Students], },
});

Teachers.attachSchema(Teachers.schema);

// This represents the keys from Teacher objects that should be published to the client.
Teachers.publicFields = {
  teacherId: 1,
  schoolId: 1,
  formalName: 1,
  email: 1,
  courses: 1,
  classroom: 1,
};

/*
--::TODO::--
*/
// Factory for defining student
Factory.define('teacher', Teachers, {
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