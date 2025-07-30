const papers = { 
 "data": [
  {
    "DOI":"10.1177\/30502225251357044",
    "Title":"A Serious Game \"DiaPed\": Impact on Therapeutic Education for Children with Type 1 Diabetes in Tunisia.",
    "Citations":27,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/54075",
    "Title":"Identifying Key Principles and Commonalities in Digital Serious Game Design Frameworks: Scoping Review.",
    "Citations":113,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/pcn.13804",
    "Title":"Predicting social anxiety disorder based on communication logs and social network data from a massively multiplayer online game: Using a graph neural network.",
    "Citations":62,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00484-024-02827-x",
    "Title":"Novel environmental variables help explain winter weather effects on activity and habitat selection of greater sage-grouse along the border of Colorado and Wyoming, USA.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/d41586-024-04205-4",
    "Title":"Skin in the game - locally made antibodies fight resident bacteria.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/ece3.70213",
    "Title":"Predator-specific mortality of sage-grouse nests based on predator DNA on eggshells.",
    "Citations":110,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10802-024-01259-w",
    "Title":"A Pilot Controlled Trial of Relaxation Training Combined with a Video Game Reinforcing Emotional Regulation to Improve Anger Management in Children and Adolescents.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/23779608241290683",
    "Title":"The Treasures of Renal Isle: Evaluating a Gamified Module While Enhancing Student Learning.",
    "Citations":9,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/acv.12899",
    "Title":"Beyond overlap: Considering habitat preference and fitness outcomes in the umbrella species concept.",
    "Citations":123,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/23779608241256998",
    "Title":"Using Gaming to Promote Vaccination Among Youth: A Systematic Review.",
    "Citations":46,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/2050313X241229859",
    "Title":"Repeated foreign body ingestion as a dynamic game: A case report.",
    "Citations":5,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/44029",
    "Title":"Testing a Behavioral Activation Gaming App for Depression During Pregnancy: Multimethod Pilot Study.",
    "Citations":54,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.7589\/JWD-D-22-00164",
    "Title":"Using Opportunistic Samples to Monitor West Nile Virus Infection Status in Greater Sage-grouse (Centrocercus urophasianus) in Wyoming, USA (2020-22).",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.mcpro.2023.100569",
    "Title":"An Inflection Point in Cancer Protein Biomarkers: What was and What's Next.",
    "Citations":139,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/mec.16960",
    "Title":"Ancient bears provide insights into Pleistocene ice age refugia in Southeast Alaska.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/ece3.9933",
    "Title":"Effects of large-scale disturbance on animal space use: Functional responses by greater sage-grouse after megafire.",
    "Citations":99,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/23779608231158158",
    "Title":"Prevalence and Risk Factors of Internet Gaming Disorder Under the COVID-19 Pandemic Among University Students in Macao.",
    "Citations":71,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/20503121221147842",
    "Title":"The relationship between playing video games on mobile devices and well-being in a sample of Japanese adolescents and adults.",
    "Citations":48,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/mec.16658",
    "Title":"Genetic drift drives rapid speciation of an Arctic insular endemic shrew (Sorex pribilofensis).",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1073\/pnas.2200016119",
    "Title":"Insights into bear evolution from a Pleistocene polar bear genome.",
    "Citations":66,
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
