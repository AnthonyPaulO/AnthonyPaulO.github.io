function onReady()
   {
   //alert('Hello world');
   }

var serviceUrl = 'https://localhost:44300/api/test';

function sendRequest()
{
   var method = $('#method').val();

   $.ajax({
      dataType: "text",
      type: method,
      url: serviceUrl
   }).done(function (data)
   {
      $('#value1').text(data);
   }).error(function (jqXHR, textStatus, errorThrown)
   {
      $('#value1').text(jqXHR.responseText + textStatus);
   });
}
