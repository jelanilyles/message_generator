# Message Generator
## Description
This project is a random phrase generator. It produces a forecasted event for a random subject.
## How it Works
        The program consists of 4 functions. The first three generate segments of the final phrase, which is generated and combined in the last function. 
    ### Day Function
        This function produces a time when the event is forecasted to happen. Resulting values range all days of the week and two less specific values, soon and in the not too near future.
    ### Subject Function
        This function determines who the forecasted event will concern: you, a friend, or an enemy.
    ### Forecast Function
        This function determines the event that is forecasted to happen.
    ### ProducePhrase Function
        This function calls the other functions in order and returns the resulting phrase forecast.