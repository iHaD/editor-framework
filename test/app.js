// init your app
var Fs = require('fire-fs');
var Path = require('fire-path');

// exports
module.exports = {
    run: function ( options ) {
        // initialize ./test/.settings
        var settingsPath = Path.join(Editor.cwd, 'test', '.settings');
        if ( !Fs.existsSync(settingsPath) ) {
            Fs.makeTreeSync(settingsPath);
        }
        Editor.registerProfilePath( 'local', settingsPath );

        // create main window
        var mainWin = new Editor.Window('main', {
            // atom-window options
            'title': 'Editor Framework',
            'min-width': 800,
            'min-height': 600,
            'show': false,
            'resizable': true,
        });
        Editor.mainWindow = mainWin;

        // restore window size and position
        mainWin.restorePositionAndSize();

        // load and show main window
        mainWin.show();
        mainWin.load( 'editor://static/window.html' );
    }
};