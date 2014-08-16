#jQuery One Click Outside

jQuery.oneClickOutside is a lightweight jQuery plugin (1kb) that let's you add a one-time callback to any element that gets called if the user clicks outside of the element. After that all event listeners are automatically removed and the plugin instance is destroyed.

Click [here](http://christianvoigt.github.io/jquery-one-click-outside/demo/) for a demo.

Download the [production version][min] (_minified_) or the [development version][max].

[min]: https://raw.githubusercontent.com/christianvoigt/jquery-one-click-outside/master/dist/jquery.key-selection.min.js
[max]: https://raw.githubusercontent.com/christianvoigt/jquery-one-click-outside/master/dist/jquery.key-selection.js


##basic use

```javascript
    $(".some-element").oneClickOutside(function(){
    	$(".some-element").hide();
    });
```

If you decide that you want to cancel the callback, use the "off" method:

```javascript
    $(".some-element").oneClickOutside("off");
```

##license

The MIT License (MIT)

Copyright (c) 2014 Christian Voigt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.