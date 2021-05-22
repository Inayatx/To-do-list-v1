//jshint esversion:6

module.exports.getDate = getDate;

// console.log(module);

function getDate(){

  const today = new Date();

  const options = {
    weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const day = today.toLocaleDateString("en-US", options);
  return day;
}

//both are same

exports.getDay = function getDay(){

  const today = new Date();

  const options = {
    weekday: 'long',
  };

  return today.toLocaleDateString("en-US", options);
};

// console.log(module.exports);
