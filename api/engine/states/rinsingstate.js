const StateBase = require("./statebase");

class Rinsing extends StateBase{
	constructor()
    {
        super()
    }
	
   
    performAction()
    {
        console.log('Rinsing started')
    }

    
	
}

module.exports=Rinsing;