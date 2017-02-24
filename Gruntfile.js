module.exports = function(grunt) {

  grunt.initConfig({
    ftp: grunt.file.readJSON('../ftp-server.json'),
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        level: 2
      },
      dist: {
        files: [{
          'dist/src/css/bundle.css': [
            'node_modules/normalize.css/normalize.css',
            'src/css/styles.css'
          ]
        },{
          'dist/src/css/fonts.css': 'src/css/fonts.css'
        }]
      }
    },
    htmlbuild: {
      dist: {
        src: 'src/index.html',
        dest: 'dist/index.html',
        options: {
          styles: {
            styles: 'dist/src/css/bundle.css',
            fonts: 'dist/src/css/fonts.css'
          },
          sections: {
            svg: {
              email: 'src/images/email.svg',
              github: 'src/images/github.svg',
              logo: 'src/images/logo.svg',
              steam: 'src/images/steam.svg',
              twitter: 'src/images/twitter.svg',
              xing: 'src/images/xing.svg'
            }
          },
          data: {
            currentPosition: 'Front-End Entwickler',
            from: 'Leipzig, Deutschland'
          }
        }
      } 
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-html-build');

  grunt.registerTask('build', ['cssmin', 'htmlbuild']);
  grunt.registerTask('default', ['build']);
};