const papers = { 
 "data": [
  {
    "DOI":"10.1519\/JSC.0000000000005145",
    "Title":"Change of Direction Density: A Novel Consideration of Consecutive Changes of Direction in Elite Youth Soccer.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0317414",
    "Title":"The machine learning algorithm based on decision tree optimization for pattern recognition in track and field sports.",
    "Citations":35,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.chemmater.4c02351",
    "Title":"Unveiling Surface Chemistry of Ultrafast-Sintered LLZO Solid-State Electrolytes for High-Performance Li-Garnet Solid-State Batteries.",
    "Citations":52,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/23259671241274137",
    "Title":"Normative In-Game Data for Collegiate Baseball Pitchers Using Markerless Tracking Technology.",
    "Citations":23,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/03635465241279406",
    "Title":"Tall and Fall Versus Drop and Drive Strategy in College Baseball Pitchers for Velocity and Elbow Valgus Torque.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/healthcare12151500",
    "Title":"A Study on the Effectiveness of VR Rehabilitation Training Content for Older Individuals with Total Knee Replacement: Pilot Study.",
    "Citations":29,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-024-66727-1",
    "Title":"Smartphone usage during walking decreases the positive persistency in gait cycle variability.",
    "Citations":64,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41371-024-00932-3",
    "Title":"Wearable cuffless blood pressure tracking: when will they be good enough?",
    "Citations":22,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.heliyon.2024.e28901",
    "Title":"Risk of using smartphones while walking for digital natives in realistic environments: Effects of cognitive-motor interference.",
    "Citations":75,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-023-49382-w",
    "Title":"Development and implementation of the frog-in-maze game to study upper limb movement in people with Parkinson's disease.",
    "Citations":42,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1055\/a-2134-3456",
    "Title":"Range of Motion Adaptations During a Simulated Game Exposure in Softball Pitchers.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-023-41290-3",
    "Title":"Game-based intradialytic non-weight-bearing exercise training on gait speed and balance in older adults with diabetes: a single-blind randomized controlled trial.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/14763141.2022.2133006",
    "Title":"Game-play affects hamstring but not adductor muscle fibre mechanics in elite U20 basketball athletes.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fspor.2021.789321",
    "Title":"\"I'm a Referee, Not a Female Referee\": The Experiences of Women Involved in Football as Coaches and Referees.",
    "Citations":72,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.26603\/001c.28086",
    "Title":"Grip Strength Measurement in Baseball Pitchers: A Clinical Examination to Indicate Stride Length Inefficiency.",
    "Citations":29,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/14763141.2021.1941229",
    "Title":"The influence of a simulated game on muscular strength in female high-school and collegiate softball pitchers.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/02640414.2020.1816287",
    "Title":"Applying the brakes in tennis: How entry speed affects the movement and hitting kinematics of professional tennis players.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1055\/a-1062-6475",
    "Title":"Effects of a Simulated Game on Pitching Kinematics in Youth Softball Pitcher.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/02640414.2019.1699987",
    "Title":"The practical application of a method of analysing the variability of within-step accelerations collected via athlete tracking devices.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/nu11122880",
    "Title":"Effects of Vitamin D and Calcium Fortified Yogurts on Gait, Cognitive Performances, and Serum 25-Hydroxyvitamin D Concentrations in Older Community-Dwelling Females: Results from the GAit, MEmory, Dietary and Vitamin D (GAME-D2) Randomized Controlled Trial.",
    "Citations":36,
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
