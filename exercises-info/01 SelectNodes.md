# Selecting a Node and a NodeList #

```HTML
<!-- body contents -->
<div id="container" class="items-container">
  <div class="item">Item One</div>
  <div class="item">Item Two</div>
  <div class="item">Item Three</div>
</div>
```

The most often used methods to retrieve the item/items from the DOM are the getElementById(), querySelector(), querySelectorAll()

## getElementById('id') ##

Due to the fact that every ID within one page must be unique this method returns a single Node with the id attribute value equal to the id asked. It returns `null` in case there is no element with such id in the document.

```JS
// Select the div of id 'container'
const item = document.getElementById('container');

// Change the color of font to red inside the div
item.style.color = 'red';

// Log the object-like data structure of classes assigned to the element
console.log(item.classList);

// Change a property of the first child Node (item) of the container Node
item.children[0].innerText = 'I have changed!';

// Add a new child to the children list of the container Node
// Create an element first, add class and innerText values
const newChild = document.createElement('div');
newChild.classList.add('item');
newChild.innerText = 'Item Four';

// Add the created element to the item
item.append(newChild);
```

## querySelector('#id' || '.className') ##

This method returns the FIRST element in the DOM with the class name or id name asked. All others will be ignored. The class/id name is passed as an argument of string with a period symbol in case of class (`.class-name`) or with a hash in case of id (`#id-name`). It returns the same element as getElementById(id) in case id was passed as an argument.

```JS
// Select the div of class '.items-container'
const item = document.querySelector('.items-container');

// Change the color of the font to red inside the div
item.style.color = 'red';

// Log the object-like data structure of classes assigned to the element
console.log(item.classList);

// Change a property of the child Node (item)
item.children[0].innerText = 'I have changed!';

// Add a new child to the children of the Node
// Create an element first, adding class and innerText
const newChild = document.createElement('div');
newChild.classList.add('item');
newChild.innerText = 'Item Four';

// Add the created child to the item
item.append(newChild);
```

## querySelectorAll('#id' || '.className') ##

This method returns the list (NodeList) of all the elements in the DOM with the class name passed as the argument. Due to the fact that the id values must be unique within a document it will return a list of a single element when id name is passed as an argument. The node list is not an object-like structure, but it does NOT have access to all the array/object methods.

```JS
// Get the list of all the div elements of class 'item'
const NodeList = document.querySelectorAll('.item');

// Iterate through all the items of the list and set the color CSS property
// for every list item
NodeList.forEach((item) => item.style.color = 'yellow')

// Create an array from the NodeList to apply array methods, like sort()
const newArr = Array.from(NodeList);

// Update the array items order and put back into node of id 'container'
// Cut the item number two
const deleted = newArr.splice(1, 1);
// Push it to the end of array
newArr.push(deleted[0]);
// Grab the node of id 'Container'
const container = document.getElementById('container');
// Iterate through the array of items and add children to the 
// container Node with a new order of items
newArr.forEach((item) => {
  container.appendChild(item);
});
```


## getElementsByClassName('className') ##

This method returns the live HTML Collection (object-like structure) of all the elements found in the DOM with the class name passed as the argument. 

```JS
// Get the list of all the Nodes of class 'item'
const HTMLCollection = document.getElementsByClassName('item');

// Create an array from the HTML Collection
const newArr = Array.from(HTMLCollection);

// Sort the items in 'desc' or 'Z-A' direction
newArr.sort((a, b) => {
  if (a.id < b.id) return 1;
  else if (a.id > b.id) return -1;
  else return 0;
});

// Gran the Node of 'container' id
// Iterate through the array of items and Add the items 
// into the Node of id 'container' with a new sorted order
const container = document.getElementById('container');
newArr.forEach((item) => {
  container.append(item);
})

```


## Sources ##

* What are Nodes and NodeLists
  * [DOM Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * [DOM NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
* Getting a Node by id or class name
  * [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
  * [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
* Getting a NodeList
  * [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
* Getting a Live HTML Collection
  * [getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
