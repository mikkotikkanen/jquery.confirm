jQuery plugin for simple confirmations
========

**jQuery plugin for having simple yes/no inputs from the user**



## Usage
```html

```html

## Options
```javascript
....
layoutMode: "perfectMasonry",
perfectMasonry: {
    layout: "vertical",      // Set layout as vertical/horizontal (default: vertical)
    columnWidth: 200,        // Set/prefer specific column width (liquid layout tries to prefer said width)
    rowHeight: 200,          // Set/prefer specific row height (liquid layout tries to prefer said height)
    
    liquid: true,            // Set layout as liquid (default: false)
    cols: 3,                 // Force to have x columns (default: null)
    rows: 3,                 // Force to have y rows (default: null)
    minCols: 3,              // Set min col count (default: 1)
    minRows: 3,              // Set min row count (default: 1)
    maxCols: 5,              // Set max col count (default: 9999)
    maxRows: 4               // Set max row count (default: 9999)
}
```



## Changelog

View the [commit history](https://github.com/zonear/isotope-perfectmasonry/commits/master) for a complete robust list of changes to the script.

+ **v1.0**
  [2013-07-25](https://github.com/zonear/isotope-perfectmasonry/commit/c6ee341a486e7b8688c6fb66dff2d079379c0932#jquery.isotope.perfectmasonry.js)
  - Public release
