FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout',   {
            main: 'Home'
        });
    }
});

FlowRouter.route('/info', {
    name: 'info',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Info'
        });
    }
});

FlowRouter.route('/shop', {
    name: 'shop',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Shop'
        });
    }
});

FlowRouter.route('/forwarder', {
    name: 'forwarder',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'ForwarderList'
        });
    }
});

FlowRouter.route('/order', {
    name: 'order',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Order'
        });
    }
});

FlowRouter.route('/thanks', {
    name: 'thanks',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Thanks'
        });
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Login'
        });
    }
});

FlowRouter.route('/admin', {
    name: 'admin',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Admin'
        });
    }
});

FlowRouter.route('/cart', {
    name: 'cart',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Cart'
        });
    }
});

FlowRouter.route('/product/:id', {
    name: 'product-single',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'ProductSingle'
        });
    }
});

FlowRouter.route('/account', {
    name: 'account',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Account'
        });
    }
});

FlowRouter.route('/forwarder/:id', {
    name: 'forwarder-single',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'ForwarderSingle'
        });
    }
});
