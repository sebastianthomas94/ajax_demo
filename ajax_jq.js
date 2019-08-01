$(document).ready(function()
{
    $("button").click(function()
    {
        $.ajax({
            type:"GET",
            $.getJSON("test.json", function(json) {
                console.log(json); // this will show the info it in firebug console
            });,
            success:function(data)
            {
                //console.log(data);
                var output="<table class ='table' border='1'> <thead> <tr> <th> Name </th><th> Username </th><th> Company </th><th> Mobile No: </th><th> Address </th></thead>";
                    for(var i in data)
                    {
                        output+="<tr><td>"+data[i].name+"</td>";
                        output+="<td>"+data[i].username+"</td>";
                        output+="<td>"+data[i].company.name+"</td>";
                        output+="<td>"+data[i].phone+"</td>";
                        output+="<td>"+data[i].address.street+data[i].address.suite+data[i].address.city+data[i].address.zipcode+"</td></tr>"

                    }
                output+="</table>";
                $("#result").html(output);
            }
        });
    });
});