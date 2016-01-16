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
