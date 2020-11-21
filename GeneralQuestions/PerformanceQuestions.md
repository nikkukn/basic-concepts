# Performance Questions

In this section I will cover questions related to Performance in a Frontend engineer interview

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

