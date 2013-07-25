h5smpl
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

* **css** _Aolder with all CSS files for the template_
    + `reset.css` _Reset stylesheet, for creating a identical starting point in all browsers_
    + `base.css` _Layout-independent styles for the HTML elements_
    + `layout.css` _Styles for the responsible layout_
* **img** _A folder with image resources for the example HTML files_
* `template.html` _Empty HTML skeleton referencing the CSS files_
* `test.reset.html` _Example page, only referencing the reset stylesheet_
* `test.base.html` _Example page, referencing the reset and base stylesheet_
* `test.layout.html` _Example page, referencing all stylesheets_
* `test.mini.html` _Minimal example page, referencing all stylesheets_
