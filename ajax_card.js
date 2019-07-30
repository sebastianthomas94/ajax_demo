$(document).ready(function()
{   $("#loader").hide();
    $("button").click(function()
    {
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",

            beforeSend: function()
               { $("#loader").show();},
            
           success:function(data)
            {   
                var count=0;
                //console.log(data);
                var output='<div class="container"><div class="row"><div class="col col-12 col-sm-6" ><table><tr>';
                for(var i in data)
                    {
                        $("#loader").hide();
                        output+='<td><div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+data[i].name+'</h5>';
                        output+='<p class="card-text"><b>Username: </b>'+data[i].username+'</p>';
                        output+='<p class="card-text"><b>Email: </b>'+data[i].email+'</p>';
                        output+='<p class="card-text"><b>address: </b>'+data[i].address.street+" "+data[i].address.suite+" "+data[i].address.city+"</p><p><b>Zipcode: </b>"+data[i].address.zipcode+" "+'</p>';
                        output+='<a href="#" class="btn btn-primary">Contact Me</a> </div></div></td>';

                        count++;
                        if(count>=4)
                        {
                            output+='</tr></div><div class="row"><div class="col col-12 col-sm-6"<table><tr>';
                            count=0;
                        }
                        
                    }
                output+="</tr></table></div></div></div>";
                $("#result").html(output);
            }
        });
    });
});