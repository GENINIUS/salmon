narizx=0
narizy=0
distancia=0
pulsoesquerdox=0
pulsodireitox=0

function setup(){
    canvas=createCanvas(500,500)
  
    video=createCapture(VIDEO)
    video.size(400,300)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)

}
function draw() {
      canvas.center()
      document.getElementById("cuboTamanho").innerHTML="o tamanho da altura e a lagura do quadrado é: "+distancia
      fill("lightpink")
      square(narizx,narizy,distancia)
}
function modelLoaded() {
    console.log("modelo carregado")
    
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results)
        narizx=results[0].pose.nose.x
        narizy=results[0].pose.nose.y
        pulsoesquerdox=results[0].pose.leftWrist.x
        pulsodireitox=results[0].pose.rigthWrist.x
        distancia=floor(pulsoesquerdox-pulsodireitox)
        
        
    }
}

