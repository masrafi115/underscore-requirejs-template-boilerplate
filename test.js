require.config({ 
  baseUrl: window.location.origin + window.location.pathname.replace(/\/$/, ""),
    paths: {
        templates: 'templates',
        underscore: 'libs/underscore-min',
        text: 'libs/text'
    }
});


requirejs(['underscore', 'text!templates/tem.html'], function(_, yourTemplate ) {
    var compiledTemplate = _.template(yourTemplate);
    var renderedHTML = compiledTemplate({ name: 'moe', tag: '<h4>', end: '</h4>' });
    const headerEl = document.getElementById('my-container')
    headerEl.textContent = renderedHTML;
});

/*$.get('templates/my-template.html', function(templateSource) {
  // Compile the template into a function
  var compiledTemplate = _.template(templateSource);

  // Define some data to populate the template with
  var data = {
    title: "My Title",
    description: "This is my description."
  };

  // Render the template with the data
  var html = compiledTemplate(data);

  // Insert the rendered HTML into the DOM
  $("#my-container").html(html);
});
*/
