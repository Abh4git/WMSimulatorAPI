const Context = require("../context");
const Draining = require("../states/drainingstate");
const Drying = require("../dryingstate");
const Rinsing = require("../rinsingstate");
const Washing = require("../washingstate");
const WaterCollection = require("../watercollectionstate");
var redis = require('redis');
const delay = require('delay');
const StrategyBase = require("./strategybase");
var publisher = redis.createClient();
var subscriber = redis.createClient();
class DeepCleanStrategy extends StrategyBase{
	
	
    Execute()
    {
        this.context = new Context(new WaterCollection())
        console.log('Ecomode in operation')
        this.context.doAction()
        this.context.changeState(new Washing())
        //state changes to be updated to the client
        publisher.publish('notification','State changed to Washing')   
        this.context.doAction()
        const delay = require('delay');
            // This will execute 10 seconds from now
        this.context.changeState(new Rinsing())
         //state changes to be updated to the client
         publisher.publish('notification','State changed to Rinsing') 
        this.context.doAction()
        this.context.changeState(new Draining())
         //state changes to be updated to the client
         publisher.publish('notification','State changed to Draining')   
        this.context.doAction()
        this.context.changeState(new Drying())
         //state changes to be updated to the client
         publisher.publish('notification','State changed to Drying')   
        this.context.doAction()
        console.log('Ecomode operation completed')
        publisher.publish('notification','Operation completed')  
        
        
        
    }
	
}

module.exports=DeepCleanStrategy;