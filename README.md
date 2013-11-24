jQuery plugin for simple confirmations
========

**jQuery plugin for having simple yes/no inputs from the user**



## Usage
```html
<button id="btn1" data-confirm="Are you sure you want to do this?">Confirm #1</button>
```

```javascript
$('#btn1').confirm(function() {
	// User confirmed, do something
});
```

