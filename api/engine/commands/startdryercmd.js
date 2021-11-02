const CommandBase = require("./commandbase");

class StartDryer extends CommandBase{
	constructor()
    {
        super()
    }
	
   
    execute()
    {
        console.log('Start Dryer ');
        this.result=1; //success
    }


	
}

module.exports=StartDryer;