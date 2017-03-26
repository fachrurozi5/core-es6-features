var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var htmlInjectior = require("bs-html-injector");

/**
 *  Start browserSync
 */
gulp.task("browser-sync", function () {
    browserSync.init({
        server: "./app",
        files: ["app/css/*.css", "app/js/*.js"],
        plugins: [
            {
                module: "bs-html-injector",
                options: {
                    files: ["*.html", "*.js"]
                }
            }
        ]
    });
});

gulp.task("default", ["browser-sync"], function () {
    gulp.watch("app/*.html", htmlInjectior);
})