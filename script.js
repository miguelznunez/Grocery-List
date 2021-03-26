const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("all-items");
const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function(){
  document.getElementById("all-items").innerHTML = "";
})

userInput.addEventListener("keydown", function(event){
  if(event.key == "Enter"){
    addItem();
  }
});

function addItem(){
  var h2 = document.createElement("h2")
  h2.innerHTML = "- " + userInput.value;

  h2.addEventListener("click", function(){
    h2.style.textDecoration = "line-through";
  })

  allItems.insertAdjacentElement("beforeend", h2);

  userInput.value = '';
}



