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
    let countedNames = events.reduce(function (allNames, event) {
      if (event.name in allNames) {
        allNames[event.name]++;
      } else {
        allNames[event.name] = 1;
      }
      return allNames;
    }, {});
    return countedNames;
  }
};
