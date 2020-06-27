// search btn
$("#search").on("click", function () {

var apiKey = "1XEpBKMALFCDOOevQ3PAViBsB7ReYxD1"

var searchTerm = $("#searchTerm").val()
var numRecords = $("#numRecords").val()
var startYear = $("#startYear").val()
var endYear = $("#endYear").val()


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm + "election&api-key=" + apiKey

$ajax.({
    url:queryURL;
    method: "GET"
}).then(function (response){
console.log(response)

// verify that number of responses is
    
})

})



// clear btn
$("#clear").on("click", function (){

})