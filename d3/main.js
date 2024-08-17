function getSummaryFromList(list) {
    const max = list.reduce((acc, [, value]) => Math.max(acc, value), -Infinity);
    const min = list.reduce((acc, [, value]) => Math.min(acc, value), Infinity);
    const total = list.reduce((acc, [, value]) => acc + value * 1, 0);
    const avg = list.length > 0 ? (total / list.length).toFixed(3) * 1 : 0;
    return {
        min: [NaN, -Infinity, Infinity].includes(min) ? 0 : min,
        max: [NaN, -Infinity, Infinity].includes(max) ? 0 : max,
        total: [NaN, -Infinity, Infinity].includes(total) ? 0 : total,
        avg: [NaN, -Infinity, Infinity].includes(avg) ? 0 : avg,
    }
}


// Declare the chart dimensions and margins.
const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 80;
const marginLeft = 40;

const trackList = window.dataJson.trackList || [];

// Declare the x (horizontal position) scale.
const x = d3.scaleUtc();
const xDomain = d3.extent(trackList, (item) => {
    return new Date(item.Time).getTime();
});
x.domain(xDomain)
    .range([marginLeft, width - marginRight]);

// Declare the y (vertical position) scale.
const y = d3.scaleLinear();
const yDomain = d3.extent(trackList, (item) => {
    const value = item.HeartRateBpm?.Value || 0
    return value * 1;
})

y.domain(yDomain)
    .range([height - marginBottom, marginTop]);

// Create the SVG container.
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height);

// Add the x-axis.
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

// Add the y-axis.
svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

// Append a path for the line.
// // Declare the line generator.
const heartRateLine = d3.line();
heartRateLine.x(d => {
        const dataX = x(new Date(d.Time).getTime());
        console.log(d.Time, dataX);
        return dataX;
    })
    .y(d => y(d.HeartRateBpm?.Value || 0));

const speedLine = d3.line();
speedLine.x(d => {
    const dataX = x(new Date(d.Time).getTime());
    console.log(d.Time, dataX);
    return dataX;
})
  .y(d => y(d._speed || 0));

svg.append("path")
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", heartRateLine(trackList));


svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "#ff0000")
  .attr("stroke-width", 1.5)
  .attr("d", speedLine(trackList));


// Append the SVG element.
container.append(svg.node());