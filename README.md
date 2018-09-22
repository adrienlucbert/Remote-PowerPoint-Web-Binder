# Remote PowerPoint Web Binder
## Library adding remote powerpoint controller support

### -- [ WORKING DEMO ] --
Working demo here : https://jsbin.com/pirova/edit?js,output

### -- [ CAUTION ] --
    
* tested with "MP power PRESENT-POINTER" https://goo.gl/vSzS5R
* **WARNINGS** : the use of remoteBinder disables page-up / page-down and f5 keys
    
### -- [ GETTING STARTED ] --
    
* copy this file in your website folders (at the root or in a folder)
* include this file in your web page with the following line
```
    <script type="text/javascript" src="remoteBinder.js"></script>
```
* make sure to give the correct path to the file in the src attribute

### -- [ HOW TO USE ] --

* function remoteBinder runs on page load with argument target = window (see window DOM element)
* custom events will be dispatched on remote buttons press :
    - previous button    : remoteprevious
    - next button        : remotenext
    - show/hide button   : remoteup
    - full screen button : remotedown
* to assign a function to an event, use the following syntax :
```
    window.addEventListener("event", function() {
        // instructions go here
    });
```
* make sure to replace event with the name of the event you want to bind

* **Exemple** :
```
    window.addEventListener("remoteprevious", function() {
        console.log("previous");
    });
    window.addEventListener("remotenext", function() {
        console.log("next");
    });
```

### -- [ CREDITS ] --
    
* Made by Adrien Lucbert
* http://adrien.lucbert.com
* This is an open-source project, feel free to use and/or modify it
