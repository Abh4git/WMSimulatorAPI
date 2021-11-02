const CommandBase = require("./commandbase");

class TurnDrumMotorClockWise extends CommandBase{
	constructor()
    {
        super()
    }
	
   
    execute()
    {
        console.log('Turn DrumMotor ClockWise ');
        this.result=1; //success
    }


	
}

module.exports=TurnDrumMotorClockWise;