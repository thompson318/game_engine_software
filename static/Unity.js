const papers = { 
 "data": [
  {
    "DOI":"10.1098\/rsos.250704",
    "Title":"Non-compliance with and non-enforcement of UK loot box industry self-regulation on the Apple App Store: a longitudinal study on poor implementation.",
    "Citations":82,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0318372",
    "Title":"Autonomous agents: Augmenting visual information with raw audio data.",
    "Citations":43,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/ase.70086",
    "Title":"'SOMS BrainSpace': A digital serious game for undergraduate neuroscience.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1556\/2006.2025.00057",
    "Title":"Widespread illegal video game advertising in the UK and South Korea: Many adverts not disclosing loot box presence found using Meta's ad repository.",
    "Citations":32,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s11548-025-03462-6",
    "Title":"Augmented reality in pelvic surgery: using an AR-headset as intraoperative radiation-free navigation tool.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/e27060586",
    "Title":"Entropy Maximization, Time Emergence, and Phase Transition.",
    "Citations":23,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/bioengineering12060581",
    "Title":"AdaptRehab VR: Development of an Immersive Virtual Reality System for Upper Limb Stroke Rehabilitation Designed for Low- and Middle-Income Countries Using a Participatory Co-Creation Approach.",
    "Citations":106,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/73009",
    "Title":"Development of a Serious Game to Simulate Neonatal Intensive Care Unit Experiences: Collaborative Quasi-Experimental Study.",
    "Citations":17,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1073\/pnas.2422779122",
    "Title":"Route of fire: Pregame rituals and emotional synchrony among Brazilian football fans.",
    "Citations":42,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/jimaging11050168",
    "Title":"The Creation of Artificial Data for Training a Neural Network Using the Example of a Conveyor Production Line for Flooring.",
    "Citations":54,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3233\/SHTI250193",
    "Title":"Virtual Reality with Moodle for Training in Telemedicine.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0319385",
    "Title":"Extraordinary siblings: Mole rats, marmosets, and Radcliffe-Brown.",
    "Citations":63,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1089\/g4h.2023.0194",
    "Title":"Proposal of a Serious Game for Dynamic Balance Training Using a Force Platform: A Pilot Study.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/20552076251323989",
    "Title":"VR-NRP: A development study of a virtual reality simulation for training in the neonatal resuscitation program.",
    "Citations":55,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s11571-025-10229-x",
    "Title":"Rehabilitative game-based system for enhancing physical and cognitive abilities of neurological disorders.",
    "Citations":21,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/EMBC53108.2024.10782637",
    "Title":"Haptic-Enhanced Mixed Reality for Upper Limb Rehabilitation in Parkinson's Disease.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fdgth.2024.1479544",
    "Title":"Augmented Reality for extremity hemorrhage training: a usability study.",
    "Citations":61,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.eclinm.2024.102798",
    "Title":"Effect of digital health applications with or without gamification on physical activity and cardiometabolic risk factors: a systematic review and meta-analysis of randomized controlled trials.",
    "Citations":122,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1364\/OE.520168",
    "Title":"High-fidelity color characterization in virtual reality across head mounted displays, game engines, and materials.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.pedn.2024.09.008",
    "Title":"Golden Breath: Feasibility and acceptability of a biofeedback-based virtual reality game on reducing children's needle-related pain and fear.",
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
