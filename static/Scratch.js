const papers = { 
 "data": [
  {
    "DOI":"10.1038\/s41598-024-80554-4",
    "Title":"Development of flame retardant slow release insecticides paint and testing its efficacy for four years against dengue and malaria vectors.",
    "Citations":43,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/s24206720",
    "Title":"The Power of Play: Strategies for Enhancing Development in Children with Autism Spectrum Disorders.",
    "Citations":30,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/s24196358",
    "Title":"Using the Nintendo\u2122 Wii to Improve Physical Function and Reduce the Risk of Falls in Older Adults: A Randomized Controlled Clinical Trial.",
    "Citations":41,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/TVCG.2024.3456347",
    "Title":"D-Tour: Semi-Automatic Generation of Interactive Guided Tours for Visualization Dashboard Onboarding.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.6224\/JN.202408_71(4).02",
    "Title":"[New Horizons for Clinical Practice and Competence: Applying Game-Based Learning in Nursing Education].",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-024-60791-3",
    "Title":"Experiments as Code and its application to VR studies in human-building interaction.",
    "Citations":92,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/fpsyt.2024.1377231",
    "Title":"Comparing the effectiveness of game literacy education and game coding education in improving problematic internet gaming.",
    "Citations":39,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1002\/brb3.3416",
    "Title":"Emotions and motivations of gambling: A comparison between scratch card, slot-machines, and casino gamblers.",
    "Citations":37,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/jintelligence12010001",
    "Title":"Checking Different Video Game Mechanics to Assess Cognitive Abilities in Groups with and without Emotional Problems.",
    "Citations":42,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3389\/frai.2023.804682",
    "Title":"Learning to play against any mixture of opponents.",
    "Citations":51,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41586-023-06004-9",
    "Title":"Faster sorting algorithms discovered using deep reinforcement learning.",
    "Citations":72,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10899-023-10216-z",
    "Title":"Am I Winning or Losing? Probing the Appraisal of Partial Wins via Response Vigor.",
    "Citations":65,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1098\/rstb.2021.0484",
    "Title":"How video calls affect mimicry and trust during interactions.",
    "Citations":100,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1126\/science.add4679",
    "Title":"Mastering the game of Stratego with model-free multiagent reinforcement learning.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1080\/02699931.2022.2128064",
    "Title":"What we bet on is not only tangible money, but also good mood.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1556\/2006.2022.00063",
    "Title":"Development and validation of a prediction model for online gambling problems based on players' account data.",
    "Citations":65,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/TCYB.2022.3179950",
    "Title":"PLC-Informed Distributed Game Theoretic Learning of Energy-Optimal Production Policies.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10899-022-10125-7",
    "Title":"Push Outcomes Bias Perceptions of Scratch Card Games.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s10899-021-10103-5",
    "Title":"Using Icon Arrays to Communicate Gambling Information Reduces the Appeal of Scratch Card Games.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1037\/xlm0001071",
    "Title":"A decay-based account of learning and adaptation in complex skills.",
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
