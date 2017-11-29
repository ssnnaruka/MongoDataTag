var dataSet = [{
    "srcKeywords": [{ name: "Front", score: 1 }, { name: "java", score: 1 }, { name: "j2ee", score: 1 }],
    "srcFieldName": "content",
    "tagName": "pScore",
    "operation": "tag",
    "op": "add",
    "collection": "activity1"
}];
/* Sample Object node
{
    "srcKeywords": [{ name: "Front", score: 1 }, { name: "java", score: 1 }, { name: "j2ee", score: 1 }], // Add the keys name with there score
    "srcFieldName": "content/content2", // add the field on which the scoring will be done on 
    "tagName": "pScore/nScore", // Name of the fields in which Score result will be saved
    "operation": "remove/tag", // operation either remove or tag the data
    "op": "add/sub", // if operation is tag type the scoping will we added or subtratced
    "collection": "activity/activity1" // name of the collection
}
*/

module.exports = dataSet;