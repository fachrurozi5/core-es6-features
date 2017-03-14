var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var htmlInjectior = require("bs-html-injector");

/**
 *  Start browserSync
 */
gulp.task("browser-sync", function () {
    browserSync.use(htmlInjectior, {
        files: "app/*.html"
    });
    browserSync.init({
        server: "./app"
    });
});

gulp.task("default", ["browser-sync"], function () {
    gulp.watch("app/*.html", htmlInjectior);
})