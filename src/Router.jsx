import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Own classes/components
import GeneralPage from './components/views/GeneralPage'
import ProductPage from './components/views/ProductPage'

/**
 * Router component that handles different paths.
 * Renders views in components/views.
 */
const Router = () => {

    // A <Switch> looks through its children <Route>s and
    // renders the first one that matches the current URL.
    return (
        <Switch>
            <Route path="/" exact={true} component={GeneralPage} />
            <Route path="/:id" component={ProductPage} />
        </Switch>
    )
};

export default Router