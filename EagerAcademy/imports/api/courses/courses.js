import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/factory';
import { _ } from 'meteor/underscore';
import faker from 'faker';

import { Assignments } from '../../assignments/assignments.js';
import { Students } from '../../studentss/students.js';
import { Teachers } from '../../teachers/teachers.js';

/*
--::TODO::--
*/
//Mongo Methods - To Complete
class CoursesCollection extends Mongo.Collection {
  /*insert(list, callback) {
    const ourList = list;
    if (!ourList.name) {
      let nextLetter = 'A';
      ourList.name = `List ${nextLetter}`;

      while (!!this.findOne({ name: ourList.name })) {
        // not going to be too smart here, can go past Z
        nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
        ourList.name = `List ${nextLetter}`;
      }
    }

    return super.insert(ourList, callback);
  }
  remove(selector, callback) {
    Todos.remove({ listId: selector });
    return super.remove(selector, callback);
  }*/

}

export const Courses = new CoursesCollection('Courses');

Courses.deny({
  //Denial of client-side updates, instead will use methods to manage this collection
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Courses.schema = new SimpleSchema({
  name: { type: String, },
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
  },
  courseId: { //Unique course identifier the teacher is associated with
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
  },
  schoolId: { //Unique school identifier the course associated with
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
  },
  teacherId: {//Unique teacher identifier the course associated with
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
  },
  students: { type: [Students], },
  studentCount: {
    type: Number,
    defaultValue: 0,
  },
  assignments: {
    type: [Assignments],
    minCount: 1,
  },
});

Courses.attachSchema(Courses.schema);

// This represents the keys from Course objects that should be published to the client.
Courses.publicFields = {
  name: 1,
  courseId: 1,
  teacherId: 1,
  studentCount: 1,
  assignments: 1,
};

/*
--::TODO::--
*/
// Factory for defining course
Factory.define('course', Courses, {});

/*
--::TODO::--
*/
// Helpers - Getter/Setters
Courses.helpers({
  /*isPrivate() {
    return !!this.userId;
  },
  isLastPublicList() {
    const publicListCount = Lists.find({ userId: { $exists: false } }).count();
    return !this.isPrivate() && publicListCount === 1;
  },
  editableBy(teacherId) {
    if (!this.teacherId) {
      return true;
    }

    return this.teacherId === teacherId;
  },
  */
});
