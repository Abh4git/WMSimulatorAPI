const CommandBase = require("./commandbase");

class CloseOutletValve extends CommandBase{
	constructor()
    {
        super()
    }
	
   
    execute()
    {
        console.log('Close Outlet Valve ');
        this.result=1; //success
    }


	
}

module.exports=CloseOutletValve;