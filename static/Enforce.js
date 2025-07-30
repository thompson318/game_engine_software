const papers = { 
 "data": [
  {
    "DOI":"10.1109\/ICORR66766.2025.11062942",
    "Title":"Challenge-Based Adaptation of Exoskeleton Assistance and Gamified Biofeedback Enables Automated Gait Rehabilitation.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1098\/rsos.250704",
    "Title":"Non-compliance with and non-enforcement of UK loot box industry self-regulation on the Apple App Store: a longitudinal study on poor implementation.",
    "Citations":82,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00246-025-03862-0",
    "Title":"Association of Screen Time Activities with Lifestyle Behaviors in Middle-School Children.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.copsyc.2025.102022",
    "Title":"Children's developing understanding of social norms.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.heliyon.2024.e24884",
    "Title":"A conceptional game theory analysis of environmental public interest litigation of China.",
    "Citations":142,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-023-50414-8",
    "Title":"People punish defection, not failures to conform to the majority.",
    "Citations":73,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jenvman.2023.119449",
    "Title":"Vertical decentralization, environmental regulation, and enterprise pollution: An evolutionary game analysis.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.heliyon.2023.e18850",
    "Title":"Research on immature wheat harvesting behavior of farmers from the perspective of food security: An evolutionary game based analysis.",
    "Citations":56,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s13280-023-01863-y",
    "Title":"Promoting enforcement of non-lead hunting ammunition regulations and compliance in Europe and North America.",
    "Citations":55,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-023-33167-2",
    "Title":"Discriminatory punishment undermines the enforcement of group cooperation.",
    "Citations":53,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1177\/00178969221147609",
    "Title":"The Good Behaviour Game: Maintaining students' physical distancing in physical education classes during the COVID-19 pandemic.",
    "Citations":41,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.neuroscience.2022.11.023",
    "Title":"Modulating the Activity of the Right Dorsolateral Prefrontal Cortex Alters Altruism in Situations of Advantageous Inequity.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/cpe.5511",
    "Title":"Enforcing trustworthy cloud SLA with witnesses: A game theory-based model using smart contracts.",
    "Citations":29,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jtbi.2022.111211",
    "Title":"Adapting paths against zero-determinant strategies in repeated prisoner's dilemma games.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00285-022-01758-8",
    "Title":"Payoff landscapes and the robustness of selfish optimization in iterated games.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-022-08750-8",
    "Title":"Misperception influence on zero-determinant strategies in iterated Prisoner's Dilemma.",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.addbeh.2021.107229",
    "Title":"A speed-of-play limit reduces gambling expenditure in an online roulette game: Results of an online experiment.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1073\/pnas.2112521118",
    "Title":"Children across societies enforce conventional norms but in culturally variable ways.",
    "Citations":63,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1093\/scan\/nsab124",
    "Title":"Inter-brain synchronization is weakened by the introduction of external punishment.",
    "Citations":46,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.jecp.2021.105303",
    "Title":"Preschoolers agree to and enforce prosocial, but not selfish, sharing norms.",
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
