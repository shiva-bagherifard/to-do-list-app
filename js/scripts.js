function newItem() {
    //1. Adding a new item to the list of items:
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);
  
    inputValue === "" ? alert("You must write something") : $("#list").append(li);
  
    //2. Crossing out an item from the list of items:
    function crossOut() {
      li.toggleClass("strike");
    }
  
    li.on("dblclick", crossOut);
  
    //3(i). Adding the delete button "X":
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);
  
    function deleteListItem() {
      li.addClass("delete");
    }
  
    crossOutButton.on("click", deleteListItem);
  
    $("#list").sortable();
  }