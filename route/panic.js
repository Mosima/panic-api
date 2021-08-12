const randomLocation = require('random-location')

module.exports = (router, distance, service, panicService) => {
    router.post("/panic", (req, res, next) => {
        const db = req.app.get('db');
        service.getAllDivisions(db).then(data => {
            let shortDistance = 0
            let distanceKM = []
            const panic = {
                lat: req.body.val.lat,
                lon: req.body.val.long,
            };

            distanceKM = data.map((x, ind) => {
                return {
                    distance: distance.between(panic, {lat: x.latitude, lon: x.longitude}).radians,
                    division: x.division
                }
            })
            shortDistance = distanceKM.reduce((prev, curr) => {
                return prev.distance < curr.distance ? prev : curr;
            });
            let obj = {
                division: shortDistance.division,
                distance: shortDistance.distance,
                user: req.body.val.user,
                userlat: req.body.val.lat,
                userlon: req.body.val.long,
            }

            panicService.insertPanic(db, obj).then(data => {
                res.send(data);
            })


        });

    })

    router.get("/division", (req, res, next) => {
        const db = req.app.get('db');
        service.getAllDivisions(db).then(data => {
            res.send(data);
        });

    })

}

