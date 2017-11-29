require('./config/config')
const dataSet = require('./keyData')

const ObjectId = require('mongodb')
const mongoose = require('./db')

var Schema = mongoose.Schema;

console.log("CORE ONLINE");

for (var x = 0; x < dataSet.length; x++) {
    var q = { "_id": { $exists: true } };
    findAndDoFixes(q, dataSet[x]);
}
function findAndDoFixes(q, set) {
    var sch = {};
    sch[set.tagName] = String;
    var coll = mongoose.model(set.collection, new Schema(sch, { strict: false }));
    var keywords = set.srcKeywords; // get The dataSet keywords for filtering
    coll.find(q, function (err, info) {
        try {
            if (!err) {
                for (var i = 0; i < info.length; i++) {
                    var operation = set.operation;

                    var score = 0;
                    var findFrom = set.srcFieldName;
                    var op = set.op;
                    if (info[i]._doc[findFrom] !== undefined) {
                        for (var a = 0; a < keywords.length; a++) {
                            if (info[i]._doc[findFrom].indexOf(keywords[a].name) > -1) {
                                if (op === "sub") {
                                    score -= keywords[a].score;
                                }
                                else if (op === "add") {
                                    score += keywords[a].score;
                                }
                            }
                        }
                    }
                    var collData1 = new coll(info[i]);
                    if (operation === "tag") {
                        collData1[set.tagName] = score;
                        collData1.save(function (err, res) {
                            console.log(res);
                        });
                    } else if (operation === "remove") {
                        collData1.remove({ _id: info[i]._id }, function (err, result) {
                            if (!err) {
                                console.log(result);
                            }
                        });
                    }
                }
            } else {
                console.log("Unable to process Error Occurs");
                console.error(err);
            }
        } catch (e) {
            console.error(e);
        }
    });
}