export const countEvents = (events) => {
  // const { events } = this.props;
  // let countedNames = events.reduce(function (allNames, event) {
  //   if (event.name in allNames) {
  //     allNames[event.name]++;
  //   } else {
  //     allNames[event.name] = 1;
  //   }
  //   return allNames;
  // }, {});
  // console.log("countedNames: ", countedNames);
  if (events.length === 0) return {};
  else {
    // Create object containing Artist as key and count as value
    // let countedNames = events.reduce(function (allNames, event) {
    //   if (event.name in allNames) {
    //     allNames[event.name]++;
    //   } else {
    //     allNames[event.name] = 1;
    //   }
    //   return allNames;
    // }, {});

    // define empty arrays to contain labels and data for the bar chart
    let labels = [];
    let data = [];

    for (let i = 0; i < events.length; i++) {
      const found = labels.indexOf(events[i].name);
      if (found > -1) {
        data[i]++;
      } else {
        labels.push(events[i].name);
        data.push(1);
      }
    }

    return { labels, data };
    // iterate through each artist key - count value and push onto the labels and data arrays

    // return countedNames;

    // create labels array and data array from count object
    // const labelsArray = count
  }
};
