const State = require("./state");

const Rinsing = require("./rinsingstate");


class WaterCollection extends State{
	
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