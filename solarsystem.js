// 1. public property for holding the last modified date
// 2. getter for planets
// 3. getter/setter for activeSpacecraft
// 4. getter/setter for planetsLandedOn
// 5. 6 functions, 7 total returned lines

var SolarSystem = (function(){
	var planets = ["Mercury", "Venus", "Earth", "Mars"];
	var activeSpacecraft =[];
	var planetsLandedOn = 0;
	return {
		lastDate:new Date(),
		getPlanets: function(){
			return planets;
		},
		setPlanets: function(newPlanet){
			planets.push(newPlanet);
		},
		getActiveSpacecraft: function(){
			return activeSpacecraft;
		},
		setActiveSpacecraft: function(newSpacecraft) {
			activeSpacecraft.push(newSpacecraft);
		},
		getPlanetsLandedOn: function(){
			return planetsLandedOn;
		},
		setPlanetsLandedOn: function(planetsLandedOn){
			planetsLandedOn = numLanded;
		}
	}
})();
