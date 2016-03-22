log-this
=========

A small library providing methods for logging

## Installation

  npm install log-this --save

## Usage
	
  ```js
   var log_this = require('log-this');

   log_this.log('This will appear in white');
   // Output: [DD/MM/YYYY HH:MM:SS] : This will appear in white

   log_this.debug('This will appear in yellow');
   // Output: [DD/MM/YYYY HH:MM:SS] : This will appear in yellow
  
   log_this.error('This will appear in red');
   // Output: [DD/MM/YYYY HH:MM:SS] : This will appear in red

  ```
  


## Release History

* 0.1.0 Initial release
