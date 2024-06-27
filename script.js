function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  if (ev.toElement.children.length != 2) {
    if (ev.srcElement.lastChild.id == "her") {
      console.log(ev.toElement.id + " usko lights");
      //usko lights
      ev.toElement.classList.add("her");
      console.log(ev.srcElement.classList);
    }

    if (ev.srcElement.lastChild.id == "me") {
      ev.toElement.classList.add("me");
      console.log(ev.toElement.id + " mero lights");
    }
  } else {
    ev.toElement.classList.add("her");
    console.log(ev.toElement.id + " usko lights");
  }
}
