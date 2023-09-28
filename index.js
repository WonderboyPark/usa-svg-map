
const path = document.querySelectorAll('[title]');

let emily = [
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Maine",
  "Maryland",
  "Massachusetts",
  "New Hampshire",
  "New Jersey",
  "New York",
  "Ohio",
  "Pennsylvania",
  "Rhode Island",
  "Vermont",
  "West Virginia"
];

let malik = [
    "Arkansas",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Nebraska",
  "North Carolina",
  "North Dakota",
  "South Carolina",
  "South Dakota",
  "Virginia",
  "Wisconsin"   
];

let zach = [
    "Alabama",
  "Florida",
  "Georgia" 
];


let sharron = [
"Alaska",
 "Arizona",
 "California",
 "Colorado",
 "Hawaii",
 "Idaho",
 "Montana",
 "Nevada",
 "New Mexico",
 "Oklahoma",
 "Oregon",
 "Texas",
 "Utah",
 "Washington",
 "Wyoming"
];


path.forEach(function(path) {

    var titleAttributeValue = path.getAttribute("title");

    // .lee-maroon{fill:var(--lee-maroon-state);background-color:var(--lee-maroon-state)}
	// .lee-navy{fill:var(--lee-navy-state);background-color:var(--lee-navy-state);}
	// .lee-flame{fill:var(--lee-flame-state);background-color:var(--lee-flame-state);}
	// .lee-umbrella{fill:var(--lee-umbrella-state);background-color:var(--lee-umbrella-state);}
	// .lee-downtown{fill:var(--lee-downtown-state);background-color:var(--lee-downtown-state);}
	// .lee-fountain{fill:var(--lee-fountain-state);background-color:var(--lee-fountain-state);}
	// .lee-parchment{fill:var(--lee-parchment-state);background-color:var(--lee-parchment-state);}
	// .lee-doxology{fill:var(--lee-doxology-state);background-color:var(--lee-doxology-state);}
	// .lee-valor{fill:var(--lee-valor-state);background-color:var(--lee-valor-state);}
	// .lee-a-gold{fill:var(--lee-a-gold-state);background-color:var(--lee-a-gold-state);}
	// .lee-a-park{fill:var(--lee-a-park-state);background-color:var(--lee-a-park-state);}
	// .lee-growth{fill:var(--lee-growth-state);background-color:var(--lee-growth-state);}
	// .tn-state{fill:var(--lee-tn-state);background-color:var(--lee-tn-state);}
    
    for (let i = 0; i < emily.length; i++) {
        var textValue = emily[i];
        if(textValue === titleAttributeValue) {
            // console.log("yep")
            path.classList.add('lee-flame')
            path.parentElement.setAttribute('href', '/#')
        }
    }

    for (let i = 0; i < malik.length; i++) {
        var textValue = malik[i];
        if(textValue === titleAttributeValue) {
            // console.log("yep")
            path.classList.add('lee-umbrella')
            path.parentElement.setAttribute('href', '/#')
        }
    }

    for (let i = 0; i < zach.length; i++) {
        var textValue = zach[i];
        if(textValue === titleAttributeValue) {
            // console.log("yep")
            path.classList.add('lee-valor')
            path.parentElement.setAttribute('href', '/#')
        }
    }

    for (let i = 0; i < sharron.length; i++) {
        var textValue = sharron[i];
        if(textValue === titleAttributeValue) {
            // console.log("yep")
            path.classList.add('lee-downtown')
            path.parentElement.setAttribute('href', '/#')
        }
    }

});
