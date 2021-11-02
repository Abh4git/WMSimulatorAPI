/*************************************************************************
 *  File: enginecontroller.js
 *  Responsibility: Controller for all Engine Operations
 *************************************************************************/

const EcoModeStrategy = require("../engine/strategy/ecomode");
const StrategyManager = require("../engine/strategy/strategymanger");
// Start the Engine 
exports.startEngineOperation = (req, res) => {
    console.log("Invoked startEngineOperation:- ");
    strategyManager = new StrategyManager()

    ecomode= new EcoModeStrategy()
    strategyManager.setStrategy(ecomode)
    strategyManager.executeStrategy()
    res.status(200).json({'Operation':'Completed'});
    
  };


// Stop Engine
  exports.stopEngineOperation = (req, res) => {
    console.log("Invoked stopEngineOperation:- ");
   
  };

  //Get Engine State
  exports.getEngineCurrentState = (req, res) => {
    console.log("Invoked getEngineCurrentState:-");
   
  };

  