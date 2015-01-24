window.onload = function() {
    var array = [3, 2, 11, 7, 6, 4, 10, 8, 15];

    d3.select('#min').text(d3.min(array));
    d3.select('#max').text(d3.max(array));
    d3.select('#extent').text(d3.extent(array));
    d3.select('#sum').text(d3.sum(array));
    d3.select('#median').text(d3.median(array));
    d3.select('#mean').text(d3.mean(array));
    d3.select('#asc').text(array.sort(d3.ascending));
    d3.select('#desc').text(array.sort(d3.descending));
    d3.select('#quantile').text(
        d3.quantile(array.sort(d3.ascending), 0.25)
    );
    d3.select('#bisect').text(
        d3.bisect(array.sort(d3.ascending), 6)
    );

     var records = [
        {quantity: 2, total: 190, tip: 100, type: "tab"},
        {quantity: 2, total: 190, tip: 100, type: "tab"},
        {quantity: 1, total: 300, tip: 200, type: "visa"},
        {quantity: 2, total: 90, tip: 0, type: "tab"},
        {quantity: 2, total: 90, tip: 0, type: "tab"},
        {quantity: 2, total: 90, tip: 0, type: "tab"},
        {quantity: 1, total: 100, tip: 0, type: "cash"},
        {quantity: 2, total: 90, tip: 0, type: "tab"},
        {quantity: 2, total: 90, tip: 0, type: "tab"},
        {quantity: 2, total: 90, tip: 0, type: "tab"},
        {quantity: 2, total: 200, tip: 0, type: "cash"},
        {quantity: 1, total: 200, tip: 100, type: "visa"}
    ];

    var nest = d3.nest()
                .key(function(d) {
                    return d.type;
                })
                .key(function(d) {
                    return d.tip;
                })
                .entries(records);

    d3.select('#nest').html(printNest(nest, ''));


    function printNest(nest, out, i) {
        if (i===undefined) i = 0;

        var tab = "";
        for(var j=0; j < i; ++j) {
            tab += " ";
        }

        nest.forEach(function (e) {
            if (e.key)
                out += tab + e.key + "<br>";
            else
                out += tab + printObject(e) + "<br>";

            if (e.values)
                out = printNest(e.values, out, ++i);
            else
                return out;
        });

        return out;
    }

    function printObject(obj) {
        var s = "{";
        for (var f in obj) {
            s += f + ': ' + obj[f] + ", ";
        }
        s += "}";

        return s;
    }
}