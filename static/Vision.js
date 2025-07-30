const papers = { 
 "data": [
  {
    "DOI":"10.3390\/jimaging11050168",
    "Title":"The Creation of Artificial Data for Training a Neural Network Using the Example of a Conveyor Production Line for Flooring.",
    "Citations":54,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/s25113572",
    "Title":"AI-Powered Analysis of Eye Tracker Data in Basketball Game.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/jfmk10030239",
    "Title":"Light-Based Reaction Speed Does Not Predict Field-Based Reactive Agility in Soccer Players.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1109\/TNSRE.2025.3591104",
    "Title":"Low-cost Vision-Based 3D Elbow Tracking for Post-Stroke Rehabilitation: Development and Pilot Evaluation of a Serious Game.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s13346-025-01925-6",
    "Title":"Emerging innovations in ophthalmic drug delivery for diabetic retinopathy: a translational perspective.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-025-05462-7",
    "Title":"Real-time analysis of soccer ball-player interactions using graph convolutional networks for enhanced game insights.",
    "Citations":101,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.3390\/jintelligence13060060",
    "Title":"Generative AI in Game Design: Enhancing Creativity or Constraining Innovation?",
    "Citations":62,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.5662\/wjm.v15.i2.100937",
    "Title":"Magnification: The game changer in dentistry.",
    "Citations":62,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s13063-025-08933-4",
    "Title":"Comparison of a novel gamified binocular therapy and standard monocular patching therapy in treating unilateral amblyopia in young children: a prospective, multicenter, randomized controlled trial.",
    "Citations":38,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1371\/journal.pone.0324862",
    "Title":"Performance of teenaged action video game players on the Developmental Eye Movement and King-Devick tests.",
    "Citations":56,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1111\/opo.13534",
    "Title":"Efficacy of patching combined with action video games in amblyopic children aged 4-10\u2009years: A randomised clinical trial.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1167\/iovs.66.5.45",
    "Title":"Recent Advances in Stem Cells of Corneal Epithelia.",
    "Citations":125,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1056\/AIcs2400510",
    "Title":"Validation of a Mobile App for Remote Autism Screening in Toddlers.",
    "Citations":34,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.2196\/73135",
    "Title":"Haptic-Driven Serious Card Games for Older Adults: User Preferences Study.",
    "Citations":55,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-025-96671-7",
    "Title":"Relationship between adolescent gaming addiction and myopia, ocular surface condition, and health status: a questionnaire based cohort study.",
    "Citations":44,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1016\/j.survophthal.2025.05.001",
    "Title":"Augmented and virtual reality in retinal care: A systematic review of their role in training, surgery, and treatment.",
    "Citations":"",
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1186\/s12859-025-06136-x",
    "Title":"PCVR: a pre-trained contextualized visual representation for DNA sequence classification.",
    "Citations":48,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1038\/s41598-025-00279-w",
    "Title":"Confidence signalling aids deception in strategic interactions.",
    "Citations":55,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s40123-025-01117-y",
    "Title":"New Mixed Reality Headset: First Exploratory Use in Intraocular Surgery and Telementoring.",
    "Citations":29,
    "Game Engine - Actual":"Unknown"
  },
  {
    "DOI":"10.1007\/s00417-025-06816-7",
    "Title":"Neuroprotection beyond intraocular pressure: game changer or quiet addiction.",
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
