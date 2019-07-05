const tablebody = document.querySelector('tbody');
const input = document.querySelector('#search');
const dropdown = document.querySelector('.dropdown-menu');

let dataset = data;

// ADD EVENT LISTENER

dropdown.addEventListener('click', element => {
  // searchdata(element);
  const searchInput = input.value.trim().toLowerCase();
  const button = element.target;
  console.log(button);
  let searchField = button.innerText.toLowerCase();
  console.log(searchField);
  dataset = data.filter(dataObj => {
    let filterSighting = dataObj[searchField].trim().toLowerCase();
    return filterSighting == searchInput;
  });
  buildTable();
});

// Build table upon initial page load.
function buildTable() {
  tablebody.innerHTML = "";
   //Iterate through dataset insterting rows.
  for (let i=0; i<dataset.length;i++){
    let sighting = dataset[i];  // Set 'sighting' to the current object of the loops iteration through dataset
    let sighting_key = Object.keys(sighting); // keys of each sighting correspond to table columns created in index.html
    console.log(sighting_key);
    
    // this declared item will be used to create a cell w/ value for ea key:value in dataset

    // insert row for each sighting;
    let row = tablebody.insertRow(i);

    // For each key create a new cell.
    for (let j = 0; j< sighting_key.length; j++) {
      let key = sighting_key[j]; // store the key string so we can access the value for the current object of the outer for loop.
      let cell = row.insertCell(j); // insert cell indexed
      cell.innerText = sighting[key]; //the current 'sighting' of the outer for loop has a value accessed by 'key' . set cell value to key's value
    };
  };
};

//  the element it accepts is a dropdown item.
function searchdata(element) {
  const searchInput = input.value.trim().toLowerCase(); //grab input value
  const button = element.target; // grab the button that was clicked
  console.log(button);
  let searchField = button.value; // set the field to search search within to the value of the button.
  console.log(searchField);
  dataset = data.filter(dataObj => {
    let filterResult = dataObj[searchField].toLowerCase;  // iter the dataset, grab the value of current obj for the specific field used as search criteria
    return filterResult === searchInput; // if the reults match the query string, add that current obj to the new list of objects
  });
  buildTable(); // build new table with the filtered list of objects
}

buildTable();
