# Meteor Trash Can
Trash functionality for Meteor collections.

**This package is under development, it is not recommended to use in production**

## How to use it?

### Setting up the collection

After creating a collection, just call the `TrashCan.prepareCollection`, and the collection will be ready.
```js
import { TrashCan } from 'meteor/cinn:trash-can';

const Posts = new Mongo.Collection('posts');
TrashCan.prepareCollection(Posts);
```

Every time that you search a collection data, the result will only be from content not in the trash.
```js
// Only returns the posts not in the trash
Posts.find({});
```

### Getting data from trash

```js
Posts.find({}, { forceTrash: true });
```

## How it works?

Each document on the DB will have a field called `trash`, all queries on the app will be intercepted and only bring documents with `{ trash: { $ne: true } }`.
```js
// Basic setup
import { TrashCan } from 'meteor/cinn:trash-can';

const Posts = new Mongo.Collection('posts');
TrashCan.prepareCollection(Posts);

const postId = Posts.insert({ name: 'Name Test' });
const postOnTrashId = Posts.insert({ name: 'Post on Trash', trash: true });
// Returns only posts with trash not true
Posts.find({}); // RESULT: [post]
// Returns only posts with trash not true
Posts.find({}, { forceTrash: true }); // RESULT: [post, postOnTrash]
```
