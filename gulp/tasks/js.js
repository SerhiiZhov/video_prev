export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "js",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.gulpconcat('main.min.js'))
    .pipe(app.plugins.terser())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
} 