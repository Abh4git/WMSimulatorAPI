const State = require("./state");

class Rinsing extends State{
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