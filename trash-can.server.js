import { Meteor } from 'meteor/meteor';
import TrashCan from './trash-can.common';

TrashCan.prepareCollection = function(collection, options) {
  if(!collection.before) return console.warn(`[TRASH CAN] Collection ${collection._name} was not succesfully configured.`);
  collection.before.find(findHook);
  collection.before.findOne(findHook);
}

function findHook(userId, selector, options) {
  const forceTrash = _.result(options, 'forceTrash', false);
  if(!forceTrash) selector.trash = { $ne: true };
};
