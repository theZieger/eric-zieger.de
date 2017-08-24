module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        level: 2
      },
      dist: {
        files: [{
          'dist/src/css/styles.css': 'src/css/styles.css'
        }]
      }
    },
    htmlbuild: {
      dist: {
        src: 'src/index.html',
        dest: 'dist/index.html',
        options: {
          styles: {
            styles: 'dist/src/css/styles.css',
            fonts: 'dist/src/css/fonts.css'
          },
          sections: {
            svg: {
              email: 'src/images/email.svg',
              github: 'src/images/github.svg',
              steam: 'src/images/steam.svg',
              twitter: 'src/images/twitter.svg',
              xing: 'src/images/xing.svg',
              experience: 'src/images/trophy.svg',
              about: 'src/images/pen.svg',
              star: 'src/images/star.svg',
              fork: 'src/images/fork.svg',
              npm: 'src/images/npm.svg'
            }
          }
        }
      }
    },
    uglify: {
      options: {
        compress: {
          dead_code: true,
          drop_debugger: true,
          properties: true,
          conditionals: true,
          booleans: true,
          if_return: true,
          collapse_vars: true,
          warnings: true,
          drop_console: true,
          passes: 2
        },
        quoteStyle: 1,
        report: 'gzip'
      },
      dist: {
        files: {
          'dist/src/js/app.js': 'src/js/*.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-build');

  grunt.registerTask('build', ['cssmin:dist', 'uglify:dist', 'htmlbuild']);
  grunt.registerTask('default', ['build']);
};
