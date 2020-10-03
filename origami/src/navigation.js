import React from 'react'
import {
    BrowserRouter,
    Switch,
    Router, Route
} from 'react-router-dom'

import Publications from './pages/publications'
import ShareThoughtsPage from './pages/share-thoughts'

const Navigation = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Publications} />
            <Route path="/share" component={ShareThoughtsPage} />
        </Switch>
    </BrowserRouter>
)

export default Navigation