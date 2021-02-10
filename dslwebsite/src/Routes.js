import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Members } from './pages/Members';
import { News } from './pages/News';
import { AboutUs } from './pages/AboutUs';
import { WorkWithUs } from './pages/WorkWithUs';
import { CallForPaper } from './pages/CallForPaper';
import { Publications } from './pages/Publications';
import { ResearchArea } from './pages/ResearchArea';
import { ResearchProject } from './pages/ResearchProject';

const routes = [{
    path: '/',
    Component: HomePage,
    exact: true,
}, {
    path: '/members',
    Component: Members,
}, {
    path: '/news',
    Component: News,
}, {
    path: '/about-us',
    Component: AboutUs,
}, {
    path: '/work-with-us',
    Component: WorkWithUs,
}, {
    path: '/research-area',
    Component: ResearchArea,
}, {
    path: '/research-project',
    Component: ResearchProject,
}, {
    path: '/publications',
    Component: Publications,
}, {
    path: '/call-for-paper',
    Component: CallForPaper,
}];

export const Routes = () => (
    <Router>
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                >
                    <route.Component />
                </Route>
            ))}
        </Switch>
    </Router>
)