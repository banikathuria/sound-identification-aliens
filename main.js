https://teachablemachine.withgoogle.com/models/9RRt11F--/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9RRt11F--/model.json",modelLoaded)
  }
  function modelLoaded(){
      classifier.classify(gotResult)
  }
  function gotResult(error,result){
      if (error){console.log(error)}
 else 
  {console.log(result)
document.getElementById("sound").innerHTML= result[0].label
document.getElementById("accurate").innerHTML= result[0].confidence
if(result[0].label=="Bell"){
  document.getElementById("alien1").src="aliens-01.gif"
  document.getElementById("alien2").src="aliens-02.png"
  document.getElementById("alien3").src="aliens-03.png"
  document.getElementById("alien4").src="aliens-04.png"
}
  if(result[0].label=="Chime"){
    document.getElementById("alien1").src="aliens-01.png"
    document.getElementById("alien2").src="aliens-02.gif"
    document.getElementById("alien3").src="aliens-03.png"
    document.getElementById("alien4").src="aliens-04.png"
  
  }
  if(result[0].label=="Clap"){
    document.getElementById("alien1").src="aliens-01.png"
    document.getElementById("alien2").src="aliens-02.png"
    document.getElementById("alien3").src="aliens-03.gif"
    document.getElementById("alien4").src="aliens-04.png"
  
  }
  if(result[0].label=="Background Noise"){
    document.getElementById("alien1").src="aliens-01.png"
    document.getElementById("alien2").src="aliens-02.png"
    document.getElementById("alien3").src="aliens-03.png"
    document.getElementById("alien4").src="aliens-04.gif"
  
  }


}

  }

