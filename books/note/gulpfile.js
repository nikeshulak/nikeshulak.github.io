// node -v 
// v18.16.1
// gulp jsBundle
// to combine
const { src, dest } = require('gulp');
const concat = require('gulp-concat');

const jsBundle = () =>
  src([
    'books/noteSufisVol1.js',
    'books/maha-geeta/*.js',
    'books/noteMahaGeeta.js',
  ])
    .pipe(concat('note-combined.js'))
    .pipe(dest('./'));

exports.jsBundle = jsBundle;
