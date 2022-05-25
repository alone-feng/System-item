import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
let NotFound = lazy(() => import("../Views/NotFound"))
let Home = lazy(() => import("../Views/Home/index"))
let List = lazy(() => import("../Views/List/index"))
let Login = lazy(() => import("../Views/Mine/Login"))
export default function router() {
    return (
        <div>
            <Router>
                <Suspense fallback={<div>......加载中</div>}>
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/list' component={List} />
                        <Route path='/Login' component={Login} />
                        <Route path='/404' component={NotFound} />
                        <Redirect path='*' to="/404" />

                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
}
