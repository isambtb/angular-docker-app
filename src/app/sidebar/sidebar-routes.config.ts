export const ROUTES = [
    { path: 'notification', title: 'Notifications', icon: 'notifications', children: null },
    { path: '/dashboard', title: 'Home', icon: 'dashboard', children: null },
    { path: 'profile', title: 'User Profile', icon: 'person', children: null },
    { path: 'table', title: 'Medicament List', icon: 'content_paste', children: null },
    {
        path: '#component', id: 'component', title: 'Medicaments management', icon: 'apps', children: [
            { path: 'components/spl', title: 'Search', icon: 'S' },
            { path: 'components/medicament', title: 'Detail', icon: 'i' },
        ]
    },
    { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    { path: 'settings', title: 'Settings', icon: 'settings', children: null },
];

/*
{ path: 'components/price-table', title: 'Price Table', icon: 'PT' },
            { path: 'components/panels', title: 'Panels', icon: 'P' },
            { path: 'components/wizard', title: 'Wizard', icon: 'W' }
*/