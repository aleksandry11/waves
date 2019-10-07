## Installation

1. Install dependencies with NPM or Yarn

        npm install
    or
    
        yarn
        

2. Run webpack to start the project

        npm start

## Usage

##### Html
Create canvas
```html
        <canvas></canvas>
```     
##### JS
Instantiate `Waves` object, and pass selected canvas as first parameter.
```javascript
        const canvas = document.querySelector('canvas');
        
        const waves = new Waves(canvas);
```     
To open GUI set the second parameter to `true`:
```javascript
        const waves = new Waves(canvas, true);
```     


