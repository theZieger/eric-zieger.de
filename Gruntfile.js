module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        level: 2
      },
      bundle: {
        files: [{
          'dist/src/css/bundle.css': [
            'node_modules/normalize.css/normalize.css',
            'src/css/styles.css'
          ]
        },{
          'dist/src/css/fonts.css': 'src/css/fonts.css'
        }]
      },
      dist: {
        files: {
          'dist/src/css/bundle.css': 'dist/src/css/bundle.css'
        }
      }
    },
    criticalcss: {
      dist: {
        options: {
          url: 'http://pinkfluffyunicorn.com/eric-zieger.de/dist/',
          filename: 'dist/src/css/bundle.css',
          outputfile: 'dist/src/css/bundle.css',
          ignoreConsole: true,
          width: '1600',
          height: '1200'
        }
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
        options: {
          wrap: 'srvWrkr'
        },
        files: {
          'dist/service-worker.js': 'src/service-worker.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['cssmin:bundle', 'criticalcss', 'cssmin:dist', 'htmlbuild', 'uglify']);
  grunt.registerTask('default', ['build']);
};
