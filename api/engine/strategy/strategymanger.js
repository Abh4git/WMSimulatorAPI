const Strategy = require("./strategybase")


class StrategyManager {
    constructor(){

    }

    setStrategy(Strategy)
    {
        this.strategy=Strategy

    }

    executeStrategy()
    {
        this.strategy.Execute()
    }

}


module.exports=StrategyManager;