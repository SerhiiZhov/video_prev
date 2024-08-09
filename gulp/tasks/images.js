import webp from 'gulp-webp';
import imagemin, {gifsicle, mozjpeg, optipng} from 'gulp-imagemin';

export const images = () => {
    return app.gulp.src(app.path.src.images, { encoding: false })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "images",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(imagemin([
        gifsicle({interlaced: true}),
        mozjpeg({quality: 40, progressive: true}),
        optipng({optimizationLevel: 5}),
    ]))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images, { encoding: false }))
    .pipe(webp({quality: 20}))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream())
} 