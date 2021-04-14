// Helper file to get started

const Traveller = require('./models/traveller.js');
const Journey = require('./models/journey.js');

journey1 = new Journey('linlithgow', 'stirling', 'train', 30);
journey2 = new Journey('paris', 'frankfurt', 'train', 400);
journey3 = new Journey('sydney', 'new york', 'aeroplane', 10000);
journey4 = new Journey('london', 'rome', 'car', 1200);
journey5 = new Journey('lancaster', 'isle of man', 'ferry', 80);
journeys = [journey1, journey2, journey3, journey4, journey5];
traveller = new Traveller(journeys);

console.log(journey1.startLocation);

console.log(traveller.journeys);

console.log(traveller.getJourneyStartLocations());