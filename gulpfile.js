const gulp 	= require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

// === GULP RUN ===
// developmen: gulp
gulp.task('default', 
	gulp.series('clean:dev', 
	gulp.parallel('pug:dev', 'sass:dev', 
	'images:dev', 'imagesWebp:dev', 
	'uploads:dev', 'uploadsWebp:dev',
	'svgSprite:dev', 'svgSpriteMulti:dev', 'svg:dev',
	'fonts:dev', 'js:dev', 'root:dev'),
	gulp.parallel('server:dev', 'watch:dev')
));

// production: gulp docs
gulp.task(
	'docs', 
	gulp.series('clean:docs', 
		gulp.parallel('pug:docs', 'sass:docs', 'imagesWebp:docs', 'images:docs', 'fonts:docs', 'uploadsWebp:docs', 'uploads:docs', 'svgSprite:docs', 'svgSpriteMulti:docs', 'svg:docs', 'js:docs', 'root:docs'),
		gulp.parallel('server:docs')
));
// === end GULP RUN ===