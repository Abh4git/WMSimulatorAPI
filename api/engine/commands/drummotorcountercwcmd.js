const CommandBase = require("./commandbase");

class TurnDrumMotorCounterClockWise extends CommandBase{
	constructor()
    {
        super()
    }
	
   
    execute()
    {
        console.log('Turn DrumMotor Counter ClockWise ');
        this.result=1; //success
    }


	
}

module.exports=TurnDrumMotorCounterClockWise;