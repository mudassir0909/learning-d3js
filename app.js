window.onload = function() {
    function SimpleWidget(spec) {
        var instance = {},
            headline, description;

        instance.render = function() {
            var div = d3.select('body').append('div');

            div.append('h3').text(headline);

            div.attr('class', 'box')
               .attr('style', 'color:' + spec.color)
               .append('p')
               .text(description);

            return instance;
        };

        instance.getDescription = function() {
            return description;
        }

        instance.headline = function(h) {
            if (!arguments.length) return h;
            headline = h;

            return instance;
        };

        instance.description = function(d) {
            if(!arguments.length) return d;
            description = d;

            return instance;
        };

        return instance;
    }

    var widget = SimpleWidget({color: "#D3D3D3"})
                    .headline('How you doin ?')
                    .description("I'm doing good baby! How you doin ??");

    widget.render();
}