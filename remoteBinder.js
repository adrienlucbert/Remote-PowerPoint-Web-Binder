/* ---[ Library adding remote powerpoint controller support ]---
    Github link : https://github.com/adrienlucbert/Remote-PowerPoint-Web-Binder
*/

(function remoteBinder(target) {
    var remoteprevious = new Event("remoteprevious"),
        remotenext = new Event("remotenext"),
        remoteup = new Event("remoteup"),
        remotedown = new Event("remotedown");

    target.onkeydown = function(e) {
        switch(e.which) {
            case 66 : // b handler
                // dispatch event for show/hide button
                target.dispatchEvent(remoteup);
                break;
            case 116 : // f5 handler
                // prevent default page reload
                e = e || window.event;
                if (e.preventDefault)
                    e.preventDefault();
                e.returnValue = false;
                // dispatch event for full screen button
                target.dispatchEvent(remotedown);
                break;
            case 33 : // page up handler (previous)
                // prevent default scroll
                e = e || window.event;
                if (e.preventDefault)
                    e.preventDefault();
                e.returnValue = false;
                // dispatch event for previous button
                target.dispatchEvent(remoteprevious);
                break;
            case 34 : // page down handler (next)
                // prevent default scroll
                e = e || window.event;
                if (e.preventDefault)
                    e.preventDefault();
                e.returnValue = false;
                // dispatch event for next button
                target.dispatchEvent(remotenext);
                break;
        }
    }
})(window);