var React = require('react');
var CartSummary = require('./app-summarycomponent');
var AppNavbar = require('./app-navbar');

var Header = React.createClass({
   render: function() {
       return (
           <div>
               <AppNavbar />
               <div className="row">
                   <div className="col-sm-6"><h1>Lets Shop</h1></div>
                   <div className="col-sm-2 col-sm-push-3">
                       <br />
                       <CartSummary />
                   </div>
               </div>
           </div>
       );
   }
});

module.exports = Header;