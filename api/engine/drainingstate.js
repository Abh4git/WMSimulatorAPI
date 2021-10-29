const State = require("./state");




class Draining extends State{
	
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