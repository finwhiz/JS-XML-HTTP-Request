<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      //handles the json request
      req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload=function(){
      
        //turns response into an object we can work with
        json=JSON.parse(req.responseText);
        
        //Note that the json object this assumes we are using has this structure
        //[
        //  {
        //    "id":0,
        //      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
        //      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
        //      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
        //    ]
        //  }
        //]
        
        
        //you could call this html variable anything you want but its where we'll create some content with the contents of the json objects
        var html = "";

        //this particular json file would be an object of objects.  This loops through the objects and pulls out the keys for each so we can reference their contents
        json.forEach(function(val){
          var keys = Object.keys(val)
            //note that 'id' 'imageLink' 'altText' and 'codeNames' are all the references in the json file 
            html+="<img id='" + val['id'] + "' src='" + val['imageLink'] + "' alt='" + val['altText'] + "'>"
            html += "<br>"
            html += val['codeNames']
            html += "<br>"
        }
        );
        // puts the html variable we were working on into the 'message' div
        document.getElementsByClassName('message')[0].innerHTML=html;
      };
    };
  });
</script>
<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>
<h1>Finder</h1> 
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
