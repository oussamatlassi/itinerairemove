var Routes = require('../models/routes'),
    Route = require('../models/route'),
    WayPoints = require('../models/way-points'),
    routes,
    route;

routes = new Routes();
route = new Route({
    name: 'Exemple de Move International',
    wayPoints: new WayPoints([
        {name: 'Paris, France'},
        {name: 'Casablanca 20000, Maroc'}
        
    ])
});

routes.add(route);
routes.add(new Route({
    name: 'Nouveau Move',
    wayPoints: new WayPoints([
        {name: 'Adresse de Départ'},
        {name: 'Adresse d\'arrivée'}
    ])
}));

function newRoute() {
    return new Route({
        name: 'Nouveau Move',
        wayPoints: new WayPoints([
            {name: 'Adresse de Départ'},
            {name: 'Adresse d\'arrivée'}
        ])
    });
}

module.exports = {
    routes: routes,
    newRoute: newRoute
};