module.exports = function(grunt)
    {

    //Project configuration.
    grunt.initConfig(
        {
        //pkg: grunt.file.readJSON('package.json'),

        //MINIFIED
        uglify:
          {
          options:
            {
            compress: true,
            mangle: true
            },

          my_target:
            {
            src:'./app/dist/app_bundle.js',
            dest:'./app/dist/app_bundle.js'
            }
          },

        //CONCATENATION LIBS
        concat:
          {
          libs:
            {
            options:
              {
              separator:';'
              },
            src: [
              './bower_components/angular/angular.min.js',
              './bower_components/jquery/dist/jquery.min.js',
              './bower_components/bootstrap/dist/js/bootstrap.min.js',
              './bower_components/angular-bootstrap/ui-bootstrap.min.js',
              './bower_components/angular-ui-router/release/angular-ui-router.min.js',
              './app/non_bower_libs/d3.min.js',
              ],
            dest: './app/dist/libs_bundle.js',
            },
          //CONCATENATE LIBS CSS
          css:
            {
            options:
              {
              separator:''
              },
            src:[
              './bower_components/bootstrap/dist/css/bootstrap.min.css',
              ],
            dest:'./app/dist/libs_styles.css'
            }
          },

        //BROWSERIFY APP JS
        browserify:
          {
          some_task:
            {
            src:['./app/*.js',
                './app/controllers/*.js',
                './app/controllers/**/*.js',
                './app/directives/*.js',
                './app/services/*.js',
                './app/filters/*.js',
                './app/factories/*.js'],
            dest:'./app/dist/app_bundle.js'
            }
          },


        //SAAS
        sass:
          {
          dist:
            {
            options:
              {
              style:'compressed'
              },
            files:
              {
              './app/dist/compile.css': './app/styles/compile.scss'
              }
            }
          },


          //WATCHER
          watch:
            {
            app:
              {
              files:['./app/*.js',
                  './app/controllers/*.js',
                  './app/controllers/**/*.js',
                  './app/directives/*.js',
                  './app/services/*.js',
                  './app/filters/*.js',
                  './app/factories/*.js'],
              tasks:['browserify']
              },
            css:
              {
              files:['./app/styles/*'],
              tasks:['sass']
              },
            libs:
              {
              files:['./app/non_bower_libs/*.*','./app/non_bower_libs/**/*.*',],
              tasks:['concat']
              }
            }
            

        });


  //Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Default task runs automatically when grunt runs from command line
  grunt.registerTask('default', ['sass','concat','browserify','watch']);
  grunt.registerTask('full_build',['sass','concat','browserify','uglify']);  //all task execute

  };