var firstList = document.getElementById('one');

// ADD NEW ITEM TO END OF LIST
var li = document.createElement('li');
li.appendChild(document.createTextNode('cream'));
firstList.parentNode .appendChild(li);

// ADD NEW ITEM START OF LIST
li = document.createElement('li');
li.appendChild(document.createTextNode('kale'));
firstList.parentNode.insertBefore(li, firstList);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
lists = document.getElementsByTagName('li');
for (var i = 0; i < lists.length; i++) {
  lists[i].className += 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
h2 = document.getElementsByTagName('h2')[0];
console.log(h2);
span = document.createElement('span');
span.appendChild(document.createTextNode(lists.length));
h2.appendChild(span);
