import _ from 'lodash';

export default function solution(content) {
  // BEGIN

  const data = content
    .split('\n')
    .map((el) => el.split(','));
  const header = data.shift().map((el) => el.toLowerCase());

  const count = data.length;
  console.log(`Count: ${count}`);

  const weatherData = [];
  data.forEach((row) => {
    const current = {};
    row.forEach((el, index) => {
      current[header[index]] = el;
    });
    weatherData.push(current);
  });

  const cities = [];
  weatherData.forEach((el) => {
    cities.push(el.city);
  });

  const normolizeCities = _.uniq(cities).sort();

  console.log(`Cities: ${normolizeCities.join(', ')}`);

  const max = weatherData.reduce((acc, current) => Number(acc.humidity) > Number(current.humidity) ? acc : current);

  const min = weatherData.reduce((acc, current) => Number(acc.humidity) < Number(current.humidity) ? acc : current);

  console.log(`Humidity: Min: ${min.humidity}, Max: ${max.humidity}`);

  const maxTemp = weatherData.reduce((acc, current) => Number(acc['max temperature']) > Number(current['max temperature']) ? acc : current);

  console.log(`HottestDay: ${maxTemp.date} ${maxTemp.city}`);
  // END

}