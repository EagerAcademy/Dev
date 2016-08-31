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
class SchoolsCollection extends Mongo.Collection {
  
  
}

export const Schools = new SchoolsCollection('Schools');

Schools.deny({
  //Denial of client-side updates, instead will use methods to manage this collection
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Schools.schema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
  },
  name: { type: String },
  address: { type: [String] },  //Formatting: [Address# Street, City, State, Zip]
  students: {
    type: [Students],
  },
  teachers: {
    type: [Teachers],
  },
  courses: {
    type: [Courses],
  },
});

Schools.attachSchema(Schools.schema);

// This represents the keys from Course objects that should be published to the client.
Schools.publicFields = {
  _id: 1,
  name: 1,
  state: 1,
};

/*
--::TODO::--
*/
// Factory for defining course
Factory.define('school', Schools, {
  _id: () => _.uniqueId(),
});

Schools.helpers({
  
});