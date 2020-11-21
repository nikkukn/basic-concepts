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

## What are some ways you may improve your website’s scrolling performance?


Whenever you scroll we need to draw attention towards the screen. This means the opportunity to minimize the work the browser has to do to get everything drawn, and by extension maximize page performance.

### Specifics of scrolling.
The browser takes a look at your DOM and finds things that it thinks will look the same when you scroll. It groups these elements together and takes a picture of them, which is called a layer. Each of these layers needs to be painted and rasterized to a texture and then composited together to the image that you see on the screen.
Whenever we scroll a page the browser will paint some of the pixels in those layers. **By grouping things into layers we need to update that specific layer texture when something inside the specific layer has changed and we can only paint that part of the layer that has been damaged**. We can see the paint rectangles and we should find the smallest rectangle to compare.  **Less the number of repeating elements in the scroll vertically and horizontally less will be the repainting**. Like the menu when disabled from scrolling vertically will increase the painting speed. Changes in css styles can sometimes improve the performance of your app.

The amount by which the browser has to rescale images and the frequency with which it has to do this is going to affect your page's performance as this happens on main browser.

Things that impact scrolling are:
* Expensive styles 
* Reflows and repaints 
* Failing to debouncing your scroll events.

#### Expensive styles 
All the styles are created equal, some effects like box-shadow are particularly expensive from rendering point of view.

#### Reflows and Repaints 
Whenever you request `offsetTop` property of an element in JavaScript you immediately give the browser a lot of work has as it now has to go off and the layout the page so it can give you the correct answer. If another property styles are calculated on the basis of offsetTop the element needs to be repainted. This becomes a problem when this is applied to collection of elements.

#### Debouncing Scroll Events
The major problem here is that the scroll events are not timed to the visual updates of the browser, i.e. in a `requestAnimationFrame` callback, so you run the risk of performing multiple updates inside a single render frame. To solve this problem you need to debounce your scroll events. You do this by simply storing the last scroll value in a variable whenever you receive a scroll event, and then you perform your visual updates in a `requestAnimationFrame`, making use of the last known value. This means that the browser can schedule the visual updates at the correct time, and we did no more work than was absolutely necessary inside each frame.

