$(document).ready(function()
{
    $("button").click(function()
    {
        $.ajax({
            type:"GET",
            url:"mydata.json",
            success:function(data)
            {
                //console.log(data);
                var output="<table> <thead> <tr> <th> Name </th><th> Age </th><th> D.O.B </th><th> College </th><th> Mobile No: </th></thead>";
                    for(var i in data)
                    {
                        output+="<tr><td>"+data[i].name+"</td>";
                        output+="<tr><td>"+data[i].age+"</td>";
                        output+="<tr><td>"+data[i].dob+"</td>";
                        output+="<tr><td>"+data[i].college+"</td>";
                    }
                output+="</table>";
                $("#result").html(output);
            }
        });
    });
});