function newItem(){
  //  Adding a new item to the list of items:
  let inputValue = $('#input').val();
  let li = $('<li></li>');
  let list = $('#list');

  if (inputValue === '') {
      alert('You must write something!');
    } else{
      li.text(inputValue);

      
      list.append(li);
    }

    // Crossing out an item from the list of items:
  function crossOut() {
      li.toggleClass('strike');
    }

    li.on('dblclick', crossOut);

     //  Adding the delete button:
  let crossOutButton = $('<button></button>');
  crossOutButton.text('X');
  crossOutButton.on('click', deleteListItem);
  li.append(crossOutButton);

  // Adding delete items function and delete class
  function deleteListItem() {
      li.addClass('delete');
    }

  //   Method to change order of list items
   $('#list').sortable();

}