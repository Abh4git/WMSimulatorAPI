const StateBase = require("./statebase");




class Drying extends StateBase{
	
	constructor()
    {
        super()
    }
   
    
    performAction()
    {
        console.log('Drying started')
    }

    
	
}

module.exports=Drying;