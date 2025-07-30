const papers = { 
 "data": [
  {
    "DOI":"10.1186\/s12913-022-07801-0",
    "Title":"What is needed to sustain improvements in hospital practices post-COVID-19? a qualitative study of interprofessional dissonance in hospital infection prevention and control.",
    "Citations":65,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/curroncol29030158",
    "Title":"Novel, First-in-Human, Oral PCLX-001 Treatment in a Patient with Relapsed Diffuse Large B-Cell Lymphoma.",
    "Citations":6,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jhevol.2017.03.002",
    "Title":"The Howieson's Poort fauna from Sibudu Cave: Documenting continuity and change within Middle Stone Age industries.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/0363546513476265",
    "Title":"Video incident analysis of concussions in boys' high school lacrosse.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/0363546506293900",
    "Title":"Head, face, and eye injuries in scholastic and collegiate lacrosse: a 4-year prospective study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  }
]}
// The following is mostly copy and pasted (with thanks) from:
// https://medium.com/@rihab.beji099/transform-json-data-into-dynamic-html-tables-with-ease-c3ad579f6e59

// Function to generate the table
function generateTable(data) {
  if (!data || data.length === 0) return "No data available.";
  // Create the table element
  const table = document.createElement('table');
  
  // Generate table headers
  const headerRow = document.createElement('tr');
  const keys = Object.keys(data[0]); // Get keys from the first object
  keys.forEach(key => {
    if (key != 'DOI'){
    	const th = document.createElement('th');
    	th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize header
    	headerRow.appendChild(th);
    };
  });
  table.appendChild(headerRow);
  // Generate table rows
  data.forEach(item => {
    const row = document.createElement('tr');
    keys.forEach(key => {
      if (key != 'DOI'){
      	const td = document.createElement('td');
        td.textContent = item[key] || ""; // Fill empty fields with blank
        if (key === 'Title'){
          td.innerHTML = "<a href=https://doi.org/" + item['DOI'] + " target='_blank'>" + item[key] + "</a>";
        };
        row.appendChild(td);
      };
    table.appendChild(row);
    });
  });
  return table;
}
// Render the table
const container = document.getElementById('table-container');
const table = generateTable(papers.data);
if (table) container.appendChild(table);
