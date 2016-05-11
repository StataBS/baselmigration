'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      tasks: {
        src: ['tasks/*.js']
      }
    },
	
    nodeunit: {
      files: ['test/**/*_test.js']
    },
	
    filter: {
      main: {
        options: {
          countries: 'data/countries Version2.csv'
        },
        src: 'data/Flow Data for Online Viz Version2.csv',
        dest: 'tmp/data.csv'
      }
    },
    compile: {
      main: {
        src: 'tmp/data.csv',
        dest: 'json/migrations.json'
      }
    },	
	
    filterStatAUmz: {
      main: {
        options: {
          countries: 'data/StatACountriesUmzAlle.csv'
        },
        src: 'data/StatAFlowDataUmzAlle.csv',
        dest: 'tmp/dataStatA_UmzAlle.csv'
      }
    },
    compileStatAUmz: {
      main: {
        src: 'tmp/dataStatA_UmzAlle.csv',
        dest: 'json/migrationsStatA_UmzAlle.json'
      }
    },
	
    filterStatAUmzCH: {
      main: {
        options: {
          countries: 'data/StatACountriesUmzSchweiz.csv'
        },
        src: 'data/StatAFlowDataUmzSchweiz.csv',
        dest: 'tmp/dataStatA_UmzSchweiz.csv'
      }
    },
    compileStatAUmzCH: {
      main: {
        src: 'tmp/dataStatA_UmzSchweiz.csv',
        dest: 'json/migrationsStatA_UmzSchweiz.json'
      }
    },	
	
    filterStatAUmzA: {
      main: {
        options: {
          countries: 'data/StatACountriesUmzAusland.csv'
        },
        src: 'data/StatAFlowDataUmzAusland.csv',
        dest: 'tmp/dataStatA_UmzAusland.csv'
      }
    },
    compileStatAUmzA: {
      main: {
        src: 'tmp/dataStatA_UmzAusland.csv',
        dest: 'json/migrationsStatA_UmzAusland.json'
      }
    },	
	
    filterStatAMigr: {
      main: {
        options: {
          countries: 'data/StatACountriesMigr.csv'
        },
        src: 'data/StatAFlowDataMigr.csv',
        dest: 'tmp/dataStatA_Migr.csv'
      }
    },
    compileStatAMigr: {
      main: {
        src: 'tmp/dataStatA_Migr.csv',
        dest: 'json/migrationsStatA_Migr.json'
      }
    },
	
		
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'javascripts/modernizr.js',
          'javascripts/d3.v3.min.js',
          'lib/countrymerge.js',
          'lib/layout.js',
          'lib/chord.js',
          'lib/timeline.js',
          'lib/chart.js'
        ],
        dest: 'dist/app-v1.js'
      },
      css: {
        options: {
          separator: '\n'
        },
        src: [
          'stylesheets/normalize.css',
          'stylesheets/styles.css'
        ],
        dest: 'dist/app-v1.css'
      }
    },
    uglify: {
      js: {
        files: {
        'dist/app-v1.min.js': ['dist/app-v1.js']
        }
      }
    },
    cssmin: {
      css: {
        src: 'dist/app-v1.css',
        dest: 'dist/app-v1.min.css'
      }
    },
    copy: {
      fonts: {
        files: [
          {
            expand: true,
            cwd: 'stylesheets/fonts/',
            src: ['*'],
            dest: 'dist/fonts',
            flatten: true
          }
        ]
      }
    },
    clean: ['tmp', 'json', 'dist']
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['concat', 'cssmin', 'uglify', 'copy']);
  grunt.registerTask('default', ['jshint', 'nodeunit', 'filter', 'compile', 'build']);
  grunt.registerTask('StatAMigr', ['jshint', 'nodeunit', 'filterStatAMigr', 'compileStatAMigr', 'build']);
  grunt.registerTask('StatAUmz', ['jshint', 'nodeunit', 'filterStatAUmz', 'compileStatAUmz', 'build']);
  grunt.registerTask('StatAUmzCH', ['jshint', 'nodeunit', 'filterStatAUmzCH', 'compileStatAUmzCH', 'build']);
  grunt.registerTask('StatAUmzA', ['jshint', 'nodeunit', 'filterStatAUmzA', 'compileStatAUmzA', 'build']);
};
