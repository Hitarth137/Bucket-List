var item_in_bucket_list = [];
    
function submit()
{
    var ItemName = document.getElementById("B_List").value;
	item_in_bucket_list.push(ItemName);

	console.log(ItemName);
        
    console.log(item_in_bucket_list);
    var lenght_of_item_name = item_in_bucket_list.length;
    console.log(lenght_of_item_name);
	document.getElementById("display_item_name").innerHTML=item_in_bucket_list.toString();
	
   }

function sorting()
{
	item_in_bucket_list.sort();
	var i= item_in_bucket_list.join("<br>");
    console.log(item_in_bucket_list);		
	document.getElementById("sorted").innerHTML=i.toString();
	}

function show()
{
	var i= item_in_bucket_list.join("<br>");
	console.log(item_in_bucket_list);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	}
