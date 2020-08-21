var Q = require('q');
var cors = require('cors');
var http = require('http');
var express = require('express');
var settings = require('./config.json');
var bodyParser = require('body-parser');

global.__base = __dirname + '/';
global.__settings = settings;

try {
    var portal = {
        api: (port) => {
            var deferred = Q.defer();

            try {
                var app = express();
                app.use(cors());
                app.use(bodyParser.urlencoded({
                    'limit': '50mb',
                    'extended': true
                }));
                app.use(bodyParser.json({
                    'limit': '50mb'
                }));

                app.use('/', express.static(__dirname + '/app/dist/apps/'));
                app.get('/*', (req, res) => {
                    res.sendFile(__dirname + '/app/dist/apps/index.html');
                });

                var server = http.createServer(app);
                server.listen(port);
                portal.server = server;
                console.log('main server up on port', port);

                deferred.resolve();
            } catch (e) {
                console.log('initAPI catch error: ' + e);
            };

            return deferred.promise;
        },

        init: (args) => {
            var deferred = Q.defer();

            portal.api(__settings.port)
                .then(args => {
                    deferred.resolve(args);
                }, err => {
                    deferred.reject(err);
                });

            return deferred.promise;
        }
    };

    portal.init({});
} catch (error) {
    console.log('The following error has occurred: ' + error.message);
};