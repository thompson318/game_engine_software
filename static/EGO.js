const papers = { 
 "data": [
  {
    "DOI":"10.1038\/s41598-025-96895-7",
    "Title":"Understanding the sport viewership experience using functional near-infrared spectroscopy.",
    "Citations":27,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/TPAMI.2025.3526936",
    "Title":"Hybrid-Prediction Integrated Planning for Autonomous Driving.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fpsyg.2022.918688",
    "Title":"The (Gami)fictional Ego-Center: Projecting the Location of the Self Into an Avatar.",
    "Citations":53,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fpsyt.2022.813969",
    "Title":"Emotional Ego- and Altercentric Biases in High-Functioning Autism Spectrum Disorder: Behavioral and Neurophysiological Evidence.",
    "Citations":74,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s42256-022-00520-5",
    "Title":"Deep learning-based robust positioning for all-weather autonomous driving.",
    "Citations":49,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ijerph18147351",
    "Title":"Co-Attendance Communities: A Multilevel Egocentric Network Analysis of American Soccer Supporters' Groups.",
    "Citations":48,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s13034-021-00369-3",
    "Title":"Development of the child's ego strength scale: an observation-based assessment of the board game behaviors in play therapy in Korea.",
    "Citations":99,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fnins.2021.638652",
    "Title":"Testing the Effects of a Preceding Self-Control Task on Decision-Making in Soccer Refereeing.",
    "Citations":64,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3233\/SHTI200369",
    "Title":"Biostatistics Disruptive Acculturation Through Serious Gaming: A New Hope.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/02791072.2020.1773585",
    "Title":"Effect of Ego Depletion on Interpersonal Trust among Individuals with Substance Use Disorders.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1521\/prev.2020.107.2.175",
    "Title":"Madness and Otherness: Moments of Possibility.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ijerph15091866",
    "Title":"An Explanatory Model for the Relationship between Motivation in Sport, Victimization, and Video Game Use in Schoolchildren.",
    "Citations":82,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/00224545.2018.1505706",
    "Title":"Ego-depletion increases selfish decision making, but may also increase self-conflict and regret about those decisions.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0171472",
    "Title":"Social networks and inference about unknown events: A case of the match between Google's AlphaGo and Sedol Lee.",
    "Citations":79,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.5964\/ejop.v11i4.934",
    "Title":"Emotional, Cognitive and Self-Enhancement Processes in Aggressive Behavior After Interpersonal Rejection and Exclusion.",
    "Citations":33,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fpsyg.2015.02008",
    "Title":"The Effect of Distance on Moral Engagement: Event Related Potentials and Alpha Power are Sensitive to Perspective in a Virtual Shooting Task.",
    "Citations":66,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fpsyg.2015.00572",
    "Title":"In intergroup conflict, self-sacrifice is stronger among pro-social individuals, and parochial altruism emerges especially among cognitively taxed individuals.",
    "Citations":72,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/scan\/nsv020",
    "Title":"Reflected glory and failure: the role of the medial prefrontal cortex and ventral striatum in self vs other relevance during advice-giving outcomes.",
    "Citations":35,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/scan\/nsu154",
    "Title":"Medial prefrontal cortex reacts to unfairness if this damages the self: a tDCS study.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.biopsycho.2014.11.011",
    "Title":"Self-affirmation facilitates cardiovascular recovery following interpersonal evaluation.",
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
