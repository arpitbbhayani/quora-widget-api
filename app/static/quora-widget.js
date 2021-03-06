var WIDGET_HOST = "http://codeville.org.in";


function quora_widget(width, height, type, url, element) {
    var template = '<iframe width="' + width + '" height="' + height + '"'
                   + ' src="' + WIDGET_HOST + '/quoracard/process?url=' +
                   url + '" FRAMEBORDER=0></iframe>';
    element.innerHTML = template;
}

function quora_plain(url, element){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
            if(xmlhttp.status == 200){
                element.innerHTML = xmlhttp.responseText;
            }
            else if(xmlhttp.status == 400) {
                alert('There was an error 400')
            }
            else {
                alert('something else other than 200 was returned')
            }
        }
    }
    xmlhttp.open("GET", WIDGET_HOST + "/quoracard/process?url=" + url, true);
    xmlhttp.send();
}

window.addEventListener("DOMContentLoaded", function() {
    var quora_profile_elements = document.querySelectorAll("[quora-profile]");
    for(var i = 0; i < quora_profile_elements.length; i++) {
        var quora_profile_element = quora_profile_elements[i];
        var url = quora_profile_element.getAttribute('quora-profile');
        var load_iframe = quora_profile_element.getAttribute('iframe');
        var width = quora_profile_element.getAttribute('widget-width');
        var height = quora_profile_element.getAttribute('widget-height');
        var type = quora_profile_element.getAttribute('type');

        if(load_iframe && load_iframe == 'yes') {
            if(width == null) {
                if(type=='card') { width = '400px'; }
            }
            if(height == null) {
                if(type=='card') { height = '300px'; }
            }
            quora_widget(width, height, type, url, quora_profile_element);
        }
        else {
            quora_plain(url, quora_profile_element);
        }
    }
}, false);
