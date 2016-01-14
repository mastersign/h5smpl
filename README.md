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

* **dist** _Folder with files for distribution of the template_
    + `template.html` _HTML template file without content, linked to the default style_
    + `test.*.html` _HTML file for demonstration of the template_
    + **css** _Folder with CSS files of the template_
        - `reset.css`, `base.css` _For demonstration purpose only_
        - `style.*.css` _A specific style of the templates CSS_
        - `style.*.mini.css` _Minified version of a specific style of the templates CSS &ndash;_
          _The main result of this project_
* **src** _Folder with source files for the template_
    + **css** _Folder with LESS code files for CSS generation_
    + **html** _Folder with HTML content for template demonstration and usage_
    + **img** _Folder with demo images_
* `bower.json` _Bower component description file_
* `gulpfile.js` _Build automation with Gulp_
* `package.json` _Project description and NPM dependencies for the build process_

Styles
------

* **Default**
* **Metro**
* **Science**
* **Roboto**

License
-------

MIT