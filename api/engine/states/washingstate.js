const StateBase = require("./statebase");

class Washing extends StateBase{
	constructor()
    {
        super()
    }
	
   
    performAction()
    {
        console.log('Washing started')
    }

    
	
}

module.exports=Washing;