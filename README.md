## ES6 Tutorial

Start the tutorial [here](http://ccoenraets.github.io/es6-tutorial).

Add support for Promise using polyfills

Option 1: Use es6-promise

Step 1: npm install -save es6-promise 
Step2: and then import 'es6-promise/auto' at the top of the file that requires it
Step3: execute npm run webpack and launch the app, enjoy!

Option 1: Use core-js

Step1: npm install --save-dev core-js
Step2: add in the webpack.config.js file, in the entry section, beside the file that requires it (sample below)
sample:
entry: {
    ratefinder: ['core-js/es/promise','./js/ratefinder.js']
},
