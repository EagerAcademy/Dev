import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/factory';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { chai, assert } from 'meteor/practicalmeteor:chai';
import { Random } from 'meteor/random';
import { _ } from 'meteor/underscore';

import { Teachers } from './teachers.js';

if(Meteor.isServer) {
  require('./server/publications.js');
  
  describe('teachers', function() {
    describe('mutators', function() {
      it('builds correctly from factory', function() {
        const teacher = Factory.create('teacher');
        assert.typeOf(teacher, 'object');
        assert.typeOf(teacher._id, 'String');
      });
    });
  });
  
  /*
  --::TODO::--
    - Implement more Tests
  */
}