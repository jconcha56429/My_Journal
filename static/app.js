// var input_text = d3.select(".form-control").property("value")
var input = d3.select("input")

function update_text(){
    let changedElement = d3.select(this);
    let elementValue = changedElement.property("value");

    let vara = new Vara("#container", "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json", [{
  text: elementValue,
  fontSize: 48,
  y:10
}], {
  strokeWidth: 2,
  textAlign:"center"
});

  }

d3.selectAll("input").on("change", update_text);
