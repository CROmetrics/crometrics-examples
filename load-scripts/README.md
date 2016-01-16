# Load Scripts #

You will sooner are later (probably sooner) come across an AngularJS or similar application.  Elements will not be available to you on page load and you will be scratching your head.  Luckily our own Eric wroteUsing onMutate to Make Changes to Dynamic Content (onMutate is an internal tool created by Eric to tackle the issue of selecting dynamic content (such as those in Angular or other SPA sites) within the constraints of Optimizely's variation code.) that will detect when an element is created.  Yes take time to understand the code.  In the meantime, copy this code chunk into the top of your variation code and keep your flow going.

```js
/* _optimizely_evaluate=force */
var loadScript = function(location, callback) {
    var fileRef = document.createElement('script');
    fileRef.setAttribute('type', 'text/javascript');
    if (callback) {
        if (fileRef.readyState) { // IE
            fileRef.onreadystatechange = function() {
                if (fileRef.readyState == 'loaded' || fileRef.readyState == 'complete') {
                    fileRef.onreadystatechange = null;
                    callback();
                }
            };
        } else { // Non-IE
            fileRef.onload = function() {
                callback();
            };
        }
    }
    fileRef.setAttribute('src', location);
    document.head.appendChild(fileRef);
};
loadScript('https://d1tvvvm2zy17cz.cloudfront.net/js/jquery.oncreate.min.js', function() {
    // Edit here
    $(function() {
        window.$.onCreate('#sample_id_element', exampleFunction);
    });
});

function exampleFunction(sample_id_element) {
    // Your element is present.  Let the magic happen baby!
}
/* _optimizely_evaluate=safe */
```
