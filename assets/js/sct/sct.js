let shipLists = Array.from(document.getElementsByClassName("ship-list"));
let namesLine = Array.from(document.getElementsByClassName("names")[0].children);
let imagesLine = Array.from(document.getElementsByClassName("images")[0].children);
let statsLines = Array.from(document.getElementsByClassName("stats")[0].children);

shipLists.forEach((shipList) => {
  names.forEach((name, index) => {
    let option = document.createElement("option");
    option.appendChild(document.createTextNode(name));
    option.setAttribute("value", index);
    shipList.appendChild(option);
  });

  shipList.addEventListener("change", () => {
    let value = shipList.options[shipList.selectedIndex].value;
    let selectIndex = shipList.getAttribute("data-index");

    let name = namesLine[parseInt(selectIndex) + 1];
    let image = imagesLine[parseInt(selectIndex) + 1].children[0];

    if (value == "none") {
      name.classList.remove("show");
      image.classList.remove("show");
      statsLines.forEach((line) => {
        line.children[parseInt(selectIndex) + 1].classList.remove("show");
      });
    } else {
      name.textContent = names[value];
      name.classList.add("show");

      image.src = links[value];
      image.classList.add("show");

      stats[value].forEach((stat, index) => {
        statsLines[index].children[parseInt(selectIndex) + 1].textContent = stat;
      });

      statsLines.forEach((line) => {
        line.children[parseInt(selectIndex) + 1].classList.add("show");
      });
    }
  });
});

statsLines.forEach((line) => {
  let columns = Array.from(line.children);
  columns.forEach((column) => {
    column.onmouseover = () => {
      columns.forEach((column) => {
        column.classList.add("selected");
      });
    };
    column.onmouseout = () => {
      columns.forEach((column) => {
        column.classList.remove("selected");
      });
    };
  });
});
