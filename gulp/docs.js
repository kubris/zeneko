const gulp 			= require('gulp'),
		pug			= require('gulp-pug'),
		sass			= require('gulp-sass')(require('sass')),
		sassGlob		= require('gulp-sass-glob'),
		server		= require('gulp-server-livereload'),
		clean			= require('gulp-clean'),
		fs 			= require('fs'),

		plumber		= require('gulp-plumber'),
		notify		= require('gulp-notify'),

		svgSprite	= require('gulp-svg-sprite'),
		svgmin 		= require('gulp-svgmin'),
		cheerio 		= require('gulp-cheerio'),
		replace 		= require('gulp-replace'),
		imagemin 	= require("gulp-imagemin"),
		webp 			= require("gulp-webp");

const 
		webpHTML 		= require('gulp-webp-html-nosvg'),
		autoprefixer 	= require('gulp-autoprefixer'),
		csso 				= require('gulp-csso'),
		groupMedia 		= require("gulp-group-css-media-queries");

// -- start server
const startServerSettings = {
	livereload: true,
	open: true,
};
// -- plumber
const plumberNotify = (title) => {
	return {
		errorHandler: notify.onError({
			title: title,
			message: "Error <%= error.message %>",
			sound: false,
		}),
	};
};


// === start CLEAN ===
gulp.task("clean:docs", function (callback) {
	if (fs.existsSync("./docs/")) {
		return gulp.src("./docs/", { read: false }).pipe(clean({ force: true }));
	}
	callback();
});
// === stop CLEAN ===

// === start PUG ===
gulp.task('pug:docs', function(){
	return gulp.src('./src/pug/*.pug')
		.pipe(plumber(plumberNotify('PUG')))
		.pipe(pug())
		.pipe(webpHTML())
		.pipe(gulp.dest('./docs'))
});
// === stop PUG ===

// === SCSS ===
gulp.task("sass:docs", function () {
	return gulp
		.src("./src/scss/*.scss")
		.pipe(plumber(plumberNotify("SASS")))
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(groupMedia())
		.pipe(autoprefixer(['last 15 versions', '> 1%']))
		.pipe(csso())
		.pipe(gulp.dest("./docs/css/"));
});
// end SCSS

// === IMAGES ===
gulp.task("images:docs", function () {
	return gulp.src('./src/images/**/*.+(jpg|jpeg|png)')
		.pipe(imagemin({ verbose: true }))
		.pipe(gulp.dest("./docs/images/"));
});
gulp.task("imagesWebp:docs", function () {
	return gulp
		.src("./src/images/**/*.+(jpg|jpeg|png)")
		.pipe(webp())
		.pipe(gulp.dest("./docs/images/"));
});
// end IMAGES

// === UPLOADS ===
gulp.task('uploads:docs', function(){
	return gulp.src('./src/uploads/**/*.+(jpg|jpeg|png)')
		.pipe(imagemin({ verbose: true }))
		.pipe(gulp.dest('./docs/uploads/'))
});
gulp.task('uploadsWebp:docs', function(){
	return gulp.src('./src/uploads/**/*.+(jpg|jpeg|png)')
		.pipe(webp())
		.pipe(gulp.dest('./docs/uploads/'))
});
// === end UPLOADS ===

// === start SVG SPRITE ===
gulp.task('svgSprite:docs', function(){
	return gulp.src('./src/images/sprite/mono/*.svg')
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: '../sprite-mono.svg',
					example: true
				}
			}
		}))
		.pipe(gulp.dest('./docs/images/sprite/'))
});

gulp.task('svgSpriteMulti:docs', function(){
	return gulp.src('./src/images/sprite/multi/*.svg')
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: '../sprite-multi.svg',
					example: true
				}
			}
		}))
		.pipe(gulp.dest('./docs/images/sprite/'))
});
// === stop SVG SPRITE ===

// === start SVG ===
gulp.task('svg:docs', function(){
	return gulp.src('./src/images/svg/**/*.svg')
		.pipe(gulp.dest('./docs/images/svg/'))
});
// === stop SVG ===

// === FONTS ===
gulp.task("fonts:docs", function () {
	return gulp
		.src("./src/fonts/**/*")
		.pipe(gulp.dest("./docs/fonts/"));
});
// === end FONTS ===

// === ROOT FOLDER files ===
gulp.task('root:docs', function(){
	return gulp.src('./src/*.+(ico|php|htaccess|txt)', { dot: true })
		.pipe(gulp.dest('./docs/'))
});
// === end ROOT FOLDER files ===

// === JS ===
gulp.task("js:docs", function () {
	return gulp
		.src("./src/js/*.js")
		.pipe(plumber(plumberNotify("JS")))
		// .pipe(babel(babelSettings))
		// .pipe(webpack(require("./../webpack.config.js")))
		.pipe(gulp.dest("./docs/js/"));
});
// === end JS ===

// === START Server ===
gulp.task("server:docs", function () {
	return gulp.src("./docs/").pipe(server(startServerSettings));
});
// end START Server

