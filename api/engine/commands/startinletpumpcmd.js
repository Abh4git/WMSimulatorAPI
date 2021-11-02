const CommandBase = require("./commandbase");

class StartInteltPump extends CommandBase{
	constructor()
    {
        super()
    }
	
   
    execute()
    {
        console.log('Starting Inlet Pump');
        this.result=1; //success
    }


	
}

module.exports=StartInteltPump;