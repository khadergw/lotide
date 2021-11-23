//const errormsg = 'failed'
const assertEqual = function(actual, expected) {
  console.assert(actual===expected, {actual:expected}, 'failed')
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


