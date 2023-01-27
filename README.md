Event delegation is a technique in JavaScript that allows you to add event listeners to a parent element, rather than adding them to each individual child element. This technique can be useful when you have a large number of elements that need to respond to the same event, or when the elements are added or removed dynamically.

The basic idea behind event delegation is that you attach a single event listener to a parent element, and then use the event object's target property to determine which child element was actually clicked. This way, you only need to add one event listener to the parent element, rather than adding one to each child element.

Here is an example of how event delegation can be used to handle clicks on a list of elements:

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  var list = document.getElementById("list");
  list.addEventListener("click", function(event) {
    if (event.target && event.target.nodeName == "LI") {
      console.log("List item clicked: " + event.target.innerHTML);
    }
  });
</script>

In this example, an event listener is added to the parent ul element, and when a user clicks on one of the child li elements, the event's target property is checked to see if it is an li element. If it is, the text content of the li element is logged to the console.

Event delegation allows you to handle events on multiple elements using a single listener, which can be more efficient and less prone to bugs. Additionally, it allows you to handle events on elements that are added or removed dynamically without having to add or remove event listeners.

In addition to event.target you can also use event.currentTarget to determine the element that the event listener is attached to.

#How does event delegation work?

Event delegation makes use of two features of JavaScript events: event bubbling and the target element. When an event is triggered on an element, for example a mouse click on a button, the same event is also triggered on all of that element’s ancestors. This process is known as event bubbling. So in other words, When an event is fired from an element, the event will be bubbled up to its parent nodes.

The event bubbles up from the originating element to the top of the DOM tree. The target element of any event is the originating element, the button in our example, and is stored in a property of the event object. The 'target', stays the same in the event object. Using event delegation it’s possible to add an event handler to an element, wait for an event to bubble up from a child element and easily determine from which element the event originated.

Using the target property, we can always keep track which element actually causes an event captured by its parent, and it can help us reduce the number of event handlers as we sometimes don't need to add event listeners for every element.

#What is the Event Propagation?

Let’s start with event propagation. This is the blanket term for both event bubbling and event capturing. Consider the typical markup to build a list of linked images, for a thumbnails gallery for example:

<ul>
    <li><a href="..."><img src="..." alt=""></a>
    <li><a href="..."><img src="..." alt=""></a>
    ...
    <li><a href="..."><img src="..." alt=""></a>
</ul>
A click on an image does not only generate a click event for the corresponding IMG element, but also for the parent A, for the grandfather LI and so on, going all the way up through all the element’s ancestors, before terminating at the window object.

In DOM terminology, the image is the event target, the innermost element over which the click originated. The event target, plus its ancestors, from its parent up through to the window object, form a branch in the DOM tree. For example, in the image gallery, this branch will be composed of the nodes: IMG, A, LI, UL, BODY, HTML, document, window.

Note that window is not actually a DOM node but it implements the EventTarget interface, so, for simplicity, we are handling it like it was the parent node of the document object.

This branch is important because it is the path along which the events propagate (or flow). This propagation is the process of calling all the listeners for the given event type, attached to the nodes on the branch. Each listener will be called with an event object that gathers information relevant to the event

Remember that several listeners can be registered on a node for the same event type. When the propagation reaches one such node, listeners are invoked in the order of their registration.

It should also be noted that the branch determination is static, that is, it is established at the initial dispatch of the event. Tree modifications occurring during event processing will be ignored.

The propagation is bidirectional, from the window to the event target and back. This propagation can be divided into three phases:

From the window to the event target parent: this is the capture phase The event target itself: this is the target phase From the event target parent back to the window: the bubble phase

########################################################

Event propagation is the order in which events are handled in the Document Object Model (DOM). When an event occurs on an element in the DOM, it first triggers the event on that element, and then bubbles up through its parent elements, triggering the event on each parent element until it reaches the top of the DOM tree.

There are two types of event propagation:

Bubbling: This is the default event propagation method in JavaScript, where the event starts on the innermost element and bubbles up to the outermost element.

Capturing: This method is less commonly used, and it starts with the outermost element and works its way down to the innermost element.

For example, when a user clicks on a button inside a div that is inside a form, the click event will first be handled by the button, then by the div, and finally by the form. This is an example of bubbling event propagation.

You can use the event.stopPropagation() method to stop the event from propagating to parent elements.
You can also use the event.stopImmediatePropagation() method to stop the event from propagating to any other listeners on the same element.

You can also specify the propagation method when adding an event listener by using addEventListener method and passing in the third argument as true for capturing and false for bubbling.

It is important to understand event propagation when working with events in JavaScript, as it can affect how an event is handled and can lead to unexpected behavior if not handled correctly.
[label](image/Event%20Bubbling%20and%20Event%20Catching%20in%20JavaScript%20and%20React.pngF:/Interview-Prepared/JS/event-delegation/README.md)
