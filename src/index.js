import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import '../node_modules/materialize-css/dist/js/materialize.min'
import rootReducer from './store/reducers/rootReducer'

//2) create store by createStore
import { createStore } from 'redux'

//get the Provider to pass the stored values into the application
import { Provider } from 'react-redux'

//3) store reucers into created store
const store = createStore(rootReducer)

//4)Add provider layer to the App and register store to provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
