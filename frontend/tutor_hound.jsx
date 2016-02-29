var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    hashHistory = ReactRouter.hashHistory,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    root = document.getElementById('root'),

    ApiUtil = require('./util/ApiUtil'),
    SessionStore = require('./stores/session'),

    Dashboard = require('./components/dashboard'),
    Navbar = require('./components/navbar'),
    Account = require('./components/account'),
    AccountInfo = require('./components/account_info'),
    EditAccountInfo = require('./components/edit_account_info'),
    AccountPassword = require('./components/account_password'),
    AccountTransactions = require('./components/account_transactions'),
    AccountDeactivate = require('./components/account_deactivate');

var App = React.createClass({
  componentDidMount: function() {
    hashHistory.push("dashboard");
  },

  render: function () {
    window.ApiUtil = ApiUtil;
    return (
      <div>
        <Navbar />
        {this.props.children}
        {/*
        <Footer />
        */}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App} >
    <Route path="dashboard" component={Dashboard} />
    <Route path="account" component={Account}>
      <IndexRoute component={AccountInfo} />
      <Route path="edit" component={EditAccountInfo}/>
      <Route path="password" component={AccountPassword} />
      <Route path="transactions" component={AccountTransactions} />
      <Route path="deactivate" component={AccountDeactivate} />
    </Route>
  </Route>
);

$(document).on('DOMContentLoaded', function() {
  ReactDOM.render(<Router history={hashHistory} >{routes}</Router>,
    document.getElementById('root'));
});
