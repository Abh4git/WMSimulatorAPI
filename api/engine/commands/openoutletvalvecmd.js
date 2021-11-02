const CommandBase = require("./commandbase");

class OpenOutletValve extends CommandBase{
	constructor()
    {
        super()
    }
	
   
    execute()
    {
        console.log('Open Outlet Valve ');
        this.result=1; //success
    }


	
}

module.exports=OpenOutletValve;