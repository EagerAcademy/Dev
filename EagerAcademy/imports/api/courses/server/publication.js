import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Courses } from '../Courses.js';
import { Students } from '../../studentss/students.js';
import { Teachers } from '../../teachers/teachers.js';

/*
--::TODO::--
*/
Meter.publish('course.info', function courseInfo(courseId) {
  new SimpleSchema({
    courseId: { type: String },
  }).validate({ courseId });

  const course_id = this._id;

  return Courses.find(
    { _id: course_id, },
    { fields: Courses.publicFields, });
});
