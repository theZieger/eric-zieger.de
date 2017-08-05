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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-html-build');

  grunt.registerTask('build', ['cssmin:dist', 'htmlbuild']);
  grunt.registerTask('default', ['build']);
};
