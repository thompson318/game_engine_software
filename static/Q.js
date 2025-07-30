const papers = { 
 "data": [
  {
    "DOI":"10.1016\/j.jenvman.2025.126335",
    "Title":"Evaluating treatment units for the optimization of large textile WWTPs: A game theoretic approach.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.18332\/tid\/203937",
    "Title":"The impact of gamification on smoking cessation: A systematic review and meta-analysis.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1126\/sciadv.adt5743",
    "Title":"Mycorrhizal symbioses and tree diversity in global forest communities.",
    "Citations":72,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0318372",
    "Title":"Autonomous agents: Augmenting visual information with raw audio data.",
    "Citations":43,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/02701367.2025.2496263",
    "Title":"Gaelic Football Coaches' Use of a Game-Based Approach Impacts Game Performance, Session Characteristics, and Player Perceptions.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0323978",
    "Title":"Effect of simulated handball match-induced fatigue on isokinetic hamstring-to-quadriceps ratio and evertor-to-invertor ratio in professional players.",
    "Citations":55,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0320777",
    "Title":"Combining meta reinforcement learning with neural plasticity mechanisms for improved AI performance.",
    "Citations":59,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1063\/5.0266460",
    "Title":"Evolution of cooperation with Q-learning: The impact of information perception.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/ma18081813",
    "Title":"The Design and Fabrication of Shear-Mode Piezoelectric Accelerometers with High Bandwidth Using High Piezoelectric g-Coefficient NKN-Based Ceramics.",
    "Citations":35,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.plaphy.2025.109948",
    "Title":"Unraveling a century-old mystery: The role of Ophiostoma quercus in oak decline.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/20552076251339263",
    "Title":"Assessment of causality between computer game playing and neuropsychiatric disorders: A bidirectional Mendelian randomization study.",
    "Citations":53,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/life15040529",
    "Title":"Sports Injuries in Basketball, Handball, and Volleyball Players: Systematic Review.",
    "Citations":90,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0319953",
    "Title":"Intelligent anti-jamming communication technology with electromagnetic spectrum feature cognition.",
    "Citations":30,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/02701367.2025.2488847",
    "Title":"Design and Validation of a Questionnaire for the Assessment of Tennis Players' Tactical Skills (TST).",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.aap.2025.108034",
    "Title":"A game theoretical model to examine pedestrian behaviour and safety on unsignalised slip lanes using AI-based video analytics.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1063\/5.0267846",
    "Title":"Promoting cooperation in the voluntary prisoner's dilemma game via reinforcement learning.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fpsyg.2025.1524645",
    "Title":"A meta-analysis of the impact of technology related factors on students' academic performance.",
    "Citations":144,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/17470218251329230",
    "Title":"'Some like it cold'. On the association between the physical and affective notion of warmth.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/64004",
    "Title":"A Self-Adaptive Serious Game to Improve Motor Learning Among Older Adults in Immersive Virtual Reality: Short-Term Longitudinal Pre-Post Study on Retention and Transfer.",
    "Citations":80,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/17470218251326501",
    "Title":"Facial attractiveness influenced cooperative behavior in the Stag Hunt game: Evidence from neural electrophysiology.",
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
