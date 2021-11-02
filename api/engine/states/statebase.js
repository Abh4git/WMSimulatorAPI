
//Base class for States
class StateBase{
	
    constructor()
    {

    }

    performAction()
    {
        throw new Error("Method must be implemented.");
    }

	
}

module.exports=StateBase;