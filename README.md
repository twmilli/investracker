# Investracker


Link: [investracker.herokuapp.com](https://investracker.herokuapp.com/)

User Stories:
* I can view a graph displaying the recent trend lines for each added stock
* I can add new stocks by their symbol name
* I can remove stocks
* I can see changes in real-time when any other user adds or removes a stock

Details:
* Built with react and redux, redux-thunk to handle asynchronous API calls
* Stock charts made with Rechart.js
* Adding and removing stocks syncs in real-time across clients using socket.io.
* Node.js backend to handle socket connections and google-finance API calls

Potential future add-ons:
* Descriptions of news stories or more information connected with each ticker
* Autocomplete ticker codes
