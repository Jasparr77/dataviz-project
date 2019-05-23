function showTime(){
    main = d3.select(".aboutsite")
    parseTime = d3.timeParse("%B %Y");
    formatTime = d3.timeFormat("%B '%y")

    d3.csv("https://gist.githubusercontent.com/Jasparr77/4f1f0fe8e08792dcf3cdf9ba089618b4/raw/e7d380122b0d9c505b76e569181cdc917ee4ccfa/aboutJasper.csv",function(data){

        data.forEach(function(d) {    
            d.start = parseTime(d.start)
            d.finish == "Today" ? d.finish = new Date() : d.finish = parseTime(d.finish)
        })

        console.log("data: ",data)

        vizSpace = main.append("svg")
        .style("height","450px")
        .style("width","800px")

        var div = d3.select(".aboutsite").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0)
            .style("position","absolute")
            .style("text-align","center")
            .style("background","whitesmoke")
            .style("padding","8px")
            .style("width","20vw")
            .style("border-radius","8px")
            .style("pointer-events","none");

        var y  = d3.scaleBand()
        .domain(['Skills','Focus','Work','Education'])
        .range([400,0])
        var yAxis = d3.axisLeft(y).tickSizeOuter(0);
        
        var x = d3.scaleTime()
        .domain([new Date(2007, 2, 0, 0),new Date()])
        .range([0,700])
        var xAxis = d3.axisBottom(x).ticks(4).tickSizeOuter(0);
            
        vizSpace.selectAll("rect").append("g")
        .data(data).enter().append("rect")
            .attr("class",function(d){return d.type;})
            .attr("id",function(d){return "line ",d.name;})
            .attr("fill","lightgrey")
            .attr("x", function(d) { return x(d.start)})
            .attr("y", function(d) { return y(d.type)})
            .attr("height", ".25vh")
            .attr("width", function(d){ return x(d.finish)-x(d.start);})
            .attr("transform","translate(100,47.5)")

        vizSpace.selectAll(".image").append("g")
        .data(data).enter().append("image")
        .attr("class",function(d){return d.type;})
        .attr("id",function(d){ return d.logo; })
        .attr("x",function(d){return x(d.start);})
        .attr("y",function(d){return y(d.type);})
        .attr("height","60px")
        .attr("width","60px")
        .attr("xlink:href",function(d){return "../hobby-dataviz-portfolio/static/images/"+d.logo;})
        .attr("transform","translate(80,20)")
        //   hoveraction
          .on("mouseover", function(d) {
            d3.select(this)
            .style("opacity",1)
            .attr("stroke","black")
            .attr("stoke-width",".2vw");
            div.html( "<b>"+d.name+"</b>" + " <br> "+ d.details)
                .transition().duration(600)
                .style("opacity",1)
                .style("left", (d3.event.pageX-150) + "px")
                .style("top", (d3.event.pageY-60) + "px");
        })// fade out tooltip on mouse out               
        .on("mouseout", function() {
            d3.select(this)
            .style("opacity",.8)
            .attr("stroke","none")
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });
          

        vizSpace.append("g")
        .attr("class","axis y")
        .attr("transform","translate(100,0)")
        .attr("stroke","none")
        .style("font-size","1.25vw")
        .style("font-family","Quicksand")
        .call(yAxis)

        vizSpace.append("g")
        .attr("class","axis x")
        .attr("transform","translate(100,400)")
        .style("font-size","1.25vw")
        .style("font-family","Quicksand")
        .call(xAxis)

    })
}
showTime()