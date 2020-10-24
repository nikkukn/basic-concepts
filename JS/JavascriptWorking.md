# How Javascript works ?

The javascript we writes alllows us to interact with the browser. Understanding the environment, how it works and what it is compose of will allow you to build better apps.

The browser main components are:
1. User Interface: This includes the top action bar which has forward, backwrad buttons, bookmarking, menu etc.

2. Rendering Engine: It handles the interaction between user interface and rendering engine.

3. Browser Engine: It is responsible for displaying the web page. The rendering engine parses the HTML and CSS and displays the parsed content on the screen.

4. Networking: These are network calls such as XHR requests, made by using different implementation for the different platforms which are behind platform independent interface.

5. UI backend: It is used for drawing core widgets and checkboxes and windows.

6. Javascript Engine

7. Data persistance: The supported storage meachanisms are localStorage, indexDB, WebSQL and FileSystem


## Rendering Engine.
The rednering engine recieves the content of requested documents from the networking layer.

Parsing the HTML to construct DOM Tree --> Conrtuct the rendering tree --> Layout of the render tree --> Prasing the render tree.


## Constructing the DOM tree
1. The first step of rendering engine is to by parse the HTML Document and converting the parsed element to actual DOM nodes in a DOM tree.

2. Each element is the parent node to all the elements which are directly contained inside of it.

3. CSSOM refers to CSS Object Model. Whenever any element styles are applied to it from teh exeternal link the browser dispatches the request to fetch and render it.

4. The CSSOM have a tree structure beacuse the browser start with the most general rule applicable to that node and then recursively refines the computed styles by applying more specific rules.

5. The tree is a visual elements constructed in order in which they will be displayed on the screen. It is the visual representation of the HTML along with the CSS. The purpose of this tree is to enable painting the contents in their correct order.

6. Starting at the root of the DOM tree, it traverses each visible node. Some nodes are not visible (for example, script tags, meta tags, and so on), and are omitted since they are not reflected in the rendered output.

7. For each visible node, the browser finds the appropriate matching CSSOM rules and applies them.

8. It emits visible nodes with content and their computed styles


## Optimizing the rendering performance.

1. JavaScript — in previous posts we covered the topic of writing optimized code that doesn’t block the UI, is memory efficient, etc. When it comes to rendering, we need to think about the way your JavaScript code will interact with the DOM elements on the page. JavaScript can create lots of changes in the UI, especially in SPAs.

2. Style calculations — this is the process of determining which CSS rule applies to which element based on matching selectors. Once the rules are defined, they are applied and the final styles for each element are calculated.

3. Layout — once the browser knows which rules apply to an element, it can begin to calculate how much space the latter takes up and where it is located on the browser screen. The web’s layout model defines that one element can affect others. For example, the width of the <body> can affect the width of its children and so on. This all means that the layout process is computationally intensive. The drawing is done in multiple layers.

4. Paint — this is where the actual pixels are being filled. The process includes drawing out text, colors, images, borders, shadows, etc. — every visual part of each element.

5. Compositing — since the page parts were drawn into potentially multiple layers they need to be drawn onto the screen in the correct order so that the page renders properly. This is very important, especially for overlapping elements.


# Optimizing your JavaScript

1. Avoid setTimeout or setInterval for visual updates. These will invoke the callback at some point in the frame, possible right at the end. 


2. Move long-running JavaScript computations to Web Workers.

3. Use micro-tasks to introduce DOM changes over several frames. This is in case the tasks need access to the DOM, which is not accessible by Web Workers. This basically means that you’d break up a big task into smaller ones and run them inside requestAnimationFrame , setTimeout, setInterval depending on the nature of the task.


## Optimize your CSS.

1. Reduce the complexity of your selectors. Selector complexity can take more than 50% of the time needed to calculate the styles for an element, compared to the rest of the work which is constructing the style itself.


2. Reduce the number of elements on which style calculation must happen. In essence, make style changes to a few elements directly rather than invalidating the page as a whole.


## Optimize your layout 

1. Reduce the number of layouts whenever possible. When you change styles the browser checks to see if any of the changes require the layout to be re-calculated. Changes to properties such as width, height, left, top, and in general, properties related to geometry, require layout. So, avoid changing them as much as possible.


2. Use flexbox over older layout models whenever possible. It works faster and can create a huge performance advantage for your app.

3. Avoid forced synchronous layouts. The thing to keep in mind is that while JavaScript runs, all the old layout values from the previous frame are known and available for you to query. If you access box.offsetHeight it won’t be an issue. If you, however, change the styles of the box before it’s accessed (e.g. by dynamically adding some CSS class to the element), the browser will have to first apply the style change and then run the layout. This can be very time-consuming and resource-intensive, so avoid it whenever possible.


## Optimize the paint 

1. Changing any property other than transforms or opacity triggers a paint. Use it sparingly.

2. If you trigger a layout, you will also trigger a paint, since changing the geometry results in a visual change of the element.

3. Reduce paint areas through layer promotion and orchestration of animations.