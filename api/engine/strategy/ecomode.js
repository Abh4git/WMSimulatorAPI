const Context = require("../context");
const Draining = require("../states/drainingstate");
const Drying = require("../states/dryingstate");
const Rinsing = require("../states/rinsingstate");
const Washing = require("../states/washingstate");
const WaterCollection = require("../states/watercollectionstate");
var redis = require('redis');
const delay = require('delay');
const StrategyBase = require("./strategybase");
var publisher = redis.createClient();

//commands
const CommandBase=require('../commands/commandbase')
const StartInteltPump=require('../commands/startinletpumpcmd')
const StopInletPump=require('../commands/stopinletpumpcmd')
const TurnDrumMotorCW=require('../commands/drummotorcwcmd')
const TurnDrumMotorCounterCW=require('../commands/drummotorcountercwcmd')
const OpenOutletValve=require('../commands/openoutletvalvecmd')
const CloseOutletValve=require('../commands/closeoutletvalvecmd')
const StartDryer=require('../commands/startdryercmd')
const StopDryer=require('../commands/stopdryercmd')
const CommandContext = require('../commands/commandcontext')
var subscriber = redis.createClient();
class EcoModeStrategy extends StrategyBase{
	
	
    Execute()
    {

        this.context = new Context(new WaterCollection())
        console.log('Ecomode in operation')
        //Start Inlet Pump 
        this.CommandContext = new CommandContext()
        this.CommandContext.setCommand(new StartInteltPump)
        this.CommandContext.execute()
        //State Action
        this.context.doAction()
        //Stop Inlet Pump
        this.CommandContext.setCommand(new StopInletPump)
        this.CommandContext.execute()
        this.context.changeState(new Washing())
        //state changes to be updated to the client
        publisher.publish('notification','State changed to Washing')   
        this.CommandContext.setCommand(new TurnDrumMotorCW)
        this.CommandContext.execute()
        this.CommandContext.setCommand(new TurnDrumMotorCounterCW)
        this.CommandContext.execute()
        this.context.doAction()
        const delay = require('delay');
            // This will execute 10 seconds from now
        this.context.changeState(new Rinsing())
         //state changes to be updated to the client
         publisher.publish('notification','State changed to Rinsing') 
        this.context.doAction()
        //Open Outlet Valve
        this.CommandContext.setCommand(new OpenOutletValve)
        this.CommandContext.execute()
        this.context.changeState(new Draining())
         //state changes to be updated to the client
         publisher.publish('notification','State changed to Draining')   
        this.context.doAction()
        this.CommandContext.setCommand(new CloseOutletValve)
        this.CommandContext.execute()
        this.context.changeState(new Drying())
         //state changes to be updated to the client
         publisher.publish('notification','State changed to Drying') 
         this.CommandContext.setCommand(new StartDryer)
        this.CommandContext.execute()  
        this.context.doAction()
        this.CommandContext.setCommand(new StopDryer)
        this.CommandContext.execute()
        console.log('Ecomode operation completed')
        publisher.publish('notification','Operation completed')  
        
        
        
    }
	
}

module.exports=EcoModeStrategy;