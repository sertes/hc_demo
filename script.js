$(function(){
    console.log('ready');

    $.getJSON(
        'data.json',
        function(json){
            createChart(json)
        },
        'json');

    function createChart(data) {


        Highcharts.chart('container', {
            credits: {enabled: false},
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Температура газа в атмосфере Германии'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Выделите область мышью для изменения масштаба' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Градусы'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {},

            series: [{
                type: 'line',
                name: '2016',
                data: data
            }]
        });
    }

});