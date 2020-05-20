import React from 'react'
import './app.css'
import {Route, Switch} from 'react-router-dom'
import { HomePage, CardPage } from '../pages'

const App = ({bookStoreService}) =>{
    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/card" component={CardPage} exact />
        </Switch>
    )
}
export default App