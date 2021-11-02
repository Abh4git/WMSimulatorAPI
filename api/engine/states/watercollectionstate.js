const StateBase = require("./statebase");

class WaterCollection extends StateBase{
	
	constructor()
    {
        super()
    }
   
    
    performAction()
    {
        console.log('Watercollection started')
        
    }

    
	
}

module.exports=WaterCollection;