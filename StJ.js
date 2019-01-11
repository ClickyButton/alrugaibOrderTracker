
    
function test_getJsonArrayFromData()
{
    
    
   var data = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "https://sheets.googleapis.com/v4/spreadsheets/10XgCXhj8ehdtz4pLxeNs_t6_RdKXMEVnc2jO3d2BGLY/values/A:H?key=AIzaSyAGC4Xd4P-NlNLXWOuDvT-ZJX_9P6z5PlQ",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

    return getJsonArrayFromData(data)

    // =>  [{Mainland=Europe, Country=Britain, Planet=Earth, City=London}, {Mainland=Europe, Country=Britain, Planet=Earth, City=Manchester}, {Mainland=Europe, Country=Britain, Planet=Earth, City=Liverpool}, {Mainland=Europe, Country=France, Planet=Earth, City=Paris}, {Mainland=Europe, Country=France, Planet=Earth, City=Lion}]

}
    
    
    
    function getJsonArrayFromData(data)
{

  var obj = {};
  var result = [];
  var headers = data["values"][0];
  var cols = headers.length;
  var row = [];

  for (var i = 1, l = data["values"].length; i < l; i++)
  {
    // get a row to fill the object
    row = data["values"][i];
    // clear object
    obj = {};
    for (var col = 0; col < cols; col++) 
    {
      // fill object with new values
      obj[headers[col]] = row[col];    
    }
    // add object in a final result
    result.push(obj);  
  }

  return result;  

}
    





