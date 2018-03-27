const gulp = require("gulp");
const replace = require("gulp-string-replace");
const debug = require("gulp-debug");

const iconPath = "./common.blocks/icon/**/**.post.css"

const replaceOptions = {
	logs: {
		enabled: false
	}
};

gulp.task("removeBg", function() {
	return gulp
		.src(iconPath)
		.pipe(debug({ title: "icon:" }))
		.pipe(replace(/;\s*background-size:.*;/g, ";", replaceOptions))
		.pipe(gulp.dest("./common.blocks/icon"));
});
