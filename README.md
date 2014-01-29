jQuery plugin for simple confirmations
========

**jQuery plugin for having simple yes/no confirms**


## Usage
```html
<button id="btn1">Confirm #1 (Default message)</button>
```

```javascript
$('#btn1').confirm(function() {
	// User confirmed, do something
});
$('#btn1').on('confirm', function() {
	// User confirmed, do something
});
```

You can set custom messages with `data-confirm` property.
```html
<button id="btn2" data-confirm="Button 2 - Are you sure?">Confirm #2 (Custom message)</button>
```

jQuery.confirm can also be used directly from Javascript:
```javascript
$.confirm('Are you really sure you want to do this?', function() {
	// User confirmed, do something
});
```