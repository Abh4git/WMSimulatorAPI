const CommandBase = require("./commandbase");

class StopDryer extends CommandBase{
	constructor()
    {
        super()
    }
	
   
    execute()
    {
        console.log('Stop Dryer ');
        this.result=1; //success
    }


	
}

module.exports=StopDryer;