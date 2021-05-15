## ES6 Tutorial

Start the tutorial [here](http://ccoenraets.github.io/es6-tutorial).

Add support for Promise using polyfills
=======================================

Option 1: Use es6-promise

Step 1: npm install --save es6-promise 
Step2: and then import 'es6-promise/auto' at the top of the file that requires it
Step3: execute npm run webpack and launch the app, enjoy!

Option 1: Use core-js

Step1: npm install --save-dev core-js
Step2: add in the webpack.config.js file, in the entry section, beside the file that requires it (sample below)
sample:
entry: {
    ratefinder: ['core-js/es/promise','./js/ratefinder.js']
},

Importing Jquery using Webpack
==============================

Option 1: Import Jquery in the html page in the <script> tag

Option 2: Import Jquery in the Js modules with import statement

Option 3: Add the Jquery globally using webpack.ProvidePlugin
    
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ],

Webpack Call JS Function in HTML template
=========================================
Option 1: 
use function declaration window.<functionSignature>

Example:
window.getValue = () => {
    console.log("This function is called!");
}

Option 2:
use function declaration document.<functionSignature>

Example:
document.getValue = () => {
    console.log("This function is called!");
}

Option 3:
use eventListener with plain javascript or with jquery if added

Ewamples:
With plain javascript:
document.getElementById('calcBtn').addEventListener('click', () => {
    //Stuff here
});

With jquery:
$('#labelPrincipal').on('click',function() {
    getValue();
});

Webpack add support for Promise, Async, Await
=============================================
Install packages: 
npm install --save-dev babel-plugin-transform-async-to-generator
npm install --save-dev babel-polyfill

Add plugins config in .babelrc:
"plugins": [
    "transform-async-to-generator"
]

Add babel-polyfill in webpack.config.js:
entry: {
    app: ['babel-polyfill', './js/main.js']
}

