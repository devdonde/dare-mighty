let resultContainer, textField;

document.addEventListener('DOMContentLoaded', () => {
  resultContainer = document.getElementById('search-result');
  textField = document.getElementById('textfield');
  textField.addEventListener('change', () => {
    setTimeout(update(), 100);
  });
});

function getPropertyByAddress(Address) {
  return data.filter(
    function(data) {
      return data.Address == Address
    }
  );
}

// Runs when updating search
const update = () => {
  let value = textField.value.toLowerCase;
  
  let exp = new RegExp(textField.value.toLowerCase());
  let dataSet;
  // Update the placeholders
  document.getElementById("property_address").innerHTML = String(textField.value);
  let property_address = String(textField.value);
  var found = getPropertyByAddress(property_address)
  console.log(property_address);
  console.log(found);
  document.getElementById("property_name").innerHTML = found[0].PropertyType;
  // document.getElementById("property_narrative").innerHTML = JSON.stringify(data.C);
  
  // Create Google Map API search string
  let underscored = String(textField.value).replace(/ /g,"_");
  var $mapsUrl = "https://maps.googleapis.com/maps/api/streetview?location=#underscored#&size=900x300&key=AIzaSyC2bd3qlr8st5twYYuG2Xj1yer4cSQzYFw"
  var $newMapsUrl = $mapsUrl.replace('#underscored#', underscored);
  console.log($newMapsUrl);
  document.getElementById("testpic").setAttribute("src", String($newMapsUrl));
}

