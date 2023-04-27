Webcam.set({
    width:400,
    height:300,
    image_format:"png",
    png_quality:90
    
})

camera=document.getElementById("camera")
Webcam.attach("camera")

function capture_image(){
    Webcam.snap(function (image_url) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+image_url+'"/>';
    })
}

console.log("ml5",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/E-GDAtVYo/model.json",modelloaded)

function modelloaded(){
    console.log ("modelloaded")
}

function check(){
    img=document.getElementById("captured_image")
    classifier.classify(img,gotresult)

}

function gotresult(error,result){
    if(error){
        console.error (error)

    }
    else{
        console.log (result)
        document.getElementById("object_name").innerHTML=result[0].label
        document.getElementById("object_accuracy").innerHTML=(result[0].confidence*100).toFixed(2)
    }
}