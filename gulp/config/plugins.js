import replace from "gulp-replace";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import gulpconcat from 'gulp-concat';
import terser from 'gulp-terser';
import newer from 'gulp-newer';



export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    gulpconcat: gulpconcat,
    terser: terser,
    newer: newer

}  