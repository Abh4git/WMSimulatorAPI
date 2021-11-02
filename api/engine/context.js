const StateBase = require("./states/statebase");

class Context{
	
	constructor(StateBase)
	{ 
		this.state=StateBase;
	}

   changeState(StateBase)
   {
       this.state =StateBase;
 
   }
    doAction()
    {
        this.state.performAction()
        
    }
	
}

module.exports=Context;