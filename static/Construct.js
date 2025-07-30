const papers = { 
 "data": [
  {
    "DOI":"10.1016\/j.actpsy.2025.105252",
    "Title":"Evaluating planning through play: Exploring the use of mini games to assess planning abilities.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-025-08636-5",
    "Title":"An adaptive dynamics framework for microbial ecology and evolution.",
    "Citations":36,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.5334\/pb.1365",
    "Title":"Psychometric Validation of the Gaming Disorder Scale for Adolescents (GADIS-A) in Dutch Among Flemish Adolescents.",
    "Citations":43,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-025-05977-z",
    "Title":"Fuzzy cooperative game analysis within the international railway freight coalition framework.",
    "Citations":68,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-025-08836-z",
    "Title":"Construction of evolutionary stability and signal game model for privacy protection in the internet of things.",
    "Citations":30,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.neunet.2025.107692",
    "Title":"Counterfactual value decomposition for cooperative multi-agent reinforcement learning.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0322888",
    "Title":"Complexity analysis of a closed-loop supply chain for power battery recycling under government subsidies.",
    "Citations":53,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.19723\/j.issn.1671-167X.2025.03.015",
    "Title":"[Three-party game and simulation analysis of health-related information quality regulation in public health emergencies].",
    "Citations":19,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/59515",
    "Title":"Perceptions Toward an Attentional Bias Modification Mobile Game Among Individuals With Low Socioeconomic Status Who Smoke: Qualitative Study.",
    "Citations":64,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1063\/5.0270353",
    "Title":"Evolutionary game dynamics of index insurance with refund or non-refund risk sharing mechanism.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/66167",
    "Title":"Digital Ergonomics of NavegApp, a Novel Serious Game for Spatial Cognition Assessment: Content Validity and Usability Study.",
    "Citations":73,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/TNNLS.2024.3516693",
    "Title":"Last-Iterate Convergence to Approximate Nash Equilibria in Multiplayer Imperfect Information Games.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/TVCG.2024.3507952",
    "Title":"Motion Editing for Quadruped Characters via Latent Frequency Embedding.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1021\/acs.analchem.4c06801",
    "Title":"Vectorial Discrimination of Small Molecules with a Macrocycle Adaptor-Protein Nanopore System and Nanocavity-Dependent, pH Gradient-Controlled Analyte Kinetics.",
    "Citations":66,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s12909-025-06643-8",
    "Title":"Effectiveness evaluation of a serious game for dental lost wax casting training.",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.yebeh.2025.110339",
    "Title":"Evaluating the effectiveness of two video-based educational interventions to enhance knowledge about epilepsy in preschool children.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.heliyon.2025.e42424",
    "Title":"Selection of emission reduction modes for energy-intensive enterprises under the dynamic carbon cap-and-trade regulation.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1099\/acmi.0.000900.v3",
    "Title":"Beyond lectures: leveraging competition, peer discussion and real-world scenarios in a digital card game to enhance learning of microbiology and immunology concepts.",
    "Citations":21,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/21642850.2024.2444245",
    "Title":"Representations of in vitro fertilization in the first cycle of IVF in women.",
    "Citations":56,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ijms252413328",
    "Title":"Novel Selectable Marker Sesquiterpenoid Antibiotic Pentalenolactone.",
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
