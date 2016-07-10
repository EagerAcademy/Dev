import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/factory';
import { _ } from 'meteor/underscore';
import faker from 'faker';

import { Students } from '../../students/students.js';
import { Courses } from '../../courses/courses.js';
import { Teachers } from '../../teachers/teachers.js';