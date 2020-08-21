import { OnInit, Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-apps-page',
    styleUrls: ['./apps.page.scss'],
    templateUrl: './apps.page.html'
})

export class AppsPage implements OnInit, OnDestroy {

    constructor() { };

    public apps: any[] = [
        {
            'name': 'alerting',
            'type': 'web',
            'icon': 'https://alerting.dev.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://alerting.dev.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/alerting',
                    'title': 'GitHub',
                    'disabled': false
                }
            ]
        },
        {
            'name': 'auth',
            'type': 'web',
            'icon': 'https://auth.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://auth.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/auth',
                    'title': 'GitHub',
                    'disabled': false
                }
            ]
        },
        {
            'name': 'docs',
            'type': 'web',
            'icon': 'https://docs.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://docs.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/docs',
                    'title': 'GitHub',
                    'disabled': false
                }
            ]
        },
        {
            'name': 'drive',
            'type': 'web',
            'icon': 'https://www.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://drive.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/drive',
                    'title': 'GitHub',
                    'disabled': false
                }
            ]
        },
        {
            'name': 'invoices',
            'type': 'web',
            'icon': 'https://invoices.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://invoices.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/invoices',
                    'title': 'GitHub',
                    'disabled': false
                }
            ]
        },
        {
            'name': 'logger',
            'type': 'web',
            'icon': 'https://logger.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://logger.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/logger',
                    'title': 'GitHub',
                    'disabled': false
                }
            ]
        },
        {
            'name': 'mapping',
            'type': 'web',
            'icon': 'https://mapping.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://mapping.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/mapping',
                    'title': 'GitHub',
                    'disabled': false
                }
            ]
        },
        // {
        //     'name': 'payfast',
        //     'type': 'web',
        //     'icon': 'https://payfast.bitid.co.za/assets/icons/icon-512x512.png',
        //     'links': [
        //     {
        //         'link': 'https://payfast.bitid.co.za',
        //         'title': 'open',
        //         'disabled': false
        //     },
        // {
        //     'link': 'https://github.com/bitid-open-source-iot/payfast',
        //     'title': 'GitHub',
        //     'disabled': false
        // }
        // ]
        // },
        {
            'name': 'reporting',
            'type': 'web',
            'icon': 'https://www.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://reporting.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/reporting',
                    'title': 'GitHub',
                    'disabled': false
                }
            ]
        },
        {
            'name': 'scanin',
            'type': 'web',
            'icon': 'https://scanin.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://scanin.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/scanin',
                    'title': 'GitHub',
                    'disabled': true
                }
            ]
        },
        {
            'name': 'sms',
            'type': 'web',
            'icon': 'https://www.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://sms.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/sms',
                    'title': 'GitHub',
                    'disabled': true
                }
            ]
        },
        {
            'name': 'store admin',
            'type': 'web',
            'icon': 'https://store-admin.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://store-admin.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/store',
                    'title': 'GitHub',
                    'disabled': false
                }
            ]
        },
        {
            'name': 'subscriptions',
            'type': 'web',
            'icon': 'https://subscriptions.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://subscriptions.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/subscriptions',
                    'title': 'GitHub',
                    'disabled': false
                }
            ]
        },
        {
            'name': 'telemetry',
            'type': 'web',
            'icon': 'https://www.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://telemetry.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/telemetry',
                    'title': 'GitHub',
                    'disabled': true
                }
            ]
        },
        {
            'name': 'thermopi',
            'type': 'web',
            'icon': 'https://thermopi.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://thermopi.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/thermopi',
                    'title': 'GitHub',
                    'disabled': true
                }
            ]
        },
        {
            'name': 'tikit',
            'type': 'web',
            'icon': 'https://www.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://tikit.bitid.co.za',
                    'title': 'open',
                    'disabled': false
                },
                {
                    'link': 'https://github.com/bitid-open-source-iot/tikit',
                    'title': 'GitHub',
                    'disabled': true
                }
            ]
        },
        {
            'name': 'tikit',
            'type': 'phone',
            'icon': 'https://www.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://play.google.com/store/apps/details?id=com.bitid.tikit',
                    'title': 'Android',
                    'disabled': false
                },
                {
                    'link': '',
                    'title': 'iOS',
                    'disabled': true
                }
            ]
        },
        {
            'name': 'OpenThings',
            'type': 'phone',
            'icon': 'https://www.bitid.co.za/assets/icons/icon-512x512.png',
            'links': [
                {
                    'link': 'https://play.google.com/store/apps/details?id=com.bitid.telemetry',
                    'title': 'Android',
                    'disabled': false
                },
                {
                    'link': '',
                    'title': 'iOS',
                    'disabled': true
                }
            ]
        }
    ];

    public async open(url: string) {
        window.open(url, '_blank');
    };

    ngOnInit(): void { };

    ngOnDestroy(): void { };

}