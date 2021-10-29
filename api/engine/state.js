const Context = require("./context");

class State{
	
	/*(Context)
	{
		this.context=Context;
		
	}*/

    constructor()
    {

    }

    performAction()
    {
        throw new Error("Method must be implemented.");
    }

	
}

module.exports=State;