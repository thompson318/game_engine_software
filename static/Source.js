const papers = { 
 "data": [
  {
    "DOI":"doi not found",
    "Title":"Evaluation of Game Engines for Cross-Platform Development of Mobile Serious Games for Health.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s44271-025-00292-9",
    "Title":"Effortful leisure is a source of meaning in everyday life.",
    "Citations":136,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/ece3.71573",
    "Title":"Faeces, Feathers and Flight: Understanding of Escape Behaviour in Incubating Eurasian Woodcocks (Scolopax\u00a0rusticola).",
    "Citations":50,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1126\/scirobotics.adt3093",
    "Title":"Surgical embodied intelligence for generalized task autonomy in laparoscopic robot-assisted surgery.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.7554\/eLife.104008",
    "Title":"Self-other generalisation shapes social interaction and is disrupted in borderline personality disorder.",
    "Citations":68,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s13280-025-02219-4",
    "Title":"EU regulation: An unprecedented opportunity to protect children's and wildlife health from the toxic effects of lead ammunition.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s13567-025-01563-3",
    "Title":"Blastocystis in free-ranging wild ruminant species across the Iberian Peninsula.",
    "Citations":60,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0326928",
    "Title":"Investigating the long-term impact of misinformation interventions in upper secondary education.",
    "Citations":63,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/23259671251352199",
    "Title":"Epidemiology of Elbow Medial Ulnar Collateral Ligament Surgeries in Major and Minor League Baseball Pitchers: A Descriptive Study of 2281 Cases.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.neunet.2025.107803",
    "Title":"Intracortical functional connectivity during deep sleep reveals prosocial preferences.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/23259671241312651",
    "Title":"Minimum 10-Year Outcomes of Arthroscopic Capsulolabral Repair for Posterior Shoulder Instability.",
    "Citations":25,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-025-05316-2",
    "Title":"Understanding the evolutionary processes and causes of groundwater drought using an interpretable machine learning model.",
    "Citations":79,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1121\/10.0036888",
    "Title":"Combined assessment of auditory distance perception and externalization.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pntd.0012893",
    "Title":"Anthrax, livelihood vulnerability, and food insecurity in selected game management areas in Zambia: A mixed-methods analysis at the human-wildlife-livestock interface.",
    "Citations":34,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.17159\/2078-516X\/2025\/v37i1a19947",
    "Title":"Differences in playing experience, anthropometry and performance measures between Under 16 schoolboy rugby players classified as starters or non-starters: A comparative cross-sectional study.",
    "Citations":20,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1126\/sciadv.adu7743",
    "Title":"How media competition fuels the spread of misinformation.",
    "Citations":82,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0325462",
    "Title":"How do the effects of toxicity in competitive online video games vary by source and match outcome?",
    "Citations":41,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jenvman.2025.126069",
    "Title":"Blockchain-enabled carbon emission trading data quality regulation: A tripartite evolutionary game analysis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/cobi.70056",
    "Title":"Socioeconomic drivers of wild meat consumption in the city of Iquitos, Peru.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1017\/S1368980025100487",
    "Title":"The impact of food marketing via video game live streaming on snack intake in adolescents: a randomised controlled trial.",
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
