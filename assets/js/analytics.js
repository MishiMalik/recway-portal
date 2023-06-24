

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
    ['2004/05',  165,      938,         522,             998,           450,      614.6],
    ['2005/06',  135,      1120,        599,             1268,          288,      682],
    ['2006/07',  157,      1167,        587,             807,           397,      623],
    ['2007/08',  139,      1110,        615,             968,           215,      609.4],
    ['2008/09',  136,      691,         629,             1026,          366,      569.6]
  ]);

  var options = {
    // title : 'Monthly Coffee Production by Country',
    
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  var chart2 = new google.visualization.ComboChart(document.getElementById('chart_div2'));
  var chart3 = new google.visualization.ComboChart(document.getElementById('chart_div3'));
  var chart4 = new google.visualization.ComboChart(document.getElementById('chart_div4'));
  chart.draw(data, options);
  chart2.draw(data, options);
  chart3.draw(data, options);
  chart4.draw(data, options);
  var chart5 = new google.visualization.ComboChart(document.getElementById('chart_div5'));
  chart5.draw(data, options);
  var chart6 = new google.visualization.ComboChart(document.getElementById('chart_div6'));
  chart6.draw(data, options);
}