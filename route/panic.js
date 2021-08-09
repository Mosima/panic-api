module.exports = (router, distance, service) => {

    router.get("/panic", (req, res, next) => {
        const db = req.app.get('db');
        service.getAllDivisions(db).then(data => {
            let shortDistance = 0
            let distanceKM = []
            const panic = {
                lat: -46.3927,
                lon: -82.0444
            };

            distanceKM = data.map((x, ind) => {
                return {
                    distance: distance.between(panic, x).radians,
                    division: x.division
                }
            })
            shortDistance = distanceKM.reduce((prev, curr) => {
                return prev.Cost < curr.Cost ? prev : curr;
            });
            res.send(shortDistance);
        });

    })

    router.get("/division", (req, res, next) => {
        const db = req.app.get('db');
        service.getAllDivisions(db).then(data => {
            res.send(data);
        });

    })

}
