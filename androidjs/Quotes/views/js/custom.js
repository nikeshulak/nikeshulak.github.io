// var apiUrl = "https://nikesh.tiiny.site";
var apiUrl = "data"; // local

$(document).ready(function(){

  function arrayToHtml(result) {
    $.each(result?.data, function(i, field){
      // console.log('field', field.text)

      if(!field.disabled)
      $("#quotes").append(`<p class="source ${field.source}">${field.text}</p>`);

    });
  }

  function refetchApi() {
    $.getJSON(`${apiUrl}/quotes.json`, function(result){
      console.log('result', result)

      // save to local storage on refetching api
      localStorage.setItem("quotesResult", JSON.stringify(result));

      $("#quotes").html('');
      arrayToHtml(result);

    });
  }

  // if you want to refetch on document load - that will unnecessarily waste bandwidth
  // refetchApi();

  $("#refetch").click(function(){
    
    // $.getJSON("demo_ajax_json.js", function(result){
    //   $.each(result, function(i, field){
    //     // console.log('filed', field)
    //     $("#demo").append(field + " ");
    //   });
    // });

    refetchApi();

  });


  var quotesResult = localStorage.getItem("quotesResult");
  var result = JSON.parse(quotesResult);
  console.log("quotesResult", result );
  arrayToHtml(result);

  var dist = result.data?.filter((obj, index, self) =>
    index === self.findIndex((t) => t.source === obj.source)
  );

  console.log(dist);
  arrayToHtmlSource(dist);

  function arrayToHtmlSource(result) {
    $.each(result, function(i, field){
      // console.log('field', field.text)

      if(!field.disabled)
        $("#source-list ul").append(`<li>${field.source}</li>`)

    });
  }

  $("#source-list li").click(function() {
    var source = $(this).text();

    $(".source").hide();
    $(".source."+source).show();
  })
});