var data = [
  {
    "PropertyID": "PropertyID",
    "PropertyType": "Property Type",
    "BldgSubType": "Bldg Subtype",
    "Address": "Address"
  },
  {
    "PropertyID": "542081",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "I-90 At Randall Rd @ drn"
  },
  {
    "PropertyID": "608139",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 Astellas Way"
  },
  {
    "PropertyID": "27960",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 Corporate Dr"
  },
  {
    "PropertyID": "397807",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 E Chicago Ave"
  },
  {
    "PropertyID": "27965",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 Mid America Plz"
  },
  {
    "PropertyID": "608022",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 N Field Ct"
  },
  {
    "PropertyID": "3136",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 N Franklin St"
  },
  {
    "PropertyID": "27968",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 Overlook Pt"
  },
  {
    "PropertyID": "27969",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 Parkview Plz"
  },
  {
    "PropertyID": "27970",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 Parkway N"
  },
  {
    "PropertyID": "27971",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 Pierce Pl"
  },
  {
    "PropertyID": "3143",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 S Wacker Dr"
  },
  {
    "PropertyID": "430928",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 Takeda Pkwy"
  },
  {
    "PropertyID": "430930",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 Takeda Pkwy"
  },
  {
    "PropertyID": "27976",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 Tower Ln"
  },
  {
    "PropertyID": "27978",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1 Westbrook Corporate Ctr"
  },
  {
    "PropertyID": "27982",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "10 N Martingale Rd"
  },
  {
    "PropertyID": "27983",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "10 Parkway N"
  },
  {
    "PropertyID": "3162",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "10 S Riverside Plz"
  },
  {
    "PropertyID": "3163",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "10 S Wacker Dr"
  },
  {
    "PropertyID": "536336",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "100 Half Day Rd"
  },
  {
    "PropertyID": "27992",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "100 N Field Dr"
  },
  {
    "PropertyID": "3171",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "100 N Riverside Plz"
  },
  {
    "PropertyID": "608084",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "100 NW Point Blvd"
  },
  {
    "PropertyID": "27995",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "100 S 1st St"
  },
  {
    "PropertyID": "608082",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "100 S Milwaukee Ave"
  },
  {
    "PropertyID": "27996",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "100 S Saunders Rd"
  },
  {
    "PropertyID": "397406",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "100-112 S State St"
  },
  {
    "PropertyID": "28028",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "100-120 Harvester Dr"
  },
  {
    "PropertyID": "540489",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "100-199 S Milwaukee Ave"
  },
  {
    "PropertyID": "28003",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1000 Burr Ridge Pkwy"
  },
  {
    "PropertyID": "28005",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1000 E Warrenville Rd"
  },
  {
    "PropertyID": "28011",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1000 Milwaukee Ave"
  },
  {
    "PropertyID": "541704",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1000 Remington Blvd"
  },
  {
    "PropertyID": "28016",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1000 Skokie Blvd"
  },
  {
    "PropertyID": "571667",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1000 W Carroll Ave"
  },
  {
    "PropertyID": "3194",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1000 W Fulton St"
  },
  {
    "PropertyID": "578403",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1001 W Fulton Market"
  },
  {
    "PropertyID": "28032",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "1007 Church St"
  },
  {
    "PropertyID": "3222",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "101 E Erie St"
  },
  {
    "PropertyID": "3223",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "101 N Wacker Dr"
  },
  {
    "PropertyID": "28039",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1011 Warrenville Rd"
  },
  {
    "PropertyID": "585552",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1025 Red Oak Ln"
  },
  {
    "PropertyID": "587842",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1025 W Fulton Market"
  },
  {
    "PropertyID": "28051",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "10255 W Higgins Rd"
  },
  {
    "PropertyID": "28052",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "10275 W Higgins Rd"
  },
  {
    "PropertyID": "28055",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1033 Skokie Blvd"
  },
  {
    "PropertyID": "28056",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1033 University Pl"
  },
  {
    "PropertyID": "540944",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "10370 Haligus Rd"
  },
  {
    "PropertyID": "521626",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1040 W Fulton Market"
  },
  {
    "PropertyID": "529886",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "10419 Calumet Ave"
  },
  {
    "PropertyID": "335604",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1045 W Randolph Street"
  },
  {
    "PropertyID": "578402",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "1050-1052 W Fulton Market"
  },
  {
    "PropertyID": "566836",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "10801 S Western Ave"
  },
  {
    "PropertyID": "539173",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "10805 Corporate Dr"
  },
  {
    "PropertyID": "28080",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "11 E 22nd St"
  },
  {
    "PropertyID": "28086",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1100 E Warrenville Rd"
  },
  {
    "PropertyID": "28089",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1100 N Arlington Heights Rd"
  },
  {
    "PropertyID": "578405",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1100 W Fulton Market"
  },
  {
    "PropertyID": "335621",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1100 W Grand Ave"
  },
  {
    "PropertyID": "28092",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1100 W Lake Cook Rd"
  },
  {
    "PropertyID": "28096",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1101 Skokie Blvd"
  },
  {
    "PropertyID": "608090",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1101 W Waveland Ave"
  },
  {
    "PropertyID": "543140",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1105-1107 W Fulton Market"
  },
  {
    "PropertyID": "3395",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "111 N Canal St"
  },
  {
    "PropertyID": "28104",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "111 S Pfingsten Rd"
  },
  {
    "PropertyID": "3403",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "111 W Illinois St"
  },
  {
    "PropertyID": "28112",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1111 W 22nd St"
  },
  {
    "PropertyID": "588511",
    "PropertyType": "Office",
    "BldgSubType": "",
    "Address": "1111 W Carroll Ave"
  },
  {
    "PropertyID": "577358",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1114 W Fulton St"
  },
  {
    "PropertyID": "389840",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1115 W Fulton St"
  },
  {
    "PropertyID": "28124",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1130 W Lake Cook Rd"
  },
  {
    "PropertyID": "350376",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1140 W Fulton St"
  },
  {
    "PropertyID": "350378",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1142 W Madison St"
  },
  {
    "PropertyID": "107378",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1155 W Fulton St"
  },
  {
    "PropertyID": "28134",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "120 E Liberty Dr"
  },
  {
    "PropertyID": "3538",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "120 N LaSalle St"
  },
  {
    "PropertyID": "3542",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "120 S Riverside Plz"
  },
  {
    "PropertyID": "28145",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1200 Lakeside Dr"
  },
  {
    "PropertyID": "168118",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1200 N North Branch St"
  },
  {
    "PropertyID": "209118",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1200 Townline Rd"
  },
  {
    "PropertyID": "209133",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1200 Townline Rd"
  },
  {
    "PropertyID": "209137",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1200 Townline Rd"
  },
  {
    "PropertyID": "488681",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "1200 W Fulton Market"
  },
  {
    "PropertyID": "168160",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1201 W Lake St"
  },
  {
    "PropertyID": "4809",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1201 W Washington Blvd"
  },
  {
    "PropertyID": "541890",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1206 E 9th St"
  },
  {
    "PropertyID": "28156",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1211 W 22nd St"
  },
  {
    "PropertyID": "168289",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1220 W Van Buren St"
  },
  {
    "PropertyID": "3642",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "123 N Wacker Dr"
  },
  {
    "PropertyID": "582931",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1230 W Washington Blvd"
  },
  {
    "PropertyID": "28178",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1250 N Arlington Heights Rd"
  },
  {
    "PropertyID": "422140",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1250 Windham Pky"
  },
  {
    "PropertyID": "541976",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1252 Bell Valley Rd"
  },
  {
    "PropertyID": "585782",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "127 N Walnut St"
  },
  {
    "PropertyID": "28186",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1275 Milwaukee Ave"
  },
  {
    "PropertyID": "370691",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1299 Zurich Way"
  },
  {
    "PropertyID": "3702",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "130 E Randolph St"
  },
  {
    "PropertyID": "335614",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "130 N Franklin St"
  },
  {
    "PropertyID": "397586",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1301 S Grove Ave"
  },
  {
    "PropertyID": "28195",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1301 W 22nd St"
  },
  {
    "PropertyID": "582820",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1303 E Algonquin Rd"
  },
  {
    "PropertyID": "184631",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1315 N North Branch St"
  },
  {
    "PropertyID": "209053",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1316 Bond St"
  },
  {
    "PropertyID": "335616",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1325 W Fulton St"
  },
  {
    "PropertyID": "541730",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "133 E Brush Hill Rd"
  },
  {
    "PropertyID": "107377",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1330 W Fulton St"
  },
  {
    "PropertyID": "540922",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1331 W 75th St"
  },
  {
    "PropertyID": "539187",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "1357 N Elston Ave"
  },
  {
    "PropertyID": "431129",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1375 W Fulton St"
  },
  {
    "PropertyID": "397543",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "13951 Quality Dr"
  },
  {
    "PropertyID": "417883",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "140 N Roselle Rd"
  },
  {
    "PropertyID": "28217",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1400 American Ln"
  },
  {
    "PropertyID": "28222",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1400 Opus Pl"
  },
  {
    "PropertyID": "608026",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1407 E 60th St"
  },
  {
    "PropertyID": "28230",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1411 Opus Pl"
  },
  {
    "PropertyID": "28233",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1415 W 22nd St"
  },
  {
    "PropertyID": "28235",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1415 W Diehl Rd"
  },
  {
    "PropertyID": "28236",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1419 Lake Cook Rd"
  },
  {
    "PropertyID": "28239",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1421 W Shure Dr"
  },
  {
    "PropertyID": "540410",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "14225 S 95th Ave"
  },
  {
    "PropertyID": "169312",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1440 N Dayton St"
  },
  {
    "PropertyID": "28247",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "1440-1472 Market St"
  },
  {
    "PropertyID": "608035",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "14441 W 60 Rt"
  },
  {
    "PropertyID": "335615",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "145 S Wells St"
  },
  {
    "PropertyID": "28249",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1450 American Ln"
  },
  {
    "PropertyID": "28250",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "1450 Busch Pkwy"
  },
  {
    "PropertyID": "28254",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1475 E Woodfield Rd"
  },
  {
    "PropertyID": "28259",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "15 Tower Ct"
  },
  {
    "PropertyID": "28260",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "150 E Pierce Rd"
  },
  {
    "PropertyID": "28262",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "150 N Field Dr"
  },
  {
    "PropertyID": "28263",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "150 N Martingale Rd"
  },
  {
    "PropertyID": "28265",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "150 NW Point Blvd"
  },
  {
    "PropertyID": "28267",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "150 S Saunders Rd"
  },
  {
    "PropertyID": "28272",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "1500 Mcconnor Pkwy"
  },
  {
    "PropertyID": "397698",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "1500 W Carroll Ave"
  },
  {
    "PropertyID": "28276",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1501 E Woodfield Rd"
  },
  {
    "PropertyID": "28282",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1515 E Woodfield Rd"
  },
  {
    "PropertyID": "28283",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1515 W 22nd St"
  },
  {
    "PropertyID": "389752",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1515 W Webster Ave"
  },
  {
    "PropertyID": "529830",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "15255 S 94th Ave"
  },
  {
    "PropertyID": "28290",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "155 N Pfingsten Rd"
  },
  {
    "PropertyID": "28298",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1560 Sherman Ave"
  },
  {
    "PropertyID": "28304",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "1585 N Barrington Rd"
  },
  {
    "PropertyID": "335609",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "159 N Sangamon St"
  },
  {
    "PropertyID": "608042",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1600 Bishop Ct"
  },
  {
    "PropertyID": "28307",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1600 Golf Rd"
  },
  {
    "PropertyID": "28308",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1600 McConnor Pky"
  },
  {
    "PropertyID": "540757",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1600 N Randall Rd"
  },
  {
    "PropertyID": "28313",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1601 W Diehl Rd"
  },
  {
    "PropertyID": "28314",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1603 Orrington Ave"
  },
  {
    "PropertyID": "28317",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1615 S Lakeside Dr"
  },
  {
    "PropertyID": "28318",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1622 Willow Rd"
  },
  {
    "PropertyID": "28322",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1650 Lake Cook Rd"
  },
  {
    "PropertyID": "335612",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "167 N Green St"
  },
  {
    "PropertyID": "28326",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1675 S Lakeside Dr"
  },
  {
    "PropertyID": "28329",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1700 E Golf Rd"
  },
  {
    "PropertyID": "28337",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1701 Golf Rd"
  },
  {
    "PropertyID": "28338",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1701 Golf Rd"
  },
  {
    "PropertyID": "28339",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "1701 Golf Rd"
  },
  {
    "PropertyID": "554956",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1701 Golf Rd"
  },
  {
    "PropertyID": "28340",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1707 N Randall Rd"
  },
  {
    "PropertyID": "335605",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "171 N Aberdeen St"
  },
  {
    "PropertyID": "541750",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "1710 N Randall Rd"
  },
  {
    "PropertyID": "28364",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1751 Lake Cook Rd"
  },
  {
    "PropertyID": "607986",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1755 W Armitage Ave"
  },
  {
    "PropertyID": "541593",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "17850 S Kedzie Ave"
  },
  {
    "PropertyID": "4216",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "180 N Stetson Ave"
  },
  {
    "PropertyID": "28388",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "1800 Hollister Dr"
  },
  {
    "PropertyID": "28392",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1800 S York Rd"
  },
  {
    "PropertyID": "28390",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1800 Sherman Ave"
  },
  {
    "PropertyID": "4239",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "181 W Madison St"
  },
  {
    "PropertyID": "28412",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "184 Shuman Blvd"
  },
  {
    "PropertyID": "575034",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1840 W Webster Ave"
  },
  {
    "PropertyID": "608149",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1844 W Ferry Rd"
  },
  {
    "PropertyID": "554941",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "18440 Thompson Ct"
  },
  {
    "PropertyID": "28419",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "1849 Green Bay Rd"
  },
  {
    "PropertyID": "586499",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1851 Silver Cross Blvd"
  },
  {
    "PropertyID": "541877",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1870 Silver Cross Blvd"
  },
  {
    "PropertyID": "530217",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1875 Silver Cross Blvd"
  },
  {
    "PropertyID": "542015",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1890 Silver Cross Blvd"
  },
  {
    "PropertyID": "608100",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "18900 Panduit Dr"
  },
  {
    "PropertyID": "28017",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1899 W Winchester Rd"
  },
  {
    "PropertyID": "570577",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1899 W Winchester Rd"
  },
  {
    "PropertyID": "28432",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "18W140 Butterfield Rd"
  },
  {
    "PropertyID": "4297",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "190 S LaSalle St"
  },
  {
    "PropertyID": "28434",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1900 E Golf Rd"
  },
  {
    "PropertyID": "28440",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1900 W Field Ct"
  },
  {
    "PropertyID": "28442",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1901 Butterfield Rd"
  },
  {
    "PropertyID": "607973",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1901 Chestnut Ave"
  },
  {
    "PropertyID": "28444",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1901 N Roselle Rd"
  },
  {
    "PropertyID": "585521",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1901 S Sangamon St"
  },
  {
    "PropertyID": "540704",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1911 S Sangamon St"
  },
  {
    "PropertyID": "28457",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1925 W Field Ct"
  },
  {
    "PropertyID": "28466",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1955 W Field Ct"
  },
  {
    "PropertyID": "566496",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "1960 Lucent Ln"
  },
  {
    "PropertyID": "608132",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2 Astellas Way"
  },
  {
    "PropertyID": "28477",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2 Corporate Dr"
  },
  {
    "PropertyID": "28479",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2 Lincoln Ctr"
  },
  {
    "PropertyID": "28480",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2 Mid America Plz"
  },
  {
    "PropertyID": "28481",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2 Overlook Pt"
  },
  {
    "PropertyID": "28482",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2 Pierce Pl"
  },
  {
    "PropertyID": "28487",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "20 N Martingale Rd"
  },
  {
    "PropertyID": "4369",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "20 W Kinzie St"
  },
  {
    "PropertyID": "4371",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "200 E Randolph St"
  },
  {
    "PropertyID": "28489",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "200 Lakeview Pkwy"
  },
  {
    "PropertyID": "542052",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "200 N Field Dr"
  },
  {
    "PropertyID": "28491",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "200 N Martingale Rd"
  },
  {
    "PropertyID": "4385",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "200 W Madison St"
  },
  {
    "PropertyID": "608057",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2000 Clearwater Dr"
  },
  {
    "PropertyID": "397622",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2000 Lucent Ln"
  },
  {
    "PropertyID": "28497",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "2000 Mcdonald Rd"
  },
  {
    "PropertyID": "28502",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2000 W AT&T Dr"
  },
  {
    "PropertyID": "28505",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2001 Butterfield Rd"
  },
  {
    "PropertyID": "28506",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2001 Lakewood Blvd"
  },
  {
    "PropertyID": "397440",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2001 N Division St"
  },
  {
    "PropertyID": "28509",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2001 Spring Rd"
  },
  {
    "PropertyID": "28510",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2001 York Rd"
  },
  {
    "PropertyID": "583034",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "201 N Elizabeth St"
  },
  {
    "PropertyID": "370825",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "2011 York Rd"
  },
  {
    "PropertyID": "28515",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2015 Spring Rd"
  },
  {
    "PropertyID": "397624",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2017 N Mendell St"
  },
  {
    "PropertyID": "540789",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "202 S Michigan St"
  },
  {
    "PropertyID": "397527",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "202-210 N Genesee St"
  },
  {
    "PropertyID": "28521",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2021 Spring Rd"
  },
  {
    "PropertyID": "4440",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "203 N LaSalle St"
  },
  {
    "PropertyID": "28524",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2040 Calamos Ct"
  },
  {
    "PropertyID": "28525",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "2040 Ogden Ave"
  },
  {
    "PropertyID": "4456",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "205 N Michigan Ave"
  },
  {
    "PropertyID": "28534",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2056 Westings Ave"
  },
  {
    "PropertyID": "555094",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "20624 Abbey Woods Ct"
  },
  {
    "PropertyID": "28538",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "2088 Ogden Ave"
  },
  {
    "PropertyID": "3160",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "21 S Clark St"
  },
  {
    "PropertyID": "540482",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "210 N Aberdeen St"
  },
  {
    "PropertyID": "335610",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "210 N Carpenter St"
  },
  {
    "PropertyID": "4485",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "210 S Canal St"
  },
  {
    "PropertyID": "28542",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2100 E Lake Cook Rd"
  },
  {
    "PropertyID": "28546",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2100 Sanders Rd"
  },
  {
    "PropertyID": "607697",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2111 Waukegan Rd"
  },
  {
    "PropertyID": "4518",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "212 W Superior St"
  },
  {
    "PropertyID": "28557",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2121 Waukegan Rd"
  },
  {
    "PropertyID": "28559",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "2124 Ogden Ave"
  },
  {
    "PropertyID": "28562",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2135 CityGate Ln"
  },
  {
    "PropertyID": "28563",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "21440 W Lake Cook Rd"
  },
  {
    "PropertyID": "335620",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "215 N Peoria St"
  },
  {
    "PropertyID": "28564",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "215 Shuman Blvd"
  },
  {
    "PropertyID": "28565",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "215 W Diehl Rd"
  },
  {
    "PropertyID": "28566",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2150 E Lake Cook Rd"
  },
  {
    "PropertyID": "540985",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2150 Gettler St"
  },
  {
    "PropertyID": "209135",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "21660 W Field Pkwy"
  },
  {
    "PropertyID": "209129",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "21805 W Field Pky"
  },
  {
    "PropertyID": "28573",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "21925 W Field Pky"
  },
  {
    "PropertyID": "4563",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "22 W Washington St"
  },
  {
    "PropertyID": "28581",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2201 Waukegan Rd"
  },
  {
    "PropertyID": "28589",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2211 Sanders Rd"
  },
  {
    "PropertyID": "28590",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2211-2215 S York Rd"
  },
  {
    "PropertyID": "565554",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2215 S Michigan Ave"
  },
  {
    "PropertyID": "28592",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2215 Sanders Rd"
  },
  {
    "PropertyID": "530357",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "222 Indianapolis Blvd"
  },
  {
    "PropertyID": "4583",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "222 Merchandise Mart Plz"
  },
  {
    "PropertyID": "4587",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "222 S Riverside Plz"
  },
  {
    "PropertyID": "4589",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "222 W Adams St"
  },
  {
    "PropertyID": "140682",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "222 W Hubbard St"
  },
  {
    "PropertyID": "4610",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "225 N Michigan Ave"
  },
  {
    "PropertyID": "140686",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "225 W Illinois St"
  },
  {
    "PropertyID": "140687",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "225 W Ohio St"
  },
  {
    "PropertyID": "4613",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "225 W Wacker Dr"
  },
  {
    "PropertyID": "607897",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "225 Windsor Dr"
  },
  {
    "PropertyID": "4623",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "227 W Monroe St"
  },
  {
    "PropertyID": "28612",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2275 Cabot Dr"
  },
  {
    "PropertyID": "28613",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2275 Half Day Rd"
  },
  {
    "PropertyID": "541492",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2300 Ramblewood Dr"
  },
  {
    "PropertyID": "28622",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "231 N Martingale Rd"
  },
  {
    "PropertyID": "4655",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "233 S Wacker Dr"
  },
  {
    "PropertyID": "28629",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2333 Waukegan Rd"
  },
  {
    "PropertyID": "28634",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2345 Waukegan Rd"
  },
  {
    "PropertyID": "28640",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2355 Waukegan Rd"
  },
  {
    "PropertyID": "28660",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2441 Warrenville Rd"
  },
  {
    "PropertyID": "28661",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2443 Warrenville Rd"
  },
  {
    "PropertyID": "28667",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "25 NW Point Blvd"
  },
  {
    "PropertyID": "4736",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "25-35 S Wabash Ave"
  },
  {
    "PropertyID": "28670",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "250 Parkway Dr"
  },
  {
    "PropertyID": "4709",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "250 S Wacker Dr"
  },
  {
    "PropertyID": "607940",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2500 Lake Cook Rd"
  },
  {
    "PropertyID": "28690",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2500 Westfield Dr"
  },
  {
    "PropertyID": "28694",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2501 Patriot Blvd"
  },
  {
    "PropertyID": "28702",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2550 W Golf Rd"
  },
  {
    "PropertyID": "28707",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2551-2591 Compass Rd"
  },
  {
    "PropertyID": "28704",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "2570 Foxfield Rd"
  },
  {
    "PropertyID": "28705",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2580 Foxfield Rd"
  },
  {
    "PropertyID": "607784",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2595 Patriot Blvd"
  },
  {
    "PropertyID": "539331",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2600 Forbs Ave"
  },
  {
    "PropertyID": "28708",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2600 Lucent Ln"
  },
  {
    "PropertyID": "28710",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2601 Compass Rd"
  },
  {
    "PropertyID": "28714",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "26125 N Riverwoods Blvd"
  },
  {
    "PropertyID": "28717",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "263 Shuman Blvd"
  },
  {
    "PropertyID": "28720",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2650 Warrenville Rd"
  },
  {
    "PropertyID": "28722",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2651 Warrenville Rd"
  },
  {
    "PropertyID": "28723",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "26525 N Riverwoods Blvd"
  },
  {
    "PropertyID": "28724",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2655 Warrenville Rd"
  },
  {
    "PropertyID": "28727",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2700 Lake Cook Rd"
  },
  {
    "PropertyID": "331467",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2701 Navistar Dr"
  },
  {
    "PropertyID": "28730",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2701 Patriot Blvd"
  },
  {
    "PropertyID": "540536",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2718 W Roscoe St"
  },
  {
    "PropertyID": "608038",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "275 N Field Dr"
  },
  {
    "PropertyID": "585857",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2800 Keslinger Rd"
  },
  {
    "PropertyID": "28750",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2801 Lakeside Dr"
  },
  {
    "PropertyID": "28755",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "28100 Torch Pkwy"
  },
  {
    "PropertyID": "28756",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2815 Forbs Ave"
  },
  {
    "PropertyID": "541721",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "28160 W Northwest Hwy"
  },
  {
    "PropertyID": "28759",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2850 Golf Rd"
  },
  {
    "PropertyID": "209119",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2870 Forbs Ave"
  },
  {
    "PropertyID": "28762",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2895 Greenspoint Pkwy"
  },
  {
    "PropertyID": "589094",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2915 Jorie Blvd"
  },
  {
    "PropertyID": "585964",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "2923 N California Ave"
  },
  {
    "PropertyID": "28772",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3 Corporate Dr"
  },
  {
    "PropertyID": "28776",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3 Hawthorn Pkwy"
  },
  {
    "PropertyID": "28773",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3 Lincoln Ctr"
  },
  {
    "PropertyID": "28774",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3 Overlook Pt"
  },
  {
    "PropertyID": "28775",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3 Parkway N"
  },
  {
    "PropertyID": "28777",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3 Westbrook Corporate Ctr"
  },
  {
    "PropertyID": "4812",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "30 S Wacker Dr"
  },
  {
    "PropertyID": "28782",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "300 Knightsbridge Pkwy"
  },
  {
    "PropertyID": "269677",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "300 N Field Dr"
  },
  {
    "PropertyID": "28784",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "300 N Milwaukee Ave"
  },
  {
    "PropertyID": "28785",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "300 Park Blvd"
  },
  {
    "PropertyID": "4828",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "300 S Riverside Plz"
  },
  {
    "PropertyID": "4829",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "300 S Wacker Dr"
  },
  {
    "PropertyID": "28787",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "300 Tower Pkwy"
  },
  {
    "PropertyID": "370826",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "300 Windsor Dr"
  },
  {
    "PropertyID": "28793",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3000 Finley Rd"
  },
  {
    "PropertyID": "28794",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3000 Lakeside Dr"
  },
  {
    "PropertyID": "540518",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3000 N Halsted St"
  },
  {
    "PropertyID": "28795",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "3000 Woodcreek Dr"
  },
  {
    "PropertyID": "28796",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3001 Butterfield Rd"
  },
  {
    "PropertyID": "28797",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3003 Butterfield Rd"
  },
  {
    "PropertyID": "28801",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3005 Highland Pkwy"
  },
  {
    "PropertyID": "4838",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "301 S Wacker Dr"
  },
  {
    "PropertyID": "28804",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3010 Highland Pky"
  },
  {
    "PropertyID": "28806",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3025 Highland Pky"
  },
  {
    "PropertyID": "397658",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "303 E Army Trail Rd"
  },
  {
    "PropertyID": "578512",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "303 E Main St"
  },
  {
    "PropertyID": "4845",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "303 W Madison St"
  },
  {
    "PropertyID": "28814",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3050 Highland Pky"
  },
  {
    "PropertyID": "28817",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3075 Highland Pky"
  },
  {
    "PropertyID": "608126",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3075 Sanders Rd"
  },
  {
    "PropertyID": "209145",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3100 Sanders Rd"
  },
  {
    "PropertyID": "4877",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "311 S Wacker Dr"
  },
  {
    "PropertyID": "4892",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "315 N Racine Ave"
  },
  {
    "PropertyID": "585601",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "315 S Main St"
  },
  {
    "PropertyID": "350188",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "318 N Carpenter St"
  },
  {
    "PropertyID": "425782",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "320 N Sangamon St"
  },
  {
    "PropertyID": "586676",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "320 W Erie St"
  },
  {
    "PropertyID": "28839",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3200 Highland Ave"
  },
  {
    "PropertyID": "4918",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "321 N Clark St"
  },
  {
    "PropertyID": "4920",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "321 S Plymouth Ct"
  },
  {
    "PropertyID": "4933",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "325 N Wells St"
  },
  {
    "PropertyID": "607866",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "325 S Paulina ST"
  },
  {
    "PropertyID": "28845",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3250 Lacey Rd"
  },
  {
    "PropertyID": "585567",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "329 Remington Blvd"
  },
  {
    "PropertyID": "350428",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "330 N Green St"
  },
  {
    "PropertyID": "397790",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "330 N Green St"
  },
  {
    "PropertyID": "4948",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "330 N Wabash Ave"
  },
  {
    "PropertyID": "28854",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3325 Warrenville Rd"
  },
  {
    "PropertyID": "28856",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "333 E Butterfield Rd"
  },
  {
    "PropertyID": "335618",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "333 N Green St"
  },
  {
    "PropertyID": "4969",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "333 W Wacker Dr"
  },
  {
    "PropertyID": "28863",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3333 Beverly Rd"
  },
  {
    "PropertyID": "28864",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3333 Finley Rd"
  },
  {
    "PropertyID": "540749",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3333 Green Bay Rd"
  },
  {
    "PropertyID": "28865",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3333 Warrenville Rd"
  },
  {
    "PropertyID": "28869",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "340 N Milwaukee Ave"
  },
  {
    "PropertyID": "540112",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "345 N Morgan St"
  },
  {
    "PropertyID": "370829",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "345 Park Blvd"
  },
  {
    "PropertyID": "4996",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "35 W Wacker Dr"
  },
  {
    "PropertyID": "5001",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "350 N Orleans St"
  },
  {
    "PropertyID": "28877",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3500 Lacey Rd"
  },
  {
    "PropertyID": "539454",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "36 E Grand Ave"
  },
  {
    "PropertyID": "335619",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "360 N Green St"
  },
  {
    "PropertyID": "585573",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "365 Surryse Rd"
  },
  {
    "PropertyID": "140699",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "372 W Ontario St"
  },
  {
    "PropertyID": "335631",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "375 N Morgan St"
  },
  {
    "PropertyID": "28900",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "377 E Butterfield Rd"
  },
  {
    "PropertyID": "28902",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3800 Golf Rd"
  },
  {
    "PropertyID": "28906",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3815 E Main St"
  },
  {
    "PropertyID": "541662",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "3890 Salem Lake Dr"
  },
  {
    "PropertyID": "209142",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "395 W Lake St"
  },
  {
    "PropertyID": "28922",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4 Corporate Dr"
  },
  {
    "PropertyID": "28923",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4 Overlook Pt"
  },
  {
    "PropertyID": "28924",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4 Parkway N"
  },
  {
    "PropertyID": "28926",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4 Westbrook Corporate Ctr"
  },
  {
    "PropertyID": "566459",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "40 E Delaware Pl"
  },
  {
    "PropertyID": "28929",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "40 Skokie Blvd"
  },
  {
    "PropertyID": "541974",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "400 E Randolph St"
  },
  {
    "PropertyID": "5080",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "400 N Michigan Ave"
  },
  {
    "PropertyID": "5083",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "400 S LaSalle St"
  },
  {
    "PropertyID": "28935",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "400 Skokie Blvd"
  },
  {
    "PropertyID": "107322",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "401 N Morgan St"
  },
  {
    "PropertyID": "5110",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "401 S Wacker Dr"
  },
  {
    "PropertyID": "140701",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "401 W Superior St"
  },
  {
    "PropertyID": "29508",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "405 Arbor Glen Blvd"
  },
  {
    "PropertyID": "5127",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "405 N Wabash Ave"
  },
  {
    "PropertyID": "5137",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "410 N Michigan Ave"
  },
  {
    "PropertyID": "28949",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4101 Winfield Rd"
  },
  {
    "PropertyID": "335606",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "412 N Wells St"
  },
  {
    "PropertyID": "28959",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4201 Winfield Rd"
  },
  {
    "PropertyID": "28964",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4225 Naperville Rd"
  },
  {
    "PropertyID": "540926",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "425 Joliet St"
  },
  {
    "PropertyID": "28968",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "425 N Martingale Rd"
  },
  {
    "PropertyID": "5206",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "425 S Financial Pl"
  },
  {
    "PropertyID": "28976",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4300 Winfield Rd"
  },
  {
    "PropertyID": "28978",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4320 Winfield Rd"
  },
  {
    "PropertyID": "140705",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "444 N Wells St"
  },
  {
    "PropertyID": "140707",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "445 W Erie St"
  },
  {
    "PropertyID": "427196",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "450 N Dearborn St"
  },
  {
    "PropertyID": "335617",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "450 N Morgan St"
  },
  {
    "PropertyID": "555040",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4545 N Ravenswood Ave"
  },
  {
    "PropertyID": "28998",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "455 Knightsbridge Pkwy"
  },
  {
    "PropertyID": "5243",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "455 N Cityfront Plaza Dr"
  },
  {
    "PropertyID": "540975",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4700 N Marine Dr"
  },
  {
    "PropertyID": "29011",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "475 Half Day Rd"
  },
  {
    "PropertyID": "29012",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "475 N Martingale Rd"
  },
  {
    "PropertyID": "540907",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4801 Southwick Dr"
  },
  {
    "PropertyID": "29022",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "485 E Half Day Rd"
  },
  {
    "PropertyID": "335630",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "488 N LaSalle St"
  },
  {
    "PropertyID": "29024",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "4885 Hoffman Blvd"
  },
  {
    "PropertyID": "29025",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "4901 Searle Pkwy"
  },
  {
    "PropertyID": "397420",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "4954 Oakton St"
  },
  {
    "PropertyID": "29032",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5 Revere Dr"
  },
  {
    "PropertyID": "29033",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5 Westbrook Corporate Ctr"
  },
  {
    "PropertyID": "29037",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "50 NW Point Blvd"
  },
  {
    "PropertyID": "29041",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "500 Lake Cook Rd"
  },
  {
    "PropertyID": "29043",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "500 N Field Dr"
  },
  {
    "PropertyID": "29044",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "500 Park Blvd"
  },
  {
    "PropertyID": "29046",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "500 Skokie Blvd"
  },
  {
    "PropertyID": "5319",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "500 W Madison St"
  },
  {
    "PropertyID": "5320",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "500 W Monroe St"
  },
  {
    "PropertyID": "566490",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "51 W Higgins Rd"
  },
  {
    "PropertyID": "29056",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "510 Lake Cook Rd"
  },
  {
    "PropertyID": "29057",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5100 River Rd"
  },
  {
    "PropertyID": "5375",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "515 N State St"
  },
  {
    "PropertyID": "29067",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "520 Lake Cook Rd"
  },
  {
    "PropertyID": "29069",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5202 Old Orchard Rd"
  },
  {
    "PropertyID": "29070",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5215 Old Orchard Rd"
  },
  {
    "PropertyID": "542030",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "525 E Congress Pkwy"
  },
  {
    "PropertyID": "5405",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "525 W Monroe St"
  },
  {
    "PropertyID": "5406",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "525 W Van Buren St"
  },
  {
    "PropertyID": "29076",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5250 Old Orchard Rd"
  },
  {
    "PropertyID": "29081",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "535 E Diehl Rd"
  },
  {
    "PropertyID": "29086",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "540 Lake Cook Rd"
  },
  {
    "PropertyID": "29091",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5400 Pearl St"
  },
  {
    "PropertyID": "29099",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "5440 Park Pl"
  },
  {
    "PropertyID": "209136",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5450 Prairie Stone Pkwy"
  },
  {
    "PropertyID": "554874",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5460 S University Ave"
  },
  {
    "PropertyID": "5450",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "55 E Monroe St"
  },
  {
    "PropertyID": "29105",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "55 Shuman Blvd"
  },
  {
    "PropertyID": "5458",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "550 W Adams St"
  },
  {
    "PropertyID": "5459",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "550 W Jackson Blvd"
  },
  {
    "PropertyID": "5461",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "550 W Washington Blvd"
  },
  {
    "PropertyID": "29108",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5500 Pearl St"
  },
  {
    "PropertyID": "381424",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5505 Pearl St"
  },
  {
    "PropertyID": "29120",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "555 Skokie Blvd"
  },
  {
    "PropertyID": "608157",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "555 W Adams St"
  },
  {
    "PropertyID": "5477",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "555 W Monroe St"
  },
  {
    "PropertyID": "29127",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "555-577 Aptakisic Rd"
  },
  {
    "PropertyID": "29124",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5550 Prairie Stone Pkwy"
  },
  {
    "PropertyID": "29128",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5595 Trillium Blvd"
  },
  {
    "PropertyID": "29130",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5600 Pearl St"
  },
  {
    "PropertyID": "5488",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "567 W Lake St"
  },
  {
    "PropertyID": "530328",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "57 Franklin St"
  },
  {
    "PropertyID": "29139",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5750 Old Orchard Rd"
  },
  {
    "PropertyID": "178000",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "5800 W Touhy Ave"
  },
  {
    "PropertyID": "335632",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "590 W Madison St"
  },
  {
    "PropertyID": "29146",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "6 Parkway N"
  },
  {
    "PropertyID": "29151",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "600 N Field Dr"
  },
  {
    "PropertyID": "29153",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "600 N US Hwy 45"
  },
  {
    "PropertyID": "541124",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "600 S Damen Ave"
  },
  {
    "PropertyID": "540524",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "610 S Maple Ave"
  },
  {
    "PropertyID": "541917",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "611 E Douglas Rd"
  },
  {
    "PropertyID": "29172",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "6111 N River Rd"
  },
  {
    "PropertyID": "29173",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "6133 N River Rd"
  },
  {
    "PropertyID": "335607",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "625 W Adams St"
  },
  {
    "PropertyID": "5602",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "625 W Monroe St"
  },
  {
    "PropertyID": "29186",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "6250 N River Rd"
  },
  {
    "PropertyID": "29189",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "630 Dundee Rd"
  },
  {
    "PropertyID": "5612",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "633 N Saint Clair St"
  },
  {
    "PropertyID": "5620",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "640 N LaSalle St"
  },
  {
    "PropertyID": "5636",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "645 W Madison St"
  },
  {
    "PropertyID": "29208",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "650 Dundee Rd"
  },
  {
    "PropertyID": "607587",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "650 S Randall RD"
  },
  {
    "PropertyID": "29213",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "651 Prairie Pointe Dr"
  },
  {
    "PropertyID": "29214",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "6600 Mannheim Rd"
  },
  {
    "PropertyID": "29215",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "6600 Mannheim Rd"
  },
  {
    "PropertyID": "540752",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "6640 S Cicero Ave"
  },
  {
    "PropertyID": "29218",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "665 W North Ave"
  },
  {
    "PropertyID": "397537",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "6734 E Joliet Rd"
  },
  {
    "PropertyID": "585777",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "678 Cedar Crossings Dr"
  },
  {
    "PropertyID": "585784",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "680 Barclay Blvd"
  },
  {
    "PropertyID": "540875",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "6957 Olde Creek Rd"
  },
  {
    "PropertyID": "5704",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "70 W Madison St"
  },
  {
    "PropertyID": "29234",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "700 Commerce Dr"
  },
  {
    "PropertyID": "29240",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "700 Oakmont Ln"
  },
  {
    "PropertyID": "397762",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "700 W Chicago Ave"
  },
  {
    "PropertyID": "29243",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "701 E 22nd St"
  },
  {
    "PropertyID": "540724",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "701 Oakmont Ln"
  },
  {
    "PropertyID": "29251",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "707 Skokie Blvd"
  },
  {
    "PropertyID": "578404",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "732 W Randolph St"
  },
  {
    "PropertyID": "29277",
    "PropertyType": "Office",
    "BldgSubType": "Mixed-Use",
    "Address": "740 Waukegan Rd"
  },
  {
    "PropertyID": "530146",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "7456 S State Rd"
  },
  {
    "PropertyID": "29285",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "75 N Fairway Dr"
  },
  {
    "PropertyID": "29286",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "75 NW Point Blvd"
  },
  {
    "PropertyID": "5828",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "750 N Orleans St"
  },
  {
    "PropertyID": "29292",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "750 W Lake Cook Rd"
  },
  {
    "PropertyID": "209101",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "760 W Main St"
  },
  {
    "PropertyID": "5843",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "77 W Jackson Blvd"
  },
  {
    "PropertyID": "5844",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "77 W Wacker Dr"
  },
  {
    "PropertyID": "107333",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "770 N Halsted St"
  },
  {
    "PropertyID": "29316",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8 N Pkwy Blvd"
  },
  {
    "PropertyID": "29317",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "800 Biesterfield Rd"
  },
  {
    "PropertyID": "389839",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "800 W Fulton Market"
  },
  {
    "PropertyID": "542210",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8001 Broadway"
  },
  {
    "PropertyID": "607941",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "801 S Washington St"
  },
  {
    "PropertyID": "29341",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "801 Warrenville Rd"
  },
  {
    "PropertyID": "107344",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "811 W Fulton St"
  },
  {
    "PropertyID": "397669",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "814 W Eastman St"
  },
  {
    "PropertyID": "29356",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "820 Jorie Blvd"
  },
  {
    "PropertyID": "559915",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8201 W Higgins Rd"
  },
  {
    "PropertyID": "536187",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "833 W Lincoln Hwy"
  },
  {
    "PropertyID": "540528",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "839 Broadway"
  },
  {
    "PropertyID": "29372",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8410 W Bryn Mawr Ave"
  },
  {
    "PropertyID": "29373",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8420 W Bryn Mawr Ave"
  },
  {
    "PropertyID": "29374",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8430 W Bryn Mawr Ave"
  },
  {
    "PropertyID": "370827",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "85 NW Point Blvd"
  },
  {
    "PropertyID": "370824",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8535 W Higgins Rd"
  },
  {
    "PropertyID": "29385",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8550 W Bryn Mawr Ave"
  },
  {
    "PropertyID": "536331",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8585 Broadway"
  },
  {
    "PropertyID": "29388",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8600 W Bryn Mawr Ave"
  },
  {
    "PropertyID": "541215",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8601 W Higgins Rd"
  },
  {
    "PropertyID": "608153",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8647 W Higgins Rd"
  },
  {
    "PropertyID": "397577",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "870 N Arlington Heights Rd"
  },
  {
    "PropertyID": "29393",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8700 W Bryn Mawr Ave"
  },
  {
    "PropertyID": "29396",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8725 W Higgins Rd"
  },
  {
    "PropertyID": "29397",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8735 W Higgins Rd"
  },
  {
    "PropertyID": "29398",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8745 W Higgins Rd"
  },
  {
    "PropertyID": "6045",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "875 N Michigan Ave"
  },
  {
    "PropertyID": "29399",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8750 W Bryn Mawr Ave"
  },
  {
    "PropertyID": "29400",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8755 W Higgins Rd"
  },
  {
    "PropertyID": "29402",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "8770 W Bryn Mawr Ave"
  },
  {
    "PropertyID": "29414",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "9 Parkway N"
  },
  {
    "PropertyID": "181033",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "90 Half Day Rd"
  },
  {
    "PropertyID": "6082",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "900 N Michigan Ave"
  },
  {
    "PropertyID": "29420",
    "PropertyType": "Office",
    "BldgSubType": "Medical",
    "Address": "900 Rand Rd"
  },
  {
    "PropertyID": "29422",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "900 Technology Way"
  },
  {
    "PropertyID": "184690",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "900 Tri State Pkwy"
  },
  {
    "PropertyID": "335608",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "905 W Fulton St"
  },
  {
    "PropertyID": "29435",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "909 Davis St"
  },
  {
    "PropertyID": "397709",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "909 W Bliss St"
  },
  {
    "PropertyID": "397739",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "915-939 W North Ave"
  },
  {
    "PropertyID": "6145",
    "PropertyType": "Office",
    "BldgSubType": "Condo",
    "Address": "919 N Michigan Ave"
  },
  {
    "PropertyID": "29455",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "9377 W Higgins Rd"
  },
  {
    "PropertyID": "350176",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "939 W Fulton St"
  },
  {
    "PropertyID": "29456",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "9399 W Higgins Rd"
  },
  {
    "PropertyID": "536340",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "9400 W Higgins Rd"
  },
  {
    "PropertyID": "578359",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "942-944 W Fulton Market"
  },
  {
    "PropertyID": "29468",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "950 Technology Way"
  },
  {
    "PropertyID": "29469",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "9500 W Bryn Mawr Ave"
  },
  {
    "PropertyID": "29470",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "9501 Technology Blvd"
  },
  {
    "PropertyID": "350462",
    "PropertyType": "Office",
    "BldgSubType": "Creative",
    "Address": "952 W Lake St"
  },
  {
    "PropertyID": "29473",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "953 American Ln"
  },
  {
    "PropertyID": "29475",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "9550 W Higgins Rd"
  },
  {
    "PropertyID": "397763",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "9550 W Higgins Rd"
  },
  {
    "PropertyID": "29477",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "9600 W Bryn Mawr Ave"
  },
  {
    "PropertyID": "29481",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "9700 W Higgins Rd"
  },
  {
    "PropertyID": "541858",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "973 Featherstone Rd"
  },
  {
    "PropertyID": "6219",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "980 N Michigan Ave"
  },
  {
    "PropertyID": "555039",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "990 Deerfield Pkwy"
  },
  {
    "PropertyID": "585512",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "999 N Elmhurst Rd"
  },
  {
    "PropertyID": "29505",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "Eola Rd @ I-88"
  },
  {
    "PropertyID": "29506",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "Huntington Blvd"
  },
  {
    "PropertyID": "542140",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "I-55 & I-80"
  },
  {
    "PropertyID": "587940",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "NWC Warrenville Rd & Ferry Rd"
  },
  {
    "PropertyID": "29509",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "Orchard Rd @ I-88"
  },
  {
    "PropertyID": "29510",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "Roselle Rd @ I-90"
  },
  {
    "PropertyID": "29513",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "Willow Rd @ I-294"
  },
  {
    "PropertyID": "29514",
    "PropertyType": "Office",
    "BldgSubType": "Office",
    "Address": "Willow Rd @ I-294"
  }
 ];