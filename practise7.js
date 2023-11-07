// create element -> li
// id on li
// li append on container
// create element -> input
// id on input
// input append on li
// create element -> span
// id on span
// span append on li
// create element -> button
// id on button
// button append on li

//let ul = document.createElement("ul");
let index = 0;

function checkbox(ev) {
  console.log(ev.target.getAttribute("id"));
  let j = ev.target.getAttribute("id").slice(8);
  let spanid = `span${j}`;
  let dltid = `dltbtn${j}`;
  document.getElementById(spanid).style.textDecoration = "line-through";
  document.getElementById(dltid).style.display = "none";
}
function addInList() {
  index++;
  let v = document.getElementById("name").value;
  if (v === "") {
    alert("please enter value");
    //list.style.display = "none";
  } else {
    console.log(index);
    let list = document.createElement("li");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let button = document.createElement("button");
    let a = document.getElementById("name");
    list.id = `list-${index}`;
    //ul.appendChild(list);
    list.appendChild(input);
    list.appendChild(span);
    list.appendChild(button);
    document.getElementById("ulist").appendChild(list);
    input.setAttribute("type", "checkbox");
    input.setAttribute("placeholder", "Add a new task");
    input.setAttribute("class", "checkbox");
    input.id = `checkbox-${index}`;
    input.onclick = checkbox;
    button.onclick = dlt;

    //   input.addEventListener("click", checkbox);

    button.setAttribute("class", "dlt");
    button.id = `dltbtn-${index}`;
    span.innerHTML = a.value;
    span.id = `span-${index}`;
    button.innerHTML = "Delete";

    let i = document.getElementById("name");
    i.value = "";
    let key = index;
    let value = a.value;
    localStorage.setItem(key, value);
    if (key == 1) {
      localStorage.clear();
    }
  }
}
// function save() {
//   let key = index;
//   let value = a.value;
//   localStorage.setItem(key, value);
//   if (key == 1) {
//     localStorage.clear();
//   }
// }
function dlt(ev) {
  console.log(ev);
  let j = ev.target.getAttribute("id").slice(6);

  let listid = `list${j}`;
  console.log(listid);
  document.getElementById(listid).style.display = "none";
}
document.getElementById("addbtn").addEventListener("click", addInList);

let i = document.getElementById("name");
i.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    addInList();
  }
});
