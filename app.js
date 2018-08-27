// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = document.querySelector("tbody");
var datetimeInput = document.querySelector("#datetime");
var cityInput = document.querySelector("#city");
var stateInput = document.querySelector("#state");
var countryInput = document.querySelector("#country");
var shapeInput = document.querySelector("#shape");
var commentsInput = document.querySelector("#comments");
var searchBtn = document.querySelector("#search");
var submitBtn = document.querySelector("#submit");
var resetBtn = document.querySelector("#reset");

// Add an event listener
searchBtn.addEventListener("click", handleSearchButtonClick);
submitBtn.addEventListener("click", handleSubmitButtonClick);
resetBtn.addEventListener("click", handleResetButtonClick);

// Set filteredData to dataSet initially
var filteredDataSet = dataSet;

// renderTable
function renderTable() {
  tbody.innerHTML = "";
  console.log("render is happening")

  for (var i = 0; i < filteredDataSet.length; i++) {
    var data = filteredDataSet[i];
    var fields = Object.keys(data);

    // Create a new row in the body
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = data[field];
    }
  }
}


function handleResetButtonClick() {
   // Clear
   datetimeInput.value = "";
   cityInput.value = "";
   stateInput.value = "";
   countryInput.value = "";
   shapeInput.value = "";
   commentsInput.value = "";
}

function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}
// Render the table
renderTable();