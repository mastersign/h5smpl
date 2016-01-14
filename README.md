H5smpl
======

pronounced _"hive sample"_ IPA: **haɪvˈsæm.pəl**

This project is an evolving template for a 
[responsive](http://en.wikipedia.org/wiki/Responsive_web_design) 
[HTML5](http://de.wikipedia.org/wiki/HTML5) page.
It can be used for various means, from creating static websites,
over building a CMS template, to using it in documentation tools like 
[pandoc](http://johnmacfarlane.net/pandoc/).

Structure
---------

* **dist** Folder with files for distribution of the template
    + `template.html` HTML template file without content, linked to the default style
    + `test.*.html` HTML files for demonstration of the template
    + **css** Folder with CSS files of the template
        - `reset.css`, `base.css` For demonstration purpose only
        - `style.*.css` The different styles of the templates CSS
        - `style.*.mini.css` Minified versions of the different styles of the templates CSS &ndash;
          The final output of this project
* **src** Folder with source files for the template
    + **css** Folder with LESS code files for CSS generation
    + **html** Folder with HTML content for template demonstration and usage
    + **img** Folder with demo images
* `bower.json` Bower component description file
* `gulpfile.js` Build automation with Gulp
* `package.json` Project description and NPM dependencies for the build process

Styles
------

* **Default**
* **Metro**
* **Science**
* **Roboto**

License
-------

MIT