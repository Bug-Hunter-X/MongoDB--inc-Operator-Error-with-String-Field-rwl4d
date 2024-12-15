```javascript
// Correct use of $inc operator in MongoDB update
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 } }); 
//Or if field is a string which can be parsed into a number:
let oldDoc = db.collection('myCollection').findOne({ _id: 1 });
let numValue = parseInt(oldDoc.field, 10);
 db.collection('myCollection').updateOne({ _id: 1 }, { $set: { field: numValue+1 }});
```