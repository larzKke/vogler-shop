
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('WebLayout',   {
            main: 'Home'
        });
    }
});

FlowRouter.route('/ferienwohnung', {
    name: 'ferienwohnung',
    action() {
        BlazeLayout.render('WebLayout',   {
            main: 'Ferienwohnung'
        });
    }
});

FlowRouter.route('/info', {
    name: 'info',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'Info'
        });
    }
});

FlowRouter.route('/shop', {
    name: 'shop',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'Shop'
        });
    }
});

FlowRouter.route('/forwarder', {
    name: 'forwarder',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'ForwarderList'
        });
    }
});

FlowRouter.route('/order', {
    name: 'order',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'Order'
        });
    }
});

FlowRouter.route('/thanks', {
    name: 'thanks',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'Thanks'
        });
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'Login'
        });
    }
});

FlowRouter.route('/admin', {
    name: 'admin',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'Admin'
        });
    }
});

FlowRouter.route('/cart', {
    name: 'cart',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'Cart'
        });
    }
});

FlowRouter.route('/product/new', {
    name: 'new-product',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'newProduct'
        });
    }
});

FlowRouter.route('/product/edit/:id', {
    name: 'product-single',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'ProductSingle'
        });
    }
});

FlowRouter.route('/account', {
    name: 'account',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'Account'
        });
    }
});

FlowRouter.route('/forwarder/new', {
  name: 'new-forwarder',
  action() {
    BlazeLayout.render('ShopLayout', {
      main: 'newForwarder'
    });
  }
});

FlowRouter.route('/forwarder/edit/:id', {
    name: 'forwarder-single',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'ForwarderSingle'
        });
    }
});

FlowRouter.route('/openAt', {
    name: 'open-at',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'OpenAt'
        });
    }
});

FlowRouter.route('/reservation', {
    name: 'bread-reservation',
    action() {
        BlazeLayout.render('ShopLayout', {
            main: 'BreadReservationAdmin'
        });
    }
});
