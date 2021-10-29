const State = require("./state");

class Washing extends State{
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