document.querySelector("#pencil").addEventListener("click", () => {
  document.querySelector("#all_items").textContent = "";
})

document.querySelector("#user_input").addEventListener("keydown", (event) => {
  if(event.key == "Enter")
    addItem();
});

addItem = () => {
  const item = document.createElement("h2")
  item.textContent = "- " + document.querySelector("#user_input").value;

  item.addEventListener("click", () => {
    if(item.style.textDecoration != "line-through")
      item.style.textDecoration = "line-through";
    else
      item.style.textDecoration = "none";
  })

  document.querySelector("#all_items").appendChild(item);
  document.querySelector("#user_input").value = "";
}
