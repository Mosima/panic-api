const randomLocation = require('random-location')

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
        let center={

        }
        console.log('Range',randomGeo({
            latitude: -46.3927,
            longitude: -82.0444
        }, 500));
        service.getAllDivisions(db).then(data => {
            res.send(randomGeo());
        });

    })

}


function randomGeo(center, radius) {
    const P = {
        latitude: -25.9928,
        longitude:  28.1225
      }
      let R = 500 // meters
      const randomPoint = randomLocation.randomCirclePoint(P, R)
      let divisions = []
      for(let x = 0; x < 10; x++){
        divisions.push(randomLocation.randomCirclePoint(P, R))
        R = R + 5000
      }

      return divisions
}
