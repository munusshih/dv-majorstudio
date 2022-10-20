const svg = d3.select("#svg")
const order = {
    clean: 1,
    playful: 2,
    behaved: 3,
    noisy: 4,
    poopy: 5,
    cute: 6,
    default: Number.MAX_VALUE
}
let index = 0

d3.json('baby.json').then(function (babyData) {
    console.log(babyData)
    createButtons(babyData);
    activeButton("selected")
    displayData(babyData);
});

function createButtons(data) {
    const names = data.map(d => d.Name)

    const buttons = d3.select("#buttons")
        .selectAll("input")
        .data(names)
        .join("input")
        .attr("type", "button")
        .attr("class", "nonSelected")
        .attr("value", d => d)
        .on("click", function (e, d) {

            activeButton("nonSelected");

            index = buttons.nodes()
                .indexOf(this);

            activeButton("selected")

            svg.transition()
                .duration(800)
                .ease(d3.easeCubicOut)
                .style('opacity', 0)
                .on("end", function () {
                    displayData(data)
                });
        })
}

function activeButton(className) {
    d3.select(`input:nth-child(${index+1})`).attr("class", className);
}

function displayData(data) {

    let attrs = data[index].Attr.sort((a, b) =>
        (order[a] || order.default) - (order[b] || order.default) ||
        a > b || -(a < b)
    );

    svg.html("")

    svg.transition()
        .delay(200)
        .duration(800)
        .ease(d3.easeCubicOut)
        .style('opacity', 1);

    attrs.forEach(
        (d) => {
            svg.append("embed")
                .attr("src", "svg/" + d + ".svg")
                .attr("class", "graphic")
        }
    )

    d3.select("#label p").html("("+ attrs.map(d=>" "+d)+" )")
}