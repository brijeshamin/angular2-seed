/**
 * Created by Brij on 01-02-2016.
 */
import {join} from 'path';
import {APP_SRC, APP_DEST} from '../config';
//var scsslint = require('gulp-scss-lint');

export = function buildSassDev(gulp, plugins, option) {
    return function () {
        return gulp.src(join(APP_SRC, '**', '*.scss'))
            //.pipe(scsslint())
            .pipe(plugins.sass().on('error', plugins.sass.logError))
            .pipe(gulp.dest(APP_DEST));
    };
}
