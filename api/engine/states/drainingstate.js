const StateBase = require("./statebase");




class Draining extends StateBase{
	
	constructor()
    {
        super()
    }
   
    
    performAction()
    {
        console.log('Draining started')
    }

    
	
}

module.exports=Draining;