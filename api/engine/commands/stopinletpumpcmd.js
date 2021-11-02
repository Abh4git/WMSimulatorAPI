const CommandBase = require("./commandbase");

class StopInletPump extends CommandBase{
	constructor()
    {
        super()
    }
	
   
    execute()
    {
        console.log('Stopping Inlet Pump');
        this.result=1; //success
    }


	
}

module.exports=StopInletPump;