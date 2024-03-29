var React = require('react');
var Link = require('react-router-component').Link;
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var AppStore = require('../../stores/app-store');

function cartTotals() {
    return AppStore.getCartTotals();
}

var CartSummary = React.createClass({
    mixins: [StoreWatchMixin(cartTotals)],
    render: function() {
        return (
            <div>
                <Link href="/cart" className="btn btn-success">
                    Cart Items: {this.state.qty} / ${this.state.total}
                </Link>
            </div>
        );
    }
});

module.exports = CartSummary;