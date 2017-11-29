# MongoDataTag

It helps in adding a score tag in the cureent data collection on the basis of the keywords either negative or the positive.

* Adding keywords to scoring pupose

Add the `config` in the `keyData.js` `dataSet` Array as per the below sample:

```javasctipt
{
    "srcKeywords": [{ name: "Front", score: 1 }, { name: "java", score: 1 }, { name: "j2ee", score: 1 }], // Add the keys name with there score
    "srcFieldName": "content/content2", // add the field on which the scoring will be done on 
    "tagName": "pScore/nScore", // Name of the fields in which Score result will be saved
    "operation": "remove/tag", // operation either remove or tag the data
    "op": "add/sub", // if operation is tag type the scoping will we added or subtratced
    "collection": "activity/activity1" // name of the collection
}

```

* Run

```nodejs
$ node script.js
```
