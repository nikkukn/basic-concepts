# Performance Questions

In this section I will cover questions related to Performance in a Frontend engineer interview


## What tools would you use to find a performance bug in your code?
You can leverage the DevTools they provide amazing features to debug your HTML, CSS, network calls and DOM separately.

* Modify HTML tags by editing 
* You can add the styles manually. There is a box model associated with each element where you can find the css attached to element with perfect pixels measurements.
* You can view the DOM related properties under the Properties tab. You can view all the DOM related information about an element. In this you can find elements information related to one another within the DOM tree.
* We can run Jquery and javascript  from console to make changes to our page.
* Sources tab have all the files loaded that make the web page that we see. In this sections you modify the whole document that you see.
* Breakpoints help you in stoping and resuming your code execution. It is a handy way of debugging your code.
* The Network tab helps to see the HTTP headers, timing data associated with each item loaded on the page and more.
* Screenshots are the most obvious checkbox available to you. It provides info like displaying information about JS, CSS loading and about the use of computer memory.
* Profiles tab measures the advanced information about usage and memory issues in the app. It has three parts first is CPU profiler which measures javascript execution time. Second is heap profiler which shows memory distribution for Javascript objects and DOM nodes.  Record heap allocations which show javascript object allocations.
* Heap snapshots helps in the following ways. It displays all the objects in the memory. If you made two profile you can compare them here ( this can be used to check difference between and after code changes). Tree view to see parents and children. A graph that represents what type of data takes up memory.
* Record Heaps helps in recording memory allocations over the span of time to identify memory leaks.
* Record heap shows memory allocation in time frame whereas heap snapshot does it in general.
* The difference between local storage and session storage is the lifetime of information. The local storage has no defined lifetime and will stick around even after closing the window
* Security tab helps us to get info about whether your website is secure or not. HTTPs means that you are a secure version of HTTP.
