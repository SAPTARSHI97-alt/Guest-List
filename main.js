Name_of_the_Guest_array = [];

function submit()
{
 
     var name_1= document.getElementById("Name_of_the_Guest_1").value;
     var name_2= document.getElementById("Name_of_the_Guest_2").value;
     var Name_3= document.getElementById("Name_of_the_Guest_3").value;
     var name_4= document.getElementById("Name_of_the_Guest_4").value;

     Name_of_the_Guest_array.push(name_1);
     Name_of_the_Guest_array.push(name_2);
     Name_of_the_Guest_array.push(Name_3);
     Name_of_the_Guest_array.push(name_4);
      
     console.log(Name_of_the_Guest_array);
     document.getElementById("display_name").innerHTML= Name_of_the_Guest_array;
     document.getElementById("submit_button").style.display = "none";
     document.getElementById("sort_button").style.display ="inline-block";

}
function sorting()
{
    Name_of_the_Guest_array.sort();
    console.log(Name_of_the_Guest_array);
    document.getElementById("display_name").innerHTML = Name_of_the_Guest_array;
}