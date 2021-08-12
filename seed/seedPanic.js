module.exports = (router, async,faker, randomLocation) => {
    router.get("/seed-panic",  (req, res, next) => {
        const db = req.app.get('db');
        db.schema.hasTable("panic").then(function (exists) {
            if (!exists) {
                db.schema
                    .createTable("panic", function (table) {
                        table.increments("id").primary();
                        table.string("division")
                        table.string("distance")
                        table.string("user")
                        table.string("userlat")
                        table.string("userlon")
                    })
                    .then(function () {
                        const recordsLength = Array.from(Array(1).keys());
                        const records = recordsLength.map(rec => ({
                            division: '',
                            distance: '',
                            user: '',
                            userlat: '',
                            userlon: '',
                        }));
                        db("panic")
                            .insert(records)
                            .then(() => {
                                res.send("Seeded panic data");
                            });
                    });
            } else {
                res.send("Table panic exists - Seeded data");
            }
        });

    });
}


