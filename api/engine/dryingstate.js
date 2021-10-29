const State = require("./state");




class Drying extends State{
	
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