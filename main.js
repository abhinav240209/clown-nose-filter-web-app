righteye_x="";
righteye_y="";
lefteye_x="";
lefteye_y="";
width="";
nose_y="";
height="";

function preload() {
    glass_1=loadImage("https://i.postimg.cc/KYGv7LKw/red-glasses.png");
    glass_2=loadImage("https://i.postimg.cc/YqrWDKBv/images.jpg");
    glass_3=loadImage("https://i.postimg.cc/NfjK76RT/10-105839-background-images-hd-picsart-background-hd-background-sunglasses.jpg");
    glass_4=loadImage("https://i.postimg.cc/NMGtq4sk/glasses-4nu-G7-Nu3.jpg");
}

function setup() {
     canvas=createCanvas(800,600);
     canvas.position(435,200);
     camera=createCapture(VIDEO);
     camera.hide(); 
     MyPoseNet=ml5.poseNet(camera,modelLoaded); 
     MyPoseNet.on('pose',gotPoses);
        
}

function draw() {
     image(camera,0,0,canvas.width,canvas.height);
     /*fill("red");
     stroke("white");
     circle(righteye_x-90,righteye_y-50,40);
     circle(lefteye_x-100,lefteye_y-50,40);*/
     //line(righteye_x,righteye_y,lefteye_x,lefteye_y);
     width=lefteye_x-righteye_x;
     height=nose_y-lefteye_y;
     //image(glass_1,righteye_x-125,righteye_y-90,width+80,height+50);
     console.log(width,height);
     image(glass_1,righteye_x+40,righteye_y+30,width+150,height+50);
}

 function modelLoaded() {
      console.log("Model Loaded");
 }

  function gotPoses(results) {
            if(results.length>0){
                 //console.log(results);
                 righteye_x=results[0].pose.rightEye.x;
                 righteye_y=results[0].pose.rightEye.y;
                 lefteye_x=results[0].pose.leftEye.x;
                 lefteye_y=results[0].pose.leftEye.y;
                 nose_y=results[0].pose.nose.y;
                 //console.log(righteye_x,righteye_y,lefteye_x,lefteye_y);
            }
            
  }