let resultContainer, textField;

document.addEventListener('DOMContentLoaded', () => {
  resultContainer = document.getElementById('search-result');
  textField = document.getElementById('textfield');
  addItems(data.A);
  addItems(data.B);
  addItems(data.C);
  addItems(data.D);
  
  textField.addEventListener('change', () => {
    setTimeout(update(), 100);
  });
});

// Runs when updating search
const update = () => {
  let value = textField.value.toLowerCase;
  let underscored = textField.value.replace(/ /g,"_");
  let exp = new RegExp(textField.value.toLowerCase());
  let dataSet;
  document.getElementById("property_name").innerHTML = String(textField.value);
  document.getElementById("property_address").innerHTML = JSON.stringify(data.D.filter(b => {
    return (
        exp.test(b.A.toLowerCase()) || 
        exp.test(b.B.toLowerCase()) || 
        exp.test(b.C) ||
        exp.test(b.D.toLowerCase())
    );
  }))
  document.getElementById("property_narrative").innerHTML = JSON.stringify(data.C);  
}
  
  
  // if (value === "") {
    // Add all objects to dataSet
    // dataSet = data.D;
  // } else {
    // Filter out objects that matches search query
    // dataSet = data.D.filter(b => {
      // return (
        // exp.test(b.A.toLowerCase()) || 
        // exp.test(b.B.toLowerCase()) || 
        // exp.test(b.C) ||
        // exp.test(b.D.toLowerCase())
      // );
    // });
  // }
  // Remove previous results and add the new ones
  // resultContainer.innerHTML = "";
  // addItems(dataSet);
}


// const addItems = data => {
//   let container = document.createElement('div');
//   container.classList.add('list-item');
  // Creates column headers
  // createTextElement('div', 'A', container);
  // createTextElement('div', 'B', container);
  // createTextElement('div', 'C', container);
  // createTextElement('div', '', container); //Column header
  // resultContainer.appendChild(container);
  // Loops through the provided objects
  // for (let i = 0; i < data.length; i++) {
  //   let container = document.createElement('div');
  //   container.classList.add('list-item');
    // Adds values for every row
    // createTextElement('div', data[i].A, container);
    // createTextElement('div', data[i].B, container);
    // createTextElement('div', data[i].C + ' kr', container);
    // createTextElement('div', data[i].D, container);
    // resultContainer.appendChild(container);
  // }
// }

// Function to create, and append, elements containing text
// const createTextElement = (elem, text, appendTo) => {
//   let container = document.createElement(elem);
//   let textNode = document.createTextNode(text);
//   container.appendChild(textNode);
//   appendTo.appendChild(container);
// }

// const data = require('./propertycsv.json');
// List of books
const data = {
  D: [
    {
      "A": "PropertyID",
      "B": "Property Type",
      "C": "Bldg Subtype",
      "D": "Address"
    },
    {
      "A": "542081",
      "B": "Office",
      "C": "Office",
      "D": "I-90 At Randall Rd @ drn"
    },
    {
      "A": "608139",
      "B": "Office",
      "C": "Office",
      "D": "1 Astellas Way"
    },
    {
      "A": "27960",
      "B": "Office",
      "C": "Office",
      "D": "1 Corporate Dr"
    },
    {
      "A": "397807",
      "B": "Office",
      "C": "Office",
      "D": "1 E Chicago Ave"
    },
    {
      "A": "27965",
      "B": "Office",
      "C": "Office",
      "D": "1 Mid America Plz"
    },
    {
      "A": "608022",
      "B": "Office",
      "C": "Office",
      "D": "1 N Field Ct"
    },
    {
      "A": "3136",
      "B": "Office",
      "C": "Office",
      "D": "1 N Franklin St"
    },
    {
      "A": "27968",
      "B": "Office",
      "C": "Office",
      "D": "1 Overlook Pt"
    },
    {
      "A": "27969",
      "B": "Office",
      "C": "Office",
      "D": "1 Parkview Plz"
    },
    {
      "A": "27970",
      "B": "Office",
      "C": "Office",
      "D": "1 Parkway N"
    },
    {
      "A": "27971",
      "B": "Office",
      "C": "Office",
      "D": "1 Pierce Pl"
    },
    {
      "A": "3143",
      "B": "Office",
      "C": "Office",
      "D": "1 S Wacker Dr"
    },
    {
      "A": "430928",
      "B": "Office",
      "C": "Office",
      "D": "1 Takeda Pkwy"
    },
    {
      "A": "430930",
      "B": "Office",
      "C": "Office",
      "D": "1 Takeda Pkwy"
    },
    {
      "A": "27976",
      "B": "Office",
      "C": "Office",
      "D": "1 Tower Ln"
    },
    {
      "A": "27978",
      "B": "Office",
      "C": "Office",
      "D": "1 Westbrook Corporate Ctr"
    },
    {
      "A": "27982",
      "B": "Office",
      "C": "Office",
      "D": "10 N Martingale Rd"
    },
    {
      "A": "27983",
      "B": "Office",
      "C": "Office",
      "D": "10 Parkway N"
    },
    {
      "A": "3162",
      "B": "Office",
      "C": "Office",
      "D": "10 S Riverside Plz"
    },
    {
      "A": "3163",
      "B": "Office",
      "C": "Office",
      "D": "10 S Wacker Dr"
    },
    {
      "A": "536336",
      "B": "Office",
      "C": "Office",
      "D": "100 Half Day Rd"
    },
    {
      "A": "27992",
      "B": "Office",
      "C": "Office",
      "D": "100 N Field Dr"
    },
    {
      "A": "3171",
      "B": "Office",
      "C": "Office",
      "D": "100 N Riverside Plz"
    },
    {
      "A": "608084",
      "B": "Office",
      "C": "Office",
      "D": "100 NW Point Blvd"
    },
    {
      "A": "27995",
      "B": "Office",
      "C": "Condo",
      "D": "100 S 1st St"
    },
    {
      "A": "608082",
      "B": "Office",
      "C": "Office",
      "D": "100 S Milwaukee Ave"
    },
    {
      "A": "27996",
      "B": "Office",
      "C": "Office",
      "D": "100 S Saunders Rd"
    },
    {
      "A": "397406",
      "B": "Office",
      "C": "Office",
      "D": "100-112 S State St"
    },
    {
      "A": "28028",
      "B": "Office",
      "C": "Office",
      "D": "100-120 Harvester Dr"
    },
    {
      "A": "540489",
      "B": "Office",
      "C": "Office",
      "D": "100-199 S Milwaukee Ave"
    },
    {
      "A": "28003",
      "B": "Office",
      "C": "Office",
      "D": "1000 Burr Ridge Pkwy"
    },
    {
      "A": "28005",
      "B": "Office",
      "C": "Office",
      "D": "1000 E Warrenville Rd"
    },
    {
      "A": "28011",
      "B": "Office",
      "C": "Office",
      "D": "1000 Milwaukee Ave"
    },
    {
      "A": "541704",
      "B": "Office",
      "C": "Office",
      "D": "1000 Remington Blvd"
    },
    {
      "A": "28016",
      "B": "Office",
      "C": "Office",
      "D": "1000 Skokie Blvd"
    },
    {
      "A": "571667",
      "B": "Office",
      "C": "Creative",
      "D": "1000 W Carroll Ave"
    },
    {
      "A": "3194",
      "B": "Office",
      "C": "Creative",
      "D": "1000 W Fulton St"
    },
    {
      "A": "578403",
      "B": "Office",
      "C": "Creative",
      "D": "1001 W Fulton Market"
    },
    {
      "A": "28032",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "1007 Church St"
    },
    {
      "A": "3222",
      "B": "Office",
      "C": "Office",
      "D": "101 E Erie St"
    },
    {
      "A": "3223",
      "B": "Office",
      "C": "Office",
      "D": "101 N Wacker Dr"
    },
    {
      "A": "28039",
      "B": "Office",
      "C": "Office",
      "D": "1011 Warrenville Rd"
    },
    {
      "A": "585552",
      "B": "Office",
      "C": "Office",
      "D": "1025 Red Oak Ln"
    },
    {
      "A": "587842",
      "B": "Office",
      "C": "Office",
      "D": "1025 W Fulton Market"
    },
    {
      "A": "28051",
      "B": "Office",
      "C": "Office",
      "D": "10255 W Higgins Rd"
    },
    {
      "A": "28052",
      "B": "Office",
      "C": "Office",
      "D": "10275 W Higgins Rd"
    },
    {
      "A": "28055",
      "B": "Office",
      "C": "Office",
      "D": "1033 Skokie Blvd"
    },
    {
      "A": "28056",
      "B": "Office",
      "C": "Office",
      "D": "1033 University Pl"
    },
    {
      "A": "540944",
      "B": "Office",
      "C": "Office",
      "D": "10370 Haligus Rd"
    },
    {
      "A": "521626",
      "B": "Office",
      "C": "Creative",
      "D": "1040 W Fulton Market"
    },
    {
      "A": "529886",
      "B": "Office",
      "C": "Office",
      "D": "10419 Calumet Ave"
    },
    {
      "A": "335604",
      "B": "Office",
      "C": "Creative",
      "D": "1045 W Randolph Street"
    },
    {
      "A": "578402",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "1050-1052 W Fulton Market"
    },
    {
      "A": "566836",
      "B": "Office",
      "C": "Office",
      "D": "10801 S Western Ave"
    },
    {
      "A": "539173",
      "B": "Office",
      "C": "Office",
      "D": "10805 Corporate Dr"
    },
    {
      "A": "28080",
      "B": "Office",
      "C": "Office",
      "D": "11 E 22nd St"
    },
    {
      "A": "28086",
      "B": "Office",
      "C": "Office",
      "D": "1100 E Warrenville Rd"
    },
    {
      "A": "28089",
      "B": "Office",
      "C": "Office",
      "D": "1100 N Arlington Heights Rd"
    },
    {
      "A": "578405",
      "B": "Office",
      "C": "Creative",
      "D": "1100 W Fulton Market"
    },
    {
      "A": "335621",
      "B": "Office",
      "C": "Office",
      "D": "1100 W Grand Ave"
    },
    {
      "A": "28092",
      "B": "Office",
      "C": "Office",
      "D": "1100 W Lake Cook Rd"
    },
    {
      "A": "28096",
      "B": "Office",
      "C": "Office",
      "D": "1101 Skokie Blvd"
    },
    {
      "A": "608090",
      "B": "Office",
      "C": "Office",
      "D": "1101 W Waveland Ave"
    },
    {
      "A": "543140",
      "B": "Office",
      "C": "Office",
      "D": "1105-1107 W Fulton Market"
    },
    {
      "A": "3395",
      "B": "Office",
      "C": "Creative",
      "D": "111 N Canal St"
    },
    {
      "A": "28104",
      "B": "Office",
      "C": "Office",
      "D": "111 S Pfingsten Rd"
    },
    {
      "A": "3403",
      "B": "Office",
      "C": "Condo",
      "D": "111 W Illinois St"
    },
    {
      "A": "28112",
      "B": "Office",
      "C": "Office",
      "D": "1111 W 22nd St"
    },
    {
      "A": "588511",
      "B": "Office",
      "C": "",
      "D": "1111 W Carroll Ave"
    },
    {
      "A": "577358",
      "B": "Office",
      "C": "Creative",
      "D": "1114 W Fulton St"
    },
    {
      "A": "389840",
      "B": "Office",
      "C": "Office",
      "D": "1115 W Fulton St"
    },
    {
      "A": "28124",
      "B": "Office",
      "C": "Office",
      "D": "1130 W Lake Cook Rd"
    },
    {
      "A": "350376",
      "B": "Office",
      "C": "Creative",
      "D": "1140 W Fulton St"
    },
    {
      "A": "350378",
      "B": "Office",
      "C": "Creative",
      "D": "1142 W Madison St"
    },
    {
      "A": "107378",
      "B": "Office",
      "C": "Creative",
      "D": "1155 W Fulton St"
    },
    {
      "A": "28134",
      "B": "Office",
      "C": "Office",
      "D": "120 E Liberty Dr"
    },
    {
      "A": "3538",
      "B": "Office",
      "C": "Office",
      "D": "120 N LaSalle St"
    },
    {
      "A": "3542",
      "B": "Office",
      "C": "Office",
      "D": "120 S Riverside Plz"
    },
    {
      "A": "28145",
      "B": "Office",
      "C": "Office",
      "D": "1200 Lakeside Dr"
    },
    {
      "A": "168118",
      "B": "Office",
      "C": "Office",
      "D": "1200 N North Branch St"
    },
    {
      "A": "209118",
      "B": "Office",
      "C": "Office",
      "D": "1200 Townline Rd"
    },
    {
      "A": "209133",
      "B": "Office",
      "C": "Office",
      "D": "1200 Townline Rd"
    },
    {
      "A": "209137",
      "B": "Office",
      "C": "Office",
      "D": "1200 Townline Rd"
    },
    {
      "A": "488681",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "1200 W Fulton Market"
    },
    {
      "A": "168160",
      "B": "Office",
      "C": "Creative",
      "D": "1201 W Lake St"
    },
    {
      "A": "4809",
      "B": "Office",
      "C": "Creative",
      "D": "1201 W Washington Blvd"
    },
    {
      "A": "541890",
      "B": "Office",
      "C": "Office",
      "D": "1206 E 9th St"
    },
    {
      "A": "28156",
      "B": "Office",
      "C": "Office",
      "D": "1211 W 22nd St"
    },
    {
      "A": "168289",
      "B": "Office",
      "C": "Creative",
      "D": "1220 W Van Buren St"
    },
    {
      "A": "3642",
      "B": "Office",
      "C": "Office",
      "D": "123 N Wacker Dr"
    },
    {
      "A": "582931",
      "B": "Office",
      "C": "Creative",
      "D": "1230 W Washington Blvd"
    },
    {
      "A": "28178",
      "B": "Office",
      "C": "Office",
      "D": "1250 N Arlington Heights Rd"
    },
    {
      "A": "422140",
      "B": "Office",
      "C": "Office",
      "D": "1250 Windham Pky"
    },
    {
      "A": "541976",
      "B": "Office",
      "C": "Office",
      "D": "1252 Bell Valley Rd"
    },
    {
      "A": "585782",
      "B": "Office",
      "C": "Office",
      "D": "127 N Walnut St"
    },
    {
      "A": "28186",
      "B": "Office",
      "C": "Office",
      "D": "1275 Milwaukee Ave"
    },
    {
      "A": "370691",
      "B": "Office",
      "C": "Office",
      "D": "1299 Zurich Way"
    },
    {
      "A": "3702",
      "B": "Office",
      "C": "Office",
      "D": "130 E Randolph St"
    },
    {
      "A": "335614",
      "B": "Office",
      "C": "Office",
      "D": "130 N Franklin St"
    },
    {
      "A": "397586",
      "B": "Office",
      "C": "Office",
      "D": "1301 S Grove Ave"
    },
    {
      "A": "28195",
      "B": "Office",
      "C": "Office",
      "D": "1301 W 22nd St"
    },
    {
      "A": "582820",
      "B": "Office",
      "C": "Office",
      "D": "1303 E Algonquin Rd"
    },
    {
      "A": "184631",
      "B": "Office",
      "C": "Creative",
      "D": "1315 N North Branch St"
    },
    {
      "A": "209053",
      "B": "Office",
      "C": "Office",
      "D": "1316 Bond St"
    },
    {
      "A": "335616",
      "B": "Office",
      "C": "Creative",
      "D": "1325 W Fulton St"
    },
    {
      "A": "541730",
      "B": "Office",
      "C": "Office",
      "D": "133 E Brush Hill Rd"
    },
    {
      "A": "107377",
      "B": "Office",
      "C": "Creative",
      "D": "1330 W Fulton St"
    },
    {
      "A": "540922",
      "B": "Office",
      "C": "Office",
      "D": "1331 W 75th St"
    },
    {
      "A": "539187",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "1357 N Elston Ave"
    },
    {
      "A": "431129",
      "B": "Office",
      "C": "Creative",
      "D": "1375 W Fulton St"
    },
    {
      "A": "397543",
      "B": "Office",
      "C": "Medical",
      "D": "13951 Quality Dr"
    },
    {
      "A": "417883",
      "B": "Office",
      "C": "Medical",
      "D": "140 N Roselle Rd"
    },
    {
      "A": "28217",
      "B": "Office",
      "C": "Office",
      "D": "1400 American Ln"
    },
    {
      "A": "28222",
      "B": "Office",
      "C": "Office",
      "D": "1400 Opus Pl"
    },
    {
      "A": "608026",
      "B": "Office",
      "C": "Office",
      "D": "1407 E 60th St"
    },
    {
      "A": "28230",
      "B": "Office",
      "C": "Office",
      "D": "1411 Opus Pl"
    },
    {
      "A": "28233",
      "B": "Office",
      "C": "Office",
      "D": "1415 W 22nd St"
    },
    {
      "A": "28235",
      "B": "Office",
      "C": "Office",
      "D": "1415 W Diehl Rd"
    },
    {
      "A": "28236",
      "B": "Office",
      "C": "Office",
      "D": "1419 Lake Cook Rd"
    },
    {
      "A": "28239",
      "B": "Office",
      "C": "Office",
      "D": "1421 W Shure Dr"
    },
    {
      "A": "540410",
      "B": "Office",
      "C": "Office",
      "D": "14225 S 95th Ave"
    },
    {
      "A": "169312",
      "B": "Office",
      "C": "Office",
      "D": "1440 N Dayton St"
    },
    {
      "A": "28247",
      "B": "Office",
      "C": "Medical",
      "D": "1440-1472 Market St"
    },
    {
      "A": "608035",
      "B": "Office",
      "C": "Office",
      "D": "14441 W 60 Rt"
    },
    {
      "A": "335615",
      "B": "Office",
      "C": "Creative",
      "D": "145 S Wells St"
    },
    {
      "A": "28249",
      "B": "Office",
      "C": "Office",
      "D": "1450 American Ln"
    },
    {
      "A": "28250",
      "B": "Office",
      "C": "Medical",
      "D": "1450 Busch Pkwy"
    },
    {
      "A": "28254",
      "B": "Office",
      "C": "Office",
      "D": "1475 E Woodfield Rd"
    },
    {
      "A": "28259",
      "B": "Office",
      "C": "Office",
      "D": "15 Tower Ct"
    },
    {
      "A": "28260",
      "B": "Office",
      "C": "Office",
      "D": "150 E Pierce Rd"
    },
    {
      "A": "28262",
      "B": "Office",
      "C": "Office",
      "D": "150 N Field Dr"
    },
    {
      "A": "28263",
      "B": "Office",
      "C": "Office",
      "D": "150 N Martingale Rd"
    },
    {
      "A": "28265",
      "B": "Office",
      "C": "Office",
      "D": "150 NW Point Blvd"
    },
    {
      "A": "28267",
      "B": "Office",
      "C": "Office",
      "D": "150 S Saunders Rd"
    },
    {
      "A": "28272",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "1500 Mcconnor Pkwy"
    },
    {
      "A": "397698",
      "B": "Office",
      "C": "Creative",
      "D": "1500 W Carroll Ave"
    },
    {
      "A": "28276",
      "B": "Office",
      "C": "Office",
      "D": "1501 E Woodfield Rd"
    },
    {
      "A": "28282",
      "B": "Office",
      "C": "Office",
      "D": "1515 E Woodfield Rd"
    },
    {
      "A": "28283",
      "B": "Office",
      "C": "Office",
      "D": "1515 W 22nd St"
    },
    {
      "A": "389752",
      "B": "Office",
      "C": "Office",
      "D": "1515 W Webster Ave"
    },
    {
      "A": "529830",
      "B": "Office",
      "C": "Office",
      "D": "15255 S 94th Ave"
    },
    {
      "A": "28290",
      "B": "Office",
      "C": "Office",
      "D": "155 N Pfingsten Rd"
    },
    {
      "A": "28298",
      "B": "Office",
      "C": "Office",
      "D": "1560 Sherman Ave"
    },
    {
      "A": "28304",
      "B": "Office",
      "C": "Condo",
      "D": "1585 N Barrington Rd"
    },
    {
      "A": "335609",
      "B": "Office",
      "C": "Creative",
      "D": "159 N Sangamon St"
    },
    {
      "A": "608042",
      "B": "Office",
      "C": "Office",
      "D": "1600 Bishop Ct"
    },
    {
      "A": "28307",
      "B": "Office",
      "C": "Office",
      "D": "1600 Golf Rd"
    },
    {
      "A": "28308",
      "B": "Office",
      "C": "Office",
      "D": "1600 McConnor Pky"
    },
    {
      "A": "540757",
      "B": "Office",
      "C": "Office",
      "D": "1600 N Randall Rd"
    },
    {
      "A": "28313",
      "B": "Office",
      "C": "Office",
      "D": "1601 W Diehl Rd"
    },
    {
      "A": "28314",
      "B": "Office",
      "C": "Office",
      "D": "1603 Orrington Ave"
    },
    {
      "A": "28317",
      "B": "Office",
      "C": "Office",
      "D": "1615 S Lakeside Dr"
    },
    {
      "A": "28318",
      "B": "Office",
      "C": "Office",
      "D": "1622 Willow Rd"
    },
    {
      "A": "28322",
      "B": "Office",
      "C": "Office",
      "D": "1650 Lake Cook Rd"
    },
    {
      "A": "335612",
      "B": "Office",
      "C": "Creative",
      "D": "167 N Green St"
    },
    {
      "A": "28326",
      "B": "Office",
      "C": "Office",
      "D": "1675 S Lakeside Dr"
    },
    {
      "A": "28329",
      "B": "Office",
      "C": "Office",
      "D": "1700 E Golf Rd"
    },
    {
      "A": "28337",
      "B": "Office",
      "C": "Office",
      "D": "1701 Golf Rd"
    },
    {
      "A": "28338",
      "B": "Office",
      "C": "Office",
      "D": "1701 Golf Rd"
    },
    {
      "A": "28339",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "1701 Golf Rd"
    },
    {
      "A": "554956",
      "B": "Office",
      "C": "Office",
      "D": "1701 Golf Rd"
    },
    {
      "A": "28340",
      "B": "Office",
      "C": "Office",
      "D": "1707 N Randall Rd"
    },
    {
      "A": "335605",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "171 N Aberdeen St"
    },
    {
      "A": "541750",
      "B": "Office",
      "C": "Condo",
      "D": "1710 N Randall Rd"
    },
    {
      "A": "28364",
      "B": "Office",
      "C": "Office",
      "D": "1751 Lake Cook Rd"
    },
    {
      "A": "607986",
      "B": "Office",
      "C": "Office",
      "D": "1755 W Armitage Ave"
    },
    {
      "A": "541593",
      "B": "Office",
      "C": "Office",
      "D": "17850 S Kedzie Ave"
    },
    {
      "A": "4216",
      "B": "Office",
      "C": "Office",
      "D": "180 N Stetson Ave"
    },
    {
      "A": "28388",
      "B": "Office",
      "C": "Medical",
      "D": "1800 Hollister Dr"
    },
    {
      "A": "28392",
      "B": "Office",
      "C": "Office",
      "D": "1800 S York Rd"
    },
    {
      "A": "28390",
      "B": "Office",
      "C": "Office",
      "D": "1800 Sherman Ave"
    },
    {
      "A": "4239",
      "B": "Office",
      "C": "Office",
      "D": "181 W Madison St"
    },
    {
      "A": "28412",
      "B": "Office",
      "C": "Office",
      "D": "184 Shuman Blvd"
    },
    {
      "A": "575034",
      "B": "Office",
      "C": "Office",
      "D": "1840 W Webster Ave"
    },
    {
      "A": "608149",
      "B": "Office",
      "C": "Office",
      "D": "1844 W Ferry Rd"
    },
    {
      "A": "554941",
      "B": "Office",
      "C": "Office",
      "D": "18440 Thompson Ct"
    },
    {
      "A": "28419",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "1849 Green Bay Rd"
    },
    {
      "A": "586499",
      "B": "Office",
      "C": "Office",
      "D": "1851 Silver Cross Blvd"
    },
    {
      "A": "541877",
      "B": "Office",
      "C": "Office",
      "D": "1870 Silver Cross Blvd"
    },
    {
      "A": "530217",
      "B": "Office",
      "C": "Office",
      "D": "1875 Silver Cross Blvd"
    },
    {
      "A": "542015",
      "B": "Office",
      "C": "Office",
      "D": "1890 Silver Cross Blvd"
    },
    {
      "A": "608100",
      "B": "Office",
      "C": "Office",
      "D": "18900 Panduit Dr"
    },
    {
      "A": "28017",
      "B": "Office",
      "C": "Office",
      "D": "1899 W Winchester Rd"
    },
    {
      "A": "570577",
      "B": "Office",
      "C": "Office",
      "D": "1899 W Winchester Rd"
    },
    {
      "A": "28432",
      "B": "Office",
      "C": "Office",
      "D": "18W140 Butterfield Rd"
    },
    {
      "A": "4297",
      "B": "Office",
      "C": "Office",
      "D": "190 S LaSalle St"
    },
    {
      "A": "28434",
      "B": "Office",
      "C": "Office",
      "D": "1900 E Golf Rd"
    },
    {
      "A": "28440",
      "B": "Office",
      "C": "Office",
      "D": "1900 W Field Ct"
    },
    {
      "A": "28442",
      "B": "Office",
      "C": "Office",
      "D": "1901 Butterfield Rd"
    },
    {
      "A": "607973",
      "B": "Office",
      "C": "Office",
      "D": "1901 Chestnut Ave"
    },
    {
      "A": "28444",
      "B": "Office",
      "C": "Office",
      "D": "1901 N Roselle Rd"
    },
    {
      "A": "585521",
      "B": "Office",
      "C": "Office",
      "D": "1901 S Sangamon St"
    },
    {
      "A": "540704",
      "B": "Office",
      "C": "Office",
      "D": "1911 S Sangamon St"
    },
    {
      "A": "28457",
      "B": "Office",
      "C": "Office",
      "D": "1925 W Field Ct"
    },
    {
      "A": "28466",
      "B": "Office",
      "C": "Office",
      "D": "1955 W Field Ct"
    },
    {
      "A": "566496",
      "B": "Office",
      "C": "Office",
      "D": "1960 Lucent Ln"
    },
    {
      "A": "608132",
      "B": "Office",
      "C": "Office",
      "D": "2 Astellas Way"
    },
    {
      "A": "28477",
      "B": "Office",
      "C": "Office",
      "D": "2 Corporate Dr"
    },
    {
      "A": "28479",
      "B": "Office",
      "C": "Office",
      "D": "2 Lincoln Ctr"
    },
    {
      "A": "28480",
      "B": "Office",
      "C": "Office",
      "D": "2 Mid America Plz"
    },
    {
      "A": "28481",
      "B": "Office",
      "C": "Office",
      "D": "2 Overlook Pt"
    },
    {
      "A": "28482",
      "B": "Office",
      "C": "Office",
      "D": "2 Pierce Pl"
    },
    {
      "A": "28487",
      "B": "Office",
      "C": "Office",
      "D": "20 N Martingale Rd"
    },
    {
      "A": "4369",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "20 W Kinzie St"
    },
    {
      "A": "4371",
      "B": "Office",
      "C": "Office",
      "D": "200 E Randolph St"
    },
    {
      "A": "28489",
      "B": "Office",
      "C": "Office",
      "D": "200 Lakeview Pkwy"
    },
    {
      "A": "542052",
      "B": "Office",
      "C": "Office",
      "D": "200 N Field Dr"
    },
    {
      "A": "28491",
      "B": "Office",
      "C": "Office",
      "D": "200 N Martingale Rd"
    },
    {
      "A": "4385",
      "B": "Office",
      "C": "Office",
      "D": "200 W Madison St"
    },
    {
      "A": "608057",
      "B": "Office",
      "C": "Office",
      "D": "2000 Clearwater Dr"
    },
    {
      "A": "397622",
      "B": "Office",
      "C": "Office",
      "D": "2000 Lucent Ln"
    },
    {
      "A": "28497",
      "B": "Office",
      "C": "Medical",
      "D": "2000 Mcdonald Rd"
    },
    {
      "A": "28502",
      "B": "Office",
      "C": "Office",
      "D": "2000 W AT&T Dr"
    },
    {
      "A": "28505",
      "B": "Office",
      "C": "Office",
      "D": "2001 Butterfield Rd"
    },
    {
      "A": "28506",
      "B": "Office",
      "C": "Office",
      "D": "2001 Lakewood Blvd"
    },
    {
      "A": "397440",
      "B": "Office",
      "C": "Office",
      "D": "2001 N Division St"
    },
    {
      "A": "28509",
      "B": "Office",
      "C": "Office",
      "D": "2001 Spring Rd"
    },
    {
      "A": "28510",
      "B": "Office",
      "C": "Office",
      "D": "2001 York Rd"
    },
    {
      "A": "583034",
      "B": "Office",
      "C": "Medical",
      "D": "201 N Elizabeth St"
    },
    {
      "A": "370825",
      "B": "Office",
      "C": "Medical",
      "D": "2011 York Rd"
    },
    {
      "A": "28515",
      "B": "Office",
      "C": "Office",
      "D": "2015 Spring Rd"
    },
    {
      "A": "397624",
      "B": "Office",
      "C": "Office",
      "D": "2017 N Mendell St"
    },
    {
      "A": "540789",
      "B": "Office",
      "C": "Office",
      "D": "202 S Michigan St"
    },
    {
      "A": "397527",
      "B": "Office",
      "C": "Office",
      "D": "202-210 N Genesee St"
    },
    {
      "A": "28521",
      "B": "Office",
      "C": "Office",
      "D": "2021 Spring Rd"
    },
    {
      "A": "4440",
      "B": "Office",
      "C": "Condo",
      "D": "203 N LaSalle St"
    },
    {
      "A": "28524",
      "B": "Office",
      "C": "Office",
      "D": "2040 Calamos Ct"
    },
    {
      "A": "28525",
      "B": "Office",
      "C": "Medical",
      "D": "2040 Ogden Ave"
    },
    {
      "A": "4456",
      "B": "Office",
      "C": "Office",
      "D": "205 N Michigan Ave"
    },
    {
      "A": "28534",
      "B": "Office",
      "C": "Office",
      "D": "2056 Westings Ave"
    },
    {
      "A": "555094",
      "B": "Office",
      "C": "Office",
      "D": "20624 Abbey Woods Ct"
    },
    {
      "A": "28538",
      "B": "Office",
      "C": "Medical",
      "D": "2088 Ogden Ave"
    },
    {
      "A": "3160",
      "B": "Office",
      "C": "Office",
      "D": "21 S Clark St"
    },
    {
      "A": "540482",
      "B": "Office",
      "C": "Creative",
      "D": "210 N Aberdeen St"
    },
    {
      "A": "335610",
      "B": "Office",
      "C": "Creative",
      "D": "210 N Carpenter St"
    },
    {
      "A": "4485",
      "B": "Office",
      "C": "Office",
      "D": "210 S Canal St"
    },
    {
      "A": "28542",
      "B": "Office",
      "C": "Office",
      "D": "2100 E Lake Cook Rd"
    },
    {
      "A": "28546",
      "B": "Office",
      "C": "Office",
      "D": "2100 Sanders Rd"
    },
    {
      "A": "607697",
      "B": "Office",
      "C": "Office",
      "D": "2111 Waukegan Rd"
    },
    {
      "A": "4518",
      "B": "Office",
      "C": "Creative",
      "D": "212 W Superior St"
    },
    {
      "A": "28557",
      "B": "Office",
      "C": "Office",
      "D": "2121 Waukegan Rd"
    },
    {
      "A": "28559",
      "B": "Office",
      "C": "Medical",
      "D": "2124 Ogden Ave"
    },
    {
      "A": "28562",
      "B": "Office",
      "C": "Office",
      "D": "2135 CityGate Ln"
    },
    {
      "A": "28563",
      "B": "Office",
      "C": "Office",
      "D": "21440 W Lake Cook Rd"
    },
    {
      "A": "335620",
      "B": "Office",
      "C": "Creative",
      "D": "215 N Peoria St"
    },
    {
      "A": "28564",
      "B": "Office",
      "C": "Office",
      "D": "215 Shuman Blvd"
    },
    {
      "A": "28565",
      "B": "Office",
      "C": "Office",
      "D": "215 W Diehl Rd"
    },
    {
      "A": "28566",
      "B": "Office",
      "C": "Office",
      "D": "2150 E Lake Cook Rd"
    },
    {
      "A": "540985",
      "B": "Office",
      "C": "Office",
      "D": "2150 Gettler St"
    },
    {
      "A": "209135",
      "B": "Office",
      "C": "Office",
      "D": "21660 W Field Pkwy"
    },
    {
      "A": "209129",
      "B": "Office",
      "C": "Office",
      "D": "21805 W Field Pky"
    },
    {
      "A": "28573",
      "B": "Office",
      "C": "Office",
      "D": "21925 W Field Pky"
    },
    {
      "A": "4563",
      "B": "Office",
      "C": "Office",
      "D": "22 W Washington St"
    },
    {
      "A": "28581",
      "B": "Office",
      "C": "Office",
      "D": "2201 Waukegan Rd"
    },
    {
      "A": "28589",
      "B": "Office",
      "C": "Office",
      "D": "2211 Sanders Rd"
    },
    {
      "A": "28590",
      "B": "Office",
      "C": "Office",
      "D": "2211-2215 S York Rd"
    },
    {
      "A": "565554",
      "B": "Office",
      "C": "Office",
      "D": "2215 S Michigan Ave"
    },
    {
      "A": "28592",
      "B": "Office",
      "C": "Office",
      "D": "2215 Sanders Rd"
    },
    {
      "A": "530357",
      "B": "Office",
      "C": "Office",
      "D": "222 Indianapolis Blvd"
    },
    {
      "A": "4583",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "222 Merchandise Mart Plz"
    },
    {
      "A": "4587",
      "B": "Office",
      "C": "Office",
      "D": "222 S Riverside Plz"
    },
    {
      "A": "4589",
      "B": "Office",
      "C": "Office",
      "D": "222 W Adams St"
    },
    {
      "A": "140682",
      "B": "Office",
      "C": "Creative",
      "D": "222 W Hubbard St"
    },
    {
      "A": "4610",
      "B": "Office",
      "C": "Office",
      "D": "225 N Michigan Ave"
    },
    {
      "A": "140686",
      "B": "Office",
      "C": "Creative",
      "D": "225 W Illinois St"
    },
    {
      "A": "140687",
      "B": "Office",
      "C": "Creative",
      "D": "225 W Ohio St"
    },
    {
      "A": "4613",
      "B": "Office",
      "C": "Office",
      "D": "225 W Wacker Dr"
    },
    {
      "A": "607897",
      "B": "Office",
      "C": "Office",
      "D": "225 Windsor Dr"
    },
    {
      "A": "4623",
      "B": "Office",
      "C": "Office",
      "D": "227 W Monroe St"
    },
    {
      "A": "28612",
      "B": "Office",
      "C": "Office",
      "D": "2275 Cabot Dr"
    },
    {
      "A": "28613",
      "B": "Office",
      "C": "Office",
      "D": "2275 Half Day Rd"
    },
    {
      "A": "541492",
      "B": "Office",
      "C": "Office",
      "D": "2300 Ramblewood Dr"
    },
    {
      "A": "28622",
      "B": "Office",
      "C": "Office",
      "D": "231 N Martingale Rd"
    },
    {
      "A": "4655",
      "B": "Office",
      "C": "Office",
      "D": "233 S Wacker Dr"
    },
    {
      "A": "28629",
      "B": "Office",
      "C": "Office",
      "D": "2333 Waukegan Rd"
    },
    {
      "A": "28634",
      "B": "Office",
      "C": "Office",
      "D": "2345 Waukegan Rd"
    },
    {
      "A": "28640",
      "B": "Office",
      "C": "Office",
      "D": "2355 Waukegan Rd"
    },
    {
      "A": "28660",
      "B": "Office",
      "C": "Office",
      "D": "2441 Warrenville Rd"
    },
    {
      "A": "28661",
      "B": "Office",
      "C": "Office",
      "D": "2443 Warrenville Rd"
    },
    {
      "A": "28667",
      "B": "Office",
      "C": "Office",
      "D": "25 NW Point Blvd"
    },
    {
      "A": "4736",
      "B": "Office",
      "C": "Office",
      "D": "25-35 S Wabash Ave"
    },
    {
      "A": "28670",
      "B": "Office",
      "C": "Office",
      "D": "250 Parkway Dr"
    },
    {
      "A": "4709",
      "B": "Office",
      "C": "Office",
      "D": "250 S Wacker Dr"
    },
    {
      "A": "607940",
      "B": "Office",
      "C": "Office",
      "D": "2500 Lake Cook Rd"
    },
    {
      "A": "28690",
      "B": "Office",
      "C": "Office",
      "D": "2500 Westfield Dr"
    },
    {
      "A": "28694",
      "B": "Office",
      "C": "Office",
      "D": "2501 Patriot Blvd"
    },
    {
      "A": "28702",
      "B": "Office",
      "C": "Office",
      "D": "2550 W Golf Rd"
    },
    {
      "A": "28707",
      "B": "Office",
      "C": "Office",
      "D": "2551-2591 Compass Rd"
    },
    {
      "A": "28704",
      "B": "Office",
      "C": "Medical",
      "D": "2570 Foxfield Rd"
    },
    {
      "A": "28705",
      "B": "Office",
      "C": "Office",
      "D": "2580 Foxfield Rd"
    },
    {
      "A": "607784",
      "B": "Office",
      "C": "Office",
      "D": "2595 Patriot Blvd"
    },
    {
      "A": "539331",
      "B": "Office",
      "C": "Office",
      "D": "2600 Forbs Ave"
    },
    {
      "A": "28708",
      "B": "Office",
      "C": "Office",
      "D": "2600 Lucent Ln"
    },
    {
      "A": "28710",
      "B": "Office",
      "C": "Office",
      "D": "2601 Compass Rd"
    },
    {
      "A": "28714",
      "B": "Office",
      "C": "Office",
      "D": "26125 N Riverwoods Blvd"
    },
    {
      "A": "28717",
      "B": "Office",
      "C": "Office",
      "D": "263 Shuman Blvd"
    },
    {
      "A": "28720",
      "B": "Office",
      "C": "Office",
      "D": "2650 Warrenville Rd"
    },
    {
      "A": "28722",
      "B": "Office",
      "C": "Office",
      "D": "2651 Warrenville Rd"
    },
    {
      "A": "28723",
      "B": "Office",
      "C": "Office",
      "D": "26525 N Riverwoods Blvd"
    },
    {
      "A": "28724",
      "B": "Office",
      "C": "Office",
      "D": "2655 Warrenville Rd"
    },
    {
      "A": "28727",
      "B": "Office",
      "C": "Office",
      "D": "2700 Lake Cook Rd"
    },
    {
      "A": "331467",
      "B": "Office",
      "C": "Office",
      "D": "2701 Navistar Dr"
    },
    {
      "A": "28730",
      "B": "Office",
      "C": "Office",
      "D": "2701 Patriot Blvd"
    },
    {
      "A": "540536",
      "B": "Office",
      "C": "Office",
      "D": "2718 W Roscoe St"
    },
    {
      "A": "608038",
      "B": "Office",
      "C": "Office",
      "D": "275 N Field Dr"
    },
    {
      "A": "585857",
      "B": "Office",
      "C": "Office",
      "D": "2800 Keslinger Rd"
    },
    {
      "A": "28750",
      "B": "Office",
      "C": "Office",
      "D": "2801 Lakeside Dr"
    },
    {
      "A": "28755",
      "B": "Office",
      "C": "Office",
      "D": "28100 Torch Pkwy"
    },
    {
      "A": "28756",
      "B": "Office",
      "C": "Office",
      "D": "2815 Forbs Ave"
    },
    {
      "A": "541721",
      "B": "Office",
      "C": "Condo",
      "D": "28160 W Northwest Hwy"
    },
    {
      "A": "28759",
      "B": "Office",
      "C": "Office",
      "D": "2850 Golf Rd"
    },
    {
      "A": "209119",
      "B": "Office",
      "C": "Office",
      "D": "2870 Forbs Ave"
    },
    {
      "A": "28762",
      "B": "Office",
      "C": "Office",
      "D": "2895 Greenspoint Pkwy"
    },
    {
      "A": "589094",
      "B": "Office",
      "C": "Office",
      "D": "2915 Jorie Blvd"
    },
    {
      "A": "585964",
      "B": "Office",
      "C": "Office",
      "D": "2923 N California Ave"
    },
    {
      "A": "28772",
      "B": "Office",
      "C": "Office",
      "D": "3 Corporate Dr"
    },
    {
      "A": "28776",
      "B": "Office",
      "C": "Office",
      "D": "3 Hawthorn Pkwy"
    },
    {
      "A": "28773",
      "B": "Office",
      "C": "Office",
      "D": "3 Lincoln Ctr"
    },
    {
      "A": "28774",
      "B": "Office",
      "C": "Office",
      "D": "3 Overlook Pt"
    },
    {
      "A": "28775",
      "B": "Office",
      "C": "Office",
      "D": "3 Parkway N"
    },
    {
      "A": "28777",
      "B": "Office",
      "C": "Office",
      "D": "3 Westbrook Corporate Ctr"
    },
    {
      "A": "4812",
      "B": "Office",
      "C": "Office",
      "D": "30 S Wacker Dr"
    },
    {
      "A": "28782",
      "B": "Office",
      "C": "Office",
      "D": "300 Knightsbridge Pkwy"
    },
    {
      "A": "269677",
      "B": "Office",
      "C": "Office",
      "D": "300 N Field Dr"
    },
    {
      "A": "28784",
      "B": "Office",
      "C": "Office",
      "D": "300 N Milwaukee Ave"
    },
    {
      "A": "28785",
      "B": "Office",
      "C": "Office",
      "D": "300 Park Blvd"
    },
    {
      "A": "4828",
      "B": "Office",
      "C": "Office",
      "D": "300 S Riverside Plz"
    },
    {
      "A": "4829",
      "B": "Office",
      "C": "Office",
      "D": "300 S Wacker Dr"
    },
    {
      "A": "28787",
      "B": "Office",
      "C": "Office",
      "D": "300 Tower Pkwy"
    },
    {
      "A": "370826",
      "B": "Office",
      "C": "Office",
      "D": "300 Windsor Dr"
    },
    {
      "A": "28793",
      "B": "Office",
      "C": "Office",
      "D": "3000 Finley Rd"
    },
    {
      "A": "28794",
      "B": "Office",
      "C": "Office",
      "D": "3000 Lakeside Dr"
    },
    {
      "A": "540518",
      "B": "Office",
      "C": "Office",
      "D": "3000 N Halsted St"
    },
    {
      "A": "28795",
      "B": "Office",
      "C": "Condo",
      "D": "3000 Woodcreek Dr"
    },
    {
      "A": "28796",
      "B": "Office",
      "C": "Office",
      "D": "3001 Butterfield Rd"
    },
    {
      "A": "28797",
      "B": "Office",
      "C": "Office",
      "D": "3003 Butterfield Rd"
    },
    {
      "A": "28801",
      "B": "Office",
      "C": "Office",
      "D": "3005 Highland Pkwy"
    },
    {
      "A": "4838",
      "B": "Office",
      "C": "Office",
      "D": "301 S Wacker Dr"
    },
    {
      "A": "28804",
      "B": "Office",
      "C": "Office",
      "D": "3010 Highland Pky"
    },
    {
      "A": "28806",
      "B": "Office",
      "C": "Office",
      "D": "3025 Highland Pky"
    },
    {
      "A": "397658",
      "B": "Office",
      "C": "Medical",
      "D": "303 E Army Trail Rd"
    },
    {
      "A": "578512",
      "B": "Office",
      "C": "Office",
      "D": "303 E Main St"
    },
    {
      "A": "4845",
      "B": "Office",
      "C": "Office",
      "D": "303 W Madison St"
    },
    {
      "A": "28814",
      "B": "Office",
      "C": "Office",
      "D": "3050 Highland Pky"
    },
    {
      "A": "28817",
      "B": "Office",
      "C": "Office",
      "D": "3075 Highland Pky"
    },
    {
      "A": "608126",
      "B": "Office",
      "C": "Office",
      "D": "3075 Sanders Rd"
    },
    {
      "A": "209145",
      "B": "Office",
      "C": "Office",
      "D": "3100 Sanders Rd"
    },
    {
      "A": "4877",
      "B": "Office",
      "C": "Office",
      "D": "311 S Wacker Dr"
    },
    {
      "A": "4892",
      "B": "Office",
      "C": "Creative",
      "D": "315 N Racine Ave"
    },
    {
      "A": "585601",
      "B": "Office",
      "C": "Office",
      "D": "315 S Main St"
    },
    {
      "A": "350188",
      "B": "Office",
      "C": "Creative",
      "D": "318 N Carpenter St"
    },
    {
      "A": "425782",
      "B": "Office",
      "C": "Creative",
      "D": "320 N Sangamon St"
    },
    {
      "A": "586676",
      "B": "Office",
      "C": "Office",
      "D": "320 W Erie St"
    },
    {
      "A": "28839",
      "B": "Office",
      "C": "Office",
      "D": "3200 Highland Ave"
    },
    {
      "A": "4918",
      "B": "Office",
      "C": "Office",
      "D": "321 N Clark St"
    },
    {
      "A": "4920",
      "B": "Office",
      "C": "Office",
      "D": "321 S Plymouth Ct"
    },
    {
      "A": "4933",
      "B": "Office",
      "C": "Office",
      "D": "325 N Wells St"
    },
    {
      "A": "607866",
      "B": "Office",
      "C": "Office",
      "D": "325 S Paulina ST"
    },
    {
      "A": "28845",
      "B": "Office",
      "C": "Office",
      "D": "3250 Lacey Rd"
    },
    {
      "A": "585567",
      "B": "Office",
      "C": "Office",
      "D": "329 Remington Blvd"
    },
    {
      "A": "350428",
      "B": "Office",
      "C": "Creative",
      "D": "330 N Green St"
    },
    {
      "A": "397790",
      "B": "Office",
      "C": "Creative",
      "D": "330 N Green St"
    },
    {
      "A": "4948",
      "B": "Office",
      "C": "Office",
      "D": "330 N Wabash Ave"
    },
    {
      "A": "28854",
      "B": "Office",
      "C": "Office",
      "D": "3325 Warrenville Rd"
    },
    {
      "A": "28856",
      "B": "Office",
      "C": "Office",
      "D": "333 E Butterfield Rd"
    },
    {
      "A": "335618",
      "B": "Office",
      "C": "Creative",
      "D": "333 N Green St"
    },
    {
      "A": "4969",
      "B": "Office",
      "C": "Office",
      "D": "333 W Wacker Dr"
    },
    {
      "A": "28863",
      "B": "Office",
      "C": "Office",
      "D": "3333 Beverly Rd"
    },
    {
      "A": "28864",
      "B": "Office",
      "C": "Office",
      "D": "3333 Finley Rd"
    },
    {
      "A": "540749",
      "B": "Office",
      "C": "Office",
      "D": "3333 Green Bay Rd"
    },
    {
      "A": "28865",
      "B": "Office",
      "C": "Office",
      "D": "3333 Warrenville Rd"
    },
    {
      "A": "28869",
      "B": "Office",
      "C": "Office",
      "D": "340 N Milwaukee Ave"
    },
    {
      "A": "540112",
      "B": "Office",
      "C": "Creative",
      "D": "345 N Morgan St"
    },
    {
      "A": "370829",
      "B": "Office",
      "C": "Office",
      "D": "345 Park Blvd"
    },
    {
      "A": "4996",
      "B": "Office",
      "C": "Office",
      "D": "35 W Wacker Dr"
    },
    {
      "A": "5001",
      "B": "Office",
      "C": "Creative",
      "D": "350 N Orleans St"
    },
    {
      "A": "28877",
      "B": "Office",
      "C": "Office",
      "D": "3500 Lacey Rd"
    },
    {
      "A": "539454",
      "B": "Office",
      "C": "Office",
      "D": "36 E Grand Ave"
    },
    {
      "A": "335619",
      "B": "Office",
      "C": "Creative",
      "D": "360 N Green St"
    },
    {
      "A": "585573",
      "B": "Office",
      "C": "Condo",
      "D": "365 Surryse Rd"
    },
    {
      "A": "140699",
      "B": "Office",
      "C": "Creative",
      "D": "372 W Ontario St"
    },
    {
      "A": "335631",
      "B": "Office",
      "C": "Creative",
      "D": "375 N Morgan St"
    },
    {
      "A": "28900",
      "B": "Office",
      "C": "Office",
      "D": "377 E Butterfield Rd"
    },
    {
      "A": "28902",
      "B": "Office",
      "C": "Office",
      "D": "3800 Golf Rd"
    },
    {
      "A": "28906",
      "B": "Office",
      "C": "Office",
      "D": "3815 E Main St"
    },
    {
      "A": "541662",
      "B": "Office",
      "C": "Office",
      "D": "3890 Salem Lake Dr"
    },
    {
      "A": "209142",
      "B": "Office",
      "C": "Office",
      "D": "395 W Lake St"
    },
    {
      "A": "28922",
      "B": "Office",
      "C": "Office",
      "D": "4 Corporate Dr"
    },
    {
      "A": "28923",
      "B": "Office",
      "C": "Office",
      "D": "4 Overlook Pt"
    },
    {
      "A": "28924",
      "B": "Office",
      "C": "Office",
      "D": "4 Parkway N"
    },
    {
      "A": "28926",
      "B": "Office",
      "C": "Office",
      "D": "4 Westbrook Corporate Ctr"
    },
    {
      "A": "566459",
      "B": "Office",
      "C": "Office",
      "D": "40 E Delaware Pl"
    },
    {
      "A": "28929",
      "B": "Office",
      "C": "Office",
      "D": "40 Skokie Blvd"
    },
    {
      "A": "541974",
      "B": "Office",
      "C": "Condo",
      "D": "400 E Randolph St"
    },
    {
      "A": "5080",
      "B": "Office",
      "C": "Office",
      "D": "400 N Michigan Ave"
    },
    {
      "A": "5083",
      "B": "Office",
      "C": "Office",
      "D": "400 S LaSalle St"
    },
    {
      "A": "28935",
      "B": "Office",
      "C": "Office",
      "D": "400 Skokie Blvd"
    },
    {
      "A": "107322",
      "B": "Office",
      "C": "Creative",
      "D": "401 N Morgan St"
    },
    {
      "A": "5110",
      "B": "Office",
      "C": "Office",
      "D": "401 S Wacker Dr"
    },
    {
      "A": "140701",
      "B": "Office",
      "C": "Creative",
      "D": "401 W Superior St"
    },
    {
      "A": "29508",
      "B": "Office",
      "C": "Office",
      "D": "405 Arbor Glen Blvd"
    },
    {
      "A": "5127",
      "B": "Office",
      "C": "Condo",
      "D": "405 N Wabash Ave"
    },
    {
      "A": "5137",
      "B": "Office",
      "C": "Office",
      "D": "410 N Michigan Ave"
    },
    {
      "A": "28949",
      "B": "Office",
      "C": "Office",
      "D": "4101 Winfield Rd"
    },
    {
      "A": "335606",
      "B": "Office",
      "C": "Creative",
      "D": "412 N Wells St"
    },
    {
      "A": "28959",
      "B": "Office",
      "C": "Office",
      "D": "4201 Winfield Rd"
    },
    {
      "A": "28964",
      "B": "Office",
      "C": "Office",
      "D": "4225 Naperville Rd"
    },
    {
      "A": "540926",
      "B": "Office",
      "C": "Condo",
      "D": "425 Joliet St"
    },
    {
      "A": "28968",
      "B": "Office",
      "C": "Office",
      "D": "425 N Martingale Rd"
    },
    {
      "A": "5206",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "425 S Financial Pl"
    },
    {
      "A": "28976",
      "B": "Office",
      "C": "Office",
      "D": "4300 Winfield Rd"
    },
    {
      "A": "28978",
      "B": "Office",
      "C": "Office",
      "D": "4320 Winfield Rd"
    },
    {
      "A": "140705",
      "B": "Office",
      "C": "Creative",
      "D": "444 N Wells St"
    },
    {
      "A": "140707",
      "B": "Office",
      "C": "Creative",
      "D": "445 W Erie St"
    },
    {
      "A": "427196",
      "B": "Office",
      "C": "Office",
      "D": "450 N Dearborn St"
    },
    {
      "A": "335617",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "450 N Morgan St"
    },
    {
      "A": "555040",
      "B": "Office",
      "C": "Office",
      "D": "4545 N Ravenswood Ave"
    },
    {
      "A": "28998",
      "B": "Office",
      "C": "Office",
      "D": "455 Knightsbridge Pkwy"
    },
    {
      "A": "5243",
      "B": "Office",
      "C": "Office",
      "D": "455 N Cityfront Plaza Dr"
    },
    {
      "A": "540975",
      "B": "Office",
      "C": "Office",
      "D": "4700 N Marine Dr"
    },
    {
      "A": "29011",
      "B": "Office",
      "C": "Office",
      "D": "475 Half Day Rd"
    },
    {
      "A": "29012",
      "B": "Office",
      "C": "Office",
      "D": "475 N Martingale Rd"
    },
    {
      "A": "540907",
      "B": "Office",
      "C": "Office",
      "D": "4801 Southwick Dr"
    },
    {
      "A": "29022",
      "B": "Office",
      "C": "Office",
      "D": "485 E Half Day Rd"
    },
    {
      "A": "335630",
      "B": "Office",
      "C": "Creative",
      "D": "488 N LaSalle St"
    },
    {
      "A": "29024",
      "B": "Office",
      "C": "Medical",
      "D": "4885 Hoffman Blvd"
    },
    {
      "A": "29025",
      "B": "Office",
      "C": "Office",
      "D": "4901 Searle Pkwy"
    },
    {
      "A": "397420",
      "B": "Office",
      "C": "Condo",
      "D": "4954 Oakton St"
    },
    {
      "A": "29032",
      "B": "Office",
      "C": "Office",
      "D": "5 Revere Dr"
    },
    {
      "A": "29033",
      "B": "Office",
      "C": "Office",
      "D": "5 Westbrook Corporate Ctr"
    },
    {
      "A": "29037",
      "B": "Office",
      "C": "Office",
      "D": "50 NW Point Blvd"
    },
    {
      "A": "29041",
      "B": "Office",
      "C": "Office",
      "D": "500 Lake Cook Rd"
    },
    {
      "A": "29043",
      "B": "Office",
      "C": "Office",
      "D": "500 N Field Dr"
    },
    {
      "A": "29044",
      "B": "Office",
      "C": "Office",
      "D": "500 Park Blvd"
    },
    {
      "A": "29046",
      "B": "Office",
      "C": "Office",
      "D": "500 Skokie Blvd"
    },
    {
      "A": "5319",
      "B": "Office",
      "C": "Office",
      "D": "500 W Madison St"
    },
    {
      "A": "5320",
      "B": "Office",
      "C": "Office",
      "D": "500 W Monroe St"
    },
    {
      "A": "566490",
      "B": "Office",
      "C": "Office",
      "D": "51 W Higgins Rd"
    },
    {
      "A": "29056",
      "B": "Office",
      "C": "Office",
      "D": "510 Lake Cook Rd"
    },
    {
      "A": "29057",
      "B": "Office",
      "C": "Office",
      "D": "5100 River Rd"
    },
    {
      "A": "5375",
      "B": "Office",
      "C": "Office",
      "D": "515 N State St"
    },
    {
      "A": "29067",
      "B": "Office",
      "C": "Office",
      "D": "520 Lake Cook Rd"
    },
    {
      "A": "29069",
      "B": "Office",
      "C": "Office",
      "D": "5202 Old Orchard Rd"
    },
    {
      "A": "29070",
      "B": "Office",
      "C": "Office",
      "D": "5215 Old Orchard Rd"
    },
    {
      "A": "542030",
      "B": "Office",
      "C": "Office",
      "D": "525 E Congress Pkwy"
    },
    {
      "A": "5405",
      "B": "Office",
      "C": "Office",
      "D": "525 W Monroe St"
    },
    {
      "A": "5406",
      "B": "Office",
      "C": "Office",
      "D": "525 W Van Buren St"
    },
    {
      "A": "29076",
      "B": "Office",
      "C": "Office",
      "D": "5250 Old Orchard Rd"
    },
    {
      "A": "29081",
      "B": "Office",
      "C": "Office",
      "D": "535 E Diehl Rd"
    },
    {
      "A": "29086",
      "B": "Office",
      "C": "Office",
      "D": "540 Lake Cook Rd"
    },
    {
      "A": "29091",
      "B": "Office",
      "C": "Office",
      "D": "5400 Pearl St"
    },
    {
      "A": "29099",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "5440 Park Pl"
    },
    {
      "A": "209136",
      "B": "Office",
      "C": "Office",
      "D": "5450 Prairie Stone Pkwy"
    },
    {
      "A": "554874",
      "B": "Office",
      "C": "Office",
      "D": "5460 S University Ave"
    },
    {
      "A": "5450",
      "B": "Office",
      "C": "Office",
      "D": "55 E Monroe St"
    },
    {
      "A": "29105",
      "B": "Office",
      "C": "Office",
      "D": "55 Shuman Blvd"
    },
    {
      "A": "5458",
      "B": "Office",
      "C": "Office",
      "D": "550 W Adams St"
    },
    {
      "A": "5459",
      "B": "Office",
      "C": "Office",
      "D": "550 W Jackson Blvd"
    },
    {
      "A": "5461",
      "B": "Office",
      "C": "Office",
      "D": "550 W Washington Blvd"
    },
    {
      "A": "29108",
      "B": "Office",
      "C": "Office",
      "D": "5500 Pearl St"
    },
    {
      "A": "381424",
      "B": "Office",
      "C": "Office",
      "D": "5505 Pearl St"
    },
    {
      "A": "29120",
      "B": "Office",
      "C": "Office",
      "D": "555 Skokie Blvd"
    },
    {
      "A": "608157",
      "B": "Office",
      "C": "Office",
      "D": "555 W Adams St"
    },
    {
      "A": "5477",
      "B": "Office",
      "C": "Office",
      "D": "555 W Monroe St"
    },
    {
      "A": "29127",
      "B": "Office",
      "C": "Office",
      "D": "555-577 Aptakisic Rd"
    },
    {
      "A": "29124",
      "B": "Office",
      "C": "Office",
      "D": "5550 Prairie Stone Pkwy"
    },
    {
      "A": "29128",
      "B": "Office",
      "C": "Office",
      "D": "5595 Trillium Blvd"
    },
    {
      "A": "29130",
      "B": "Office",
      "C": "Office",
      "D": "5600 Pearl St"
    },
    {
      "A": "5488",
      "B": "Office",
      "C": "Condo",
      "D": "567 W Lake St"
    },
    {
      "A": "530328",
      "B": "Office",
      "C": "Office",
      "D": "57 Franklin St"
    },
    {
      "A": "29139",
      "B": "Office",
      "C": "Office",
      "D": "5750 Old Orchard Rd"
    },
    {
      "A": "178000",
      "B": "Office",
      "C": "Office",
      "D": "5800 W Touhy Ave"
    },
    {
      "A": "335632",
      "B": "Office",
      "C": "Office",
      "D": "590 W Madison St"
    },
    {
      "A": "29146",
      "B": "Office",
      "C": "Office",
      "D": "6 Parkway N"
    },
    {
      "A": "29151",
      "B": "Office",
      "C": "Office",
      "D": "600 N Field Dr"
    },
    {
      "A": "29153",
      "B": "Office",
      "C": "Office",
      "D": "600 N US Hwy 45"
    },
    {
      "A": "541124",
      "B": "Office",
      "C": "Office",
      "D": "600 S Damen Ave"
    },
    {
      "A": "540524",
      "B": "Office",
      "C": "Office",
      "D": "610 S Maple Ave"
    },
    {
      "A": "541917",
      "B": "Office",
      "C": "Office",
      "D": "611 E Douglas Rd"
    },
    {
      "A": "29172",
      "B": "Office",
      "C": "Office",
      "D": "6111 N River Rd"
    },
    {
      "A": "29173",
      "B": "Office",
      "C": "Office",
      "D": "6133 N River Rd"
    },
    {
      "A": "335607",
      "B": "Office",
      "C": "Office",
      "D": "625 W Adams St"
    },
    {
      "A": "5602",
      "B": "Office",
      "C": "Office",
      "D": "625 W Monroe St"
    },
    {
      "A": "29186",
      "B": "Office",
      "C": "Office",
      "D": "6250 N River Rd"
    },
    {
      "A": "29189",
      "B": "Office",
      "C": "Office",
      "D": "630 Dundee Rd"
    },
    {
      "A": "5612",
      "B": "Office",
      "C": "Office",
      "D": "633 N Saint Clair St"
    },
    {
      "A": "5620",
      "B": "Office",
      "C": "Creative",
      "D": "640 N LaSalle St"
    },
    {
      "A": "5636",
      "B": "Office",
      "C": "Office",
      "D": "645 W Madison St"
    },
    {
      "A": "29208",
      "B": "Office",
      "C": "Office",
      "D": "650 Dundee Rd"
    },
    {
      "A": "607587",
      "B": "Office",
      "C": "Office",
      "D": "650 S Randall RD"
    },
    {
      "A": "29213",
      "B": "Office",
      "C": "Office",
      "D": "651 Prairie Pointe Dr"
    },
    {
      "A": "29214",
      "B": "Office",
      "C": "Office",
      "D": "6600 Mannheim Rd"
    },
    {
      "A": "29215",
      "B": "Office",
      "C": "Office",
      "D": "6600 Mannheim Rd"
    },
    {
      "A": "540752",
      "B": "Office",
      "C": "Office",
      "D": "6640 S Cicero Ave"
    },
    {
      "A": "29218",
      "B": "Office",
      "C": "Office",
      "D": "665 W North Ave"
    },
    {
      "A": "397537",
      "B": "Office",
      "C": "Office",
      "D": "6734 E Joliet Rd"
    },
    {
      "A": "585777",
      "B": "Office",
      "C": "Office",
      "D": "678 Cedar Crossings Dr"
    },
    {
      "A": "585784",
      "B": "Office",
      "C": "Office",
      "D": "680 Barclay Blvd"
    },
    {
      "A": "540875",
      "B": "Office",
      "C": "Office",
      "D": "6957 Olde Creek Rd"
    },
    {
      "A": "5704",
      "B": "Office",
      "C": "Office",
      "D": "70 W Madison St"
    },
    {
      "A": "29234",
      "B": "Office",
      "C": "Office",
      "D": "700 Commerce Dr"
    },
    {
      "A": "29240",
      "B": "Office",
      "C": "Office",
      "D": "700 Oakmont Ln"
    },
    {
      "A": "397762",
      "B": "Office",
      "C": "Office",
      "D": "700 W Chicago Ave"
    },
    {
      "A": "29243",
      "B": "Office",
      "C": "Office",
      "D": "701 E 22nd St"
    },
    {
      "A": "540724",
      "B": "Office",
      "C": "Office",
      "D": "701 Oakmont Ln"
    },
    {
      "A": "29251",
      "B": "Office",
      "C": "Office",
      "D": "707 Skokie Blvd"
    },
    {
      "A": "578404",
      "B": "Office",
      "C": "Creative",
      "D": "732 W Randolph St"
    },
    {
      "A": "29277",
      "B": "Office",
      "C": "Mixed-Use",
      "D": "740 Waukegan Rd"
    },
    {
      "A": "530146",
      "B": "Office",
      "C": "Office",
      "D": "7456 S State Rd"
    },
    {
      "A": "29285",
      "B": "Office",
      "C": "Office",
      "D": "75 N Fairway Dr"
    },
    {
      "A": "29286",
      "B": "Office",
      "C": "Office",
      "D": "75 NW Point Blvd"
    },
    {
      "A": "5828",
      "B": "Office",
      "C": "Creative",
      "D": "750 N Orleans St"
    },
    {
      "A": "29292",
      "B": "Office",
      "C": "Office",
      "D": "750 W Lake Cook Rd"
    },
    {
      "A": "209101",
      "B": "Office",
      "C": "Office",
      "D": "760 W Main St"
    },
    {
      "A": "5843",
      "B": "Office",
      "C": "Office",
      "D": "77 W Jackson Blvd"
    },
    {
      "A": "5844",
      "B": "Office",
      "C": "Office",
      "D": "77 W Wacker Dr"
    },
    {
      "A": "107333",
      "B": "Office",
      "C": "Creative",
      "D": "770 N Halsted St"
    },
    {
      "A": "29316",
      "B": "Office",
      "C": "Office",
      "D": "8 N Pkwy Blvd"
    },
    {
      "A": "29317",
      "B": "Office",
      "C": "Medical",
      "D": "800 Biesterfield Rd"
    },
    {
      "A": "389839",
      "B": "Office",
      "C": "Creative",
      "D": "800 W Fulton Market"
    },
    {
      "A": "542210",
      "B": "Office",
      "C": "Office",
      "D": "8001 Broadway"
    },
    {
      "A": "607941",
      "B": "Office",
      "C": "Office",
      "D": "801 S Washington St"
    },
    {
      "A": "29341",
      "B": "Office",
      "C": "Office",
      "D": "801 Warrenville Rd"
    },
    {
      "A": "107344",
      "B": "Office",
      "C": "Creative",
      "D": "811 W Fulton St"
    },
    {
      "A": "397669",
      "B": "Office",
      "C": "Office",
      "D": "814 W Eastman St"
    },
    {
      "A": "29356",
      "B": "Office",
      "C": "Office",
      "D": "820 Jorie Blvd"
    },
    {
      "A": "559915",
      "B": "Office",
      "C": "Office",
      "D": "8201 W Higgins Rd"
    },
    {
      "A": "536187",
      "B": "Office",
      "C": "Office",
      "D": "833 W Lincoln Hwy"
    },
    {
      "A": "540528",
      "B": "Office",
      "C": "Office",
      "D": "839 Broadway"
    },
    {
      "A": "29372",
      "B": "Office",
      "C": "Office",
      "D": "8410 W Bryn Mawr Ave"
    },
    {
      "A": "29373",
      "B": "Office",
      "C": "Office",
      "D": "8420 W Bryn Mawr Ave"
    },
    {
      "A": "29374",
      "B": "Office",
      "C": "Office",
      "D": "8430 W Bryn Mawr Ave"
    },
    {
      "A": "370827",
      "B": "Office",
      "C": "Office",
      "D": "85 NW Point Blvd"
    },
    {
      "A": "370824",
      "B": "Office",
      "C": "Office",
      "D": "8535 W Higgins Rd"
    },
    {
      "A": "29385",
      "B": "Office",
      "C": "Office",
      "D": "8550 W Bryn Mawr Ave"
    },
    {
      "A": "536331",
      "B": "Office",
      "C": "Office",
      "D": "8585 Broadway"
    },
    {
      "A": "29388",
      "B": "Office",
      "C": "Office",
      "D": "8600 W Bryn Mawr Ave"
    },
    {
      "A": "541215",
      "B": "Office",
      "C": "Office",
      "D": "8601 W Higgins Rd"
    },
    {
      "A": "608153",
      "B": "Office",
      "C": "Office",
      "D": "8647 W Higgins Rd"
    },
    {
      "A": "397577",
      "B": "Office",
      "C": "Office",
      "D": "870 N Arlington Heights Rd"
    },
    {
      "A": "29393",
      "B": "Office",
      "C": "Office",
      "D": "8700 W Bryn Mawr Ave"
    },
    {
      "A": "29396",
      "B": "Office",
      "C": "Office",
      "D": "8725 W Higgins Rd"
    },
    {
      "A": "29397",
      "B": "Office",
      "C": "Office",
      "D": "8735 W Higgins Rd"
    },
    {
      "A": "29398",
      "B": "Office",
      "C": "Office",
      "D": "8745 W Higgins Rd"
    },
    {
      "A": "6045",
      "B": "Office",
      "C": "Office",
      "D": "875 N Michigan Ave"
    },
    {
      "A": "29399",
      "B": "Office",
      "C": "Office",
      "D": "8750 W Bryn Mawr Ave"
    },
    {
      "A": "29400",
      "B": "Office",
      "C": "Office",
      "D": "8755 W Higgins Rd"
    },
    {
      "A": "29402",
      "B": "Office",
      "C": "Office",
      "D": "8770 W Bryn Mawr Ave"
    },
    {
      "A": "29414",
      "B": "Office",
      "C": "Office",
      "D": "9 Parkway N"
    },
    {
      "A": "181033",
      "B": "Office",
      "C": "Office",
      "D": "90 Half Day Rd"
    },
    {
      "A": "6082",
      "B": "Office",
      "C": "Condo",
      "D": "900 N Michigan Ave"
    },
    {
      "A": "29420",
      "B": "Office",
      "C": "Medical",
      "D": "900 Rand Rd"
    },
    {
      "A": "29422",
      "B": "Office",
      "C": "Office",
      "D": "900 Technology Way"
    },
    {
      "A": "184690",
      "B": "Office",
      "C": "Condo",
      "D": "900 Tri State Pkwy"
    },
    {
      "A": "335608",
      "B": "Office",
      "C": "Creative",
      "D": "905 W Fulton St"
    },
    {
      "A": "29435",
      "B": "Office",
      "C": "Office",
      "D": "909 Davis St"
    },
    {
      "A": "397709",
      "B": "Office",
      "C": "Creative",
      "D": "909 W Bliss St"
    },
    {
      "A": "397739",
      "B": "Office",
      "C": "Office",
      "D": "915-939 W North Ave"
    },
    {
      "A": "6145",
      "B": "Office",
      "C": "Condo",
      "D": "919 N Michigan Ave"
    },
    {
      "A": "29455",
      "B": "Office",
      "C": "Office",
      "D": "9377 W Higgins Rd"
    },
    {
      "A": "350176",
      "B": "Office",
      "C": "Creative",
      "D": "939 W Fulton St"
    },
    {
      "A": "29456",
      "B": "Office",
      "C": "Office",
      "D": "9399 W Higgins Rd"
    },
    {
      "A": "536340",
      "B": "Office",
      "C": "Office",
      "D": "9400 W Higgins Rd"
    },
    {
      "A": "578359",
      "B": "Office",
      "C": "Office",
      "D": "942-944 W Fulton Market"
    },
    {
      "A": "29468",
      "B": "Office",
      "C": "Office",
      "D": "950 Technology Way"
    },
    {
      "A": "29469",
      "B": "Office",
      "C": "Office",
      "D": "9500 W Bryn Mawr Ave"
    },
    {
      "A": "29470",
      "B": "Office",
      "C": "Office",
      "D": "9501 Technology Blvd"
    },
    {
      "A": "350462",
      "B": "Office",
      "C": "Creative",
      "D": "952 W Lake St"
    },
    {
      "A": "29473",
      "B": "Office",
      "C": "Office",
      "D": "953 American Ln"
    },
    {
      "A": "29475",
      "B": "Office",
      "C": "Office",
      "D": "9550 W Higgins Rd"
    },
    {
      "A": "397763",
      "B": "Office",
      "C": "Office",
      "D": "9550 W Higgins Rd"
    },
    {
      "A": "29477",
      "B": "Office",
      "C": "Office",
      "D": "9600 W Bryn Mawr Ave"
    },
    {
      "A": "29481",
      "B": "Office",
      "C": "Office",
      "D": "9700 W Higgins Rd"
    },
    {
      "A": "541858",
      "B": "Office",
      "C": "Office",
      "D": "973 Featherstone Rd"
    },
    {
      "A": "6219",
      "B": "Office",
      "C": "Office",
      "D": "980 N Michigan Ave"
    },
    {
      "A": "555039",
      "B": "Office",
      "C": "Office",
      "D": "990 Deerfield Pkwy"
    },
    {
      "A": "585512",
      "B": "Office",
      "C": "Office",
      "D": "999 N Elmhurst Rd"
    },
    {
      "A": "29505",
      "B": "Office",
      "C": "Office",
      "D": "Eola Rd @ I-88"
    },
    {
      "A": "29506",
      "B": "Office",
      "C": "Office",
      "D": "Huntington Blvd"
    },
    {
      "A": "542140",
      "B": "Office",
      "C": "Office",
      "D": "I-55 & I-80"
    },
    {
      "A": "587940",
      "B": "Office",
      "C": "Office",
      "D": "NWC Warrenville Rd & Ferry Rd"
    },
    {
      "A": "29509",
      "B": "Office",
      "C": "Office",
      "D": "Orchard Rd @ I-88"
    },
    {
      "A": "29510",
      "B": "Office",
      "C": "Office",
      "D": "Roselle Rd @ I-90"
    },
    {
      "A": "29513",
      "B": "Office",
      "C": "Office",
      "D": "Willow Rd @ I-294"
    },
    {
      "A": "29514",
      "B": "Office",
      "C": "Office",
      "D": "Willow Rd @ I-294"
    }
   ]
};