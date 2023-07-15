var distanceBetweenBusStops = function (distance, start, destination) {
  let totalDistance = distance.reduce((a, b) => a + b, 0);
  let clockWiseDistance = 0;
  let begin = Math.min(start, destination);
  let finish = Math.max(start, destination);
  for (let i = begin; i < finish; i++) {
    clockWiseDistance += distance[i];
  }
  return Math.min(clockWiseDistance, totalDistance - clockWiseDistance);
};
console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2));
console.log(distanceBetweenBusStops([3, 6, 7, 2, 9, 10, 7, 16, 11], 6, 2));
