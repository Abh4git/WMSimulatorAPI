const CommandBase = require("./commandbase");

class CommandContext{
	constructor()
    {
        
    }
	
    setCommand(CommandBase)
    {
        this.command=CommandBase
    }
    execute()
    {
        this.command.execute()
    }


	
}

module.exports=CommandContext;