const State = require("./state");

class Context{
	
	constructor(State)
	{ 
		this.state=State;
	}

   changeState(State)
   {
       this.state =State;
 
   }
    doAction()
    {
        this.state.performAction()
        
    }
	
}

module.exports=Context;