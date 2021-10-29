const Context = require("./context");
const Draining = require("./drainingstate");
const Drying = require("./dryingstate");
const Rinsing = require("./rinsingstate");
const Strategy = require("./strategy");
const Washing = require("./washingstate");
const WaterCollection = require("./watercollectionstate");
var redis = require('redis');
var publisher = redis.createClient();
var subscriber = redis.createClient();
class EcoModeStrategy extends Strategy{
	
	
    Execute()
    {
        this.context = new Context(new WaterCollection())
        console.log('Ecomode in operation')
        this.context.doAction()
        this.context.changeState(new Washing())
        //state changes to be updated to the client
        publisher.publish('notification','State changed to Washing')   
        this.context.doAction()
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

module.exports=EcoModeStrategy;