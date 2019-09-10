'use strict'

const { remote } = require('electron')
const { app, dialog, shell } = remote

window.PRELOAD = {
    app : app,
    async: require('async'),
    dialog : dialog,
    git: require('simple-git'),
    path: require('path'),
    remote : remote,
    renderer: require('entu-ssg'),
    shell : shell,
}
