const papers = { 
 "data": [
  {
    "DOI":"10.1109\/TNNLS.2025.3567001",
    "Title":"UBG: An Unreal BattleGround Benchmark With Object-Aware Hierarchical Proximal Policy Optimization.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jflm.2025.102865",
    "Title":"Unidentified: Simulation-based education in forensic odontology.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.neunet.2025.107207",
    "Title":"U3UNet: An accurate and reliable segmentation model for forest fire monitoring based on UAV vision.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0308848",
    "Title":"DomeVR: Immersive virtual reality for primates and rodents.",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1101\/2023.12.08.570879",
    "Title":"Rendering protein structures inside cells at the atomic level with Unreal Engine.",
    "Citations":21,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/46398",
    "Title":"Design and Evaluation of Using Head-Mounted Virtual Reality for Learning Clinical Procedures: Mixed Methods Study.",
    "Citations":38,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0231152",
    "Title":"Accuracy and precision of stimulus timing and reaction times with Unreal Engine and SteamVR.",
    "Citations":53,
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
