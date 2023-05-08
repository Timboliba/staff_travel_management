const { MongoClient } = require("mongodb");

//setting connection URI stored on .env file
const Database = process.env.ATLAS_URI;
const client = new MongoClient(Database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: async (callback) => {
        await client.connect((err, db) => {
            //
            if (db) {
                _db = db.db("simple_data");
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },
    getDb: () => {
        return _db;
    }
};