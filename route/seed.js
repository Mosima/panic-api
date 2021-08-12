
let R = 500 // meters
module.exports = (router, async,faker, randomLocation) => {
    router.get("/seed",  (req, res, next) => {
        const db = req.app.get('db');
        db.schema.hasTable("division").then(function (exists) {
            if (!exists) {
                console.log("object,", randomGeo().longitude);

                db.schema
                    .createTable("division", function (table) {
                        table.increments("id").primary();
                        table.string("division")
                        table.string("latitude")
                        table.string("longitude")
                    })
                    .then(function () {
                        const recordsLength = Array.from(Array(10).keys());
                        const records = recordsLength.map(rec => ({
                            division: faker.address.city(),
                            latitude: randomGeo().latitude,
                            longitude: randomGeo().longitude,
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

  function randomGeo(center, radius) {
        const P = {
            latitude: -25.9928,
            longitude:  28.1225
          }
          const randomPoint = randomLocation.randomCirclePoint(P, R)
          R = R + 5000
          return randomPoint
    }
}


  