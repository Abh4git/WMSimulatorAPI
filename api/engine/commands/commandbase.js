

//Base class for Commands
class CommandBase{
	
    constructor()
    {
        this.result=""
    }

    execute()
    {
        throw new Error("Method must be implemented.");
    }

    getResult()
    {
        return this.result;
    }


	
}

module.exports=CommandBase;