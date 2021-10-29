/*************************************************************************
 *  File: enginecontroller.js
 *  Responsibility: Controller for all Engine Operations
 *************************************************************************/

const EcoModeStrategy = require("../engine/ecomode");
const StrategyManager = require("../engine/strategymanger");
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
    /*Skill.find({})
    //  .populate({path:'translations',Model:'Translation'})
      //.populate("translations")
      //.populate( { 'translations.langcode': req.params.langcode } )
      .exec((err, skills) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!skills) {
          return res.status(404).send({ message: "Skills Not found." });
        }
        //assign to translated skills
        var translatedskills = skills
        //identify the right translation based on langcode
        //and update the title of translatedskills based on
        //the language.
        translatedskills.forEach(element => {
          //console.log(element.translations)
          element.translations.forEach(translatedValues=> {
            if (translatedValues.langcode==langcode)
            {
              element.title=translatedValues.title;
              
            }
          });
        });
       res.status(200).json({translatedskills});
      });*/

  };

  //Get Engine State
  exports.getEngineCurrentState = (req, res) => {
    console.log("Invoked getEngineCurrentState:-");
    /*Skill.findById(parseInt(req.params.skillid))
      .exec((err, skill) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!skill) {
          return res.status(404).send({ message: "Skill Not found." });
        }
  
        res.status(200).json({skill});
      });*/
  };

  