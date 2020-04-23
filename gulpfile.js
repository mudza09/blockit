const {src, dest, task, watch, series, parallel} = require('gulp');

// Gulp plugin
const   panini          = require('panini'),
        merge           = require('merge-stream'),
        extReplace      = require('gulp-ext-replace'),
        newer           = require('gulp-newer'),
        del             = require('del'),
        sass            = require('gulp-sass'),
        autoPrefixer    = require('gulp-autoprefixer'),
        beautify        = require('gulp-jsbeautifier'),
        rename          = require('gulp-rename'),
        concat          = require('gulp-concat'),
        imagemin        = require('gulp-imagemin'),
        browserSync     = require('browser-sync').create(),
        minify          = require('gulp-minifier'),
        validator       = require('gulp-w3c-html-validator');  

// Clean dist folder
function clean() {
    return del('dist');
}

// Handlebar compile task
function compileHtml() {
    return src('src/pages/**/*.hbs')
        .pipe(newer('dist'))
        .pipe(panini({
            root: 'src/pages/',
            layouts: 'src/layouts/',
            partials: 'src/partials/',
            data: 'src/data/'
        }))
        .pipe(extReplace('.html'))
        .pipe(beautify({
            html: {
                file_types: ['.html'],
                max_preserve_newlines: 0,
                preserve_newlines: true,
            }
        }))
        // .pipe(validator())
        .pipe(dest('dist'));
};

// Panini reload cache
function resetPages(done) {
    panini.refresh();
    done();
};

// Sass compile task
function compileCss() {
    return merge(
        // uikit sass compile
        src('src/assets/scss/uikit.scss')        
        .pipe(newer('dist/css'))
        .pipe(sass().on('error', sass.logError))        
        .pipe(rename('uikit.css'))
        .pipe(beautify({css: {file_types: ['.css']} }))
        .pipe(dest('dist/css')),

        // style sass compile
        src('src/assets/scss/style.scss')        
        .pipe(newer('dist/css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefixer())      
        .pipe(rename('style.css'))        
        .pipe(beautify({css: {file_types: ['.css']} }))
        .pipe(dest('dist/css'))
    );
};

// Vendor javascript concat task
function compileJs() {
    return merge(
        // js config deliver
        src(['src/assets/js/*.js', '!src/assets/js/vendor/*.js'])
        .pipe(newer('dist/js'))
        .pipe(beautify({js: {file_types: ['.js']} }))
        .pipe(dest('dist/js')),

        // js main concat
        src('src/assets/js/in-core/*.js')
        .pipe(concat('in-core.min.js', {newLine: '\r\n\r\n'}))
        // .pipe(minify({minify: true, minifyJS: {sourceMap: false}}))
        .pipe(dest('dist/js/vendor')),

        // js vendor
        src('src/assets/js/vendor/*.js')
        .pipe(newer('dist/js/vendor'))
        .pipe(dest('dist/js/vendor'))
    );
};

// Image optimization task
function minifyImg() {
    return src('src/assets/img/**/*')
        .pipe(newer('dist/img'))
        .pipe(
            imagemin([
                imagemin.gifsicle({
                    interlaced: true
                }),
                imagemin.mozjpeg({
                    quality: 80,
                    progressive: true
                }),
                imagemin.optipng({
                    optimizationLevel: 5
                }),
                imagemin.svgo({
                    plugins: [{
                        removeViewBox: true
                    }, {
                        cleanupIDs: false
                    }]
                })
            ])
        )
        .pipe(dest('dist/img'));
};

// Static file task
function serveStatic() {
    return merge(
        // webfonts
        src('src/assets/fonts/*')
        .pipe(newer('dist/fonts'))
        .pipe(dest('dist/fonts')),

        // fontAwesome icons
        src([
            'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff',
            'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2',
            'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff',
            'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2'
        ])
        .pipe(newer('dist/fonts'))
        .pipe(dest('dist/fonts')),

        // favicon
        src('src/assets/static/favicon.ico')
        .pipe(newer('dist'))
        .pipe(dest('dist')),

        // apple touch icon
        src('src/assets/static/apple-touch-icon.png')
        .pipe(newer('dist'))
        .pipe(dest('dist')),

        // php file task
        src('src/assets/php/*')
        .pipe(newer('dist'))
        .pipe(dest('dist'))
    );
}

// Minify demo file
function minifyDemo() {
    return merge(
        // html minify
        src('dist/**/*.html')
        .pipe(minify({minify: true, minifyHTML: {collapseWhitespace: true, removeComments: true}}))
        .pipe(dest('dist/')),

        // css minify
        src('dist/css/*.css')
        .pipe(minify({minify: true, minifyCSS: true}))
        .pipe(dest('dist/css')),

        // js minify
        src('dist/js/*.js')
        .pipe(minify({minify: true, minifyJS: {sourceMap: false}}))
        .pipe(dest('dist/js'))
    );
};

// Browsersync and wacth file task
function wacthFiles() {
    watch('src/assets/scss/**/*.scss', series(compileCss))
    watch('src/assets/js/**/*.js', series(compileJs))
    watch('src/assets/img/**/*', series(minifyImg))
    watch('src/**/*.hbs', series(resetPages, compileHtml))
    watch('src/data/*.json', series(resetPages, compileHtml));
};

function browserReload() {
    browserSync.init({
        watch: true,
        notify: false,
        server: {
            baseDir: 'dist'
        }
    });
};

// Define task for gulp
task("build", series(clean, parallel(compileHtml, compileCss, compileJs, minifyImg, serveStatic)))
task("dev", series(compileHtml, compileCss, compileJs, minifyImg))
task("watch", series("dev", parallel(wacthFiles, browserReload)))
task("minify", series(minifyDemo));