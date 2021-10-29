const Strategy = require("./strategy")


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