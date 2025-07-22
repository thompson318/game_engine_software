// Function to generate the table
function generateTable(data) {
  if (!data || data.length === 0) return "No data available.";
  // Create the table element
  const table = document.createElement('table');
  
  // Generate table headers
  const headerRow = document.createElement('tr');
  const keys = Object.keys(data[0]); // Get keys from the first object
  keys.forEach(key => {
    const th = document.createElement('th');
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize header
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  // Generate table rows
  data.forEach(item => {
    const row = document.createElement('tr');
    keys.forEach(key => {
      const td = document.createElement('td');
      td.textContent = item[key] || ""; // Fill empty fields with blank
      if (key === 'pubmed url'){
	    console.log("setting ",  item[key]);
	    td.firstChild.outerHTML = "<a href=item[key] target='_blank'>PubMed</a>"; // this isn't working as I'd hope
      };
      row.appendChild(td);
    });
    table.appendChild(row);
  });
  return table;
}
// Render the table
const container = document.getElementById('table-container');
const table = generateTable(game_engines.data);
if (table) container.appendChild(table);
