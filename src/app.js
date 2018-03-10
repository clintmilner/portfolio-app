import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('app.js has loaded and is running and loading via webpack-dev-server');

const ExpenseDashboardPage = () => (
    <div>
        This is the Expense Dashboard Page
    </div>
);

const AddExpensePage = () => (
    <div>
        This is the Add Expense Page
    </div>
);


const EditExpensePage = () => (
    <div>
        This is the Edit Expense Page
    </div>
);

const HelpPage = () => (
    <div>
        This is the Help Page
    </div>
);

const NotFoundPage = () => (
    <div>
        Page Not Found 404 - <Link to='/'>Go Home, You're Drunk</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help Desk</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));