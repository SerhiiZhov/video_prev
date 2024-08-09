import *as dartsass from 'sass';
import gulpsass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import groupcssmediaqueries from 'gulp-group-css-media-queries';


const sass = gulpsass(dartsass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "scss",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
        outputStyle: `expanded`
    }))
    .pipe(groupcssmediaqueries())
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(autoPrefixer({
        grid: true,
        overrideBrowserslist: ['last 3 version'],
        cascade: true,
    }))
    .pipe(sass({
        outputStyle: `compressed`
    }))
    .pipe(app.plugins.gulpconcat('style.min.css'))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}