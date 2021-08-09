

module.exports = (router, async,faker) => {
    router.get("/seed",  (req, res, next) => {
        const db = req.app.get('db');
        db.schema.hasTable("users").then(function (exists) {
            if (!exists) {
                db.schema
                    .createTable("users", function (table) {
                        table.increments("id").primary();
                        table.string("name");
                        table.string("email");
                        table.string("lat")
                        table.string("lon")
                    })
                    .then(function () {
                        const recordsLength = Array.from(Array(100).keys());
                        const records = recordsLength.map(rec => ({
                            name: faker.name.findName(),
                            email: faker.internet.email(),
                            lat: faker.address.latitude(),
                            long: faker.address.longitude(),
                        }));
                        db("users")
                            .insert(records)
                            .then(() => {
                                res.send("Seeded  user data");
                            });
                    });
            } else {
                res.send("Table users exists - Seeded data");
            }
        });

        db.schema.hasTable("division").then(function (exists) {
            if (!exists) {
                db.schema
                    .createTable("division", function (table) {
                        table.increments("id").primary();
                        table.string("division")
                        table.string("lat")
                        table.string("lon")
                    })
                    .then(function () {
                        const recordsLength = Array.from(Array(50).keys());
                        const records = recordsLength.map(rec => ({
                            division: faker.address.city(),
                            lat: faker.address.latitude(),
                            lon: faker.address.longitude(),
                        }));
                        db("division")
                            .insert(records)
                            .then(() => {
                                res.send("Seeded division data");
                            });
                    });
            } else {
                res.send("Table division exists - Seeded data");
            }
        });

        
    });
}