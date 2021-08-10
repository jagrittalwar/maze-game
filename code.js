var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(125, 45,23,200);
var wall2  = createSprite(30, 125,100,23);
var wall3 = createSprite(170, 80,75,23);
var wall4 = createSprite(250, 87,23,110);
var wall5 = createSprite(330, 70,50,23);
var wall6 = createSprite(398, 100,23,100);
var wall7 = createSprite(90, 230,23,100);
var wall8 = createSprite(225, 175,100,23);
var wall9 = createSprite(400, 200,175,23);
var wall10 = createSprite(324, 247,23,70);
var wall11 = createSprite(325, 375,23,100);
var wall12 = createSprite(30, 268,100,23);
var wall13 = createSprite(90, 300,23,100);
var wall14 = createSprite(255, 360,120,23);
var wall15 = createSprite(150, 210,120,23);
var wall16 = createSprite(80, 380,100,25);
var wall17 = createSprite(244, 270,120,23);
var wall18 = createSprite(200, 380,23,120);
var sofia  = createSprite(22, 56,17,17);
var cup = createSprite(380, 310,50,90);

function draw() {
  background("pink")
    if (keyDown("right")) {
      sofia.velocityX=2;
      sofia.velocityY=0;
      
    }
    if (keyDown("left")) {
      sofia.velocityX=-2;
      sofia.velocityY=0;
    }
    if (keyDown("up")) {
      sofia.velocityX=0;
      sofia.velocityY=-2;
    }
    if (keyDown("down")) {
      sofia.velocityX=0;
      sofia.velocityY=2;
    }
    if (keyDown("Space")) {
      sofia.x=22
      sofia.y=56
    }
    
    if (sofia.isTouching(wall1)) {
      sofia.x=22
      sofia.y=56
      
    }
    if (sofia.isTouching(wall2)) {
      sofia.x=22
      sofia.y=56
      
    }
if (sofia.isTouching(wall3)) {
      sofia.x=22
      sofia.y=56
      
    }
  if (sofia.isTouching(wall4)) {
      sofia.x=22
      sofia.y=56
      
    }
  if (sofia.isTouching(wall5)) {
      sofia.x=22
      sofia.y=56
      
    }
 if (sofia.isTouching(wall6)) {
      sofia.x=22
      sofia.y=56
      
    } 
 if (sofia.isTouching(wall7)) {
      sofia.x=22
      sofia.y=56
      
    } 
 if (sofia.isTouching(wall8)) {
      sofia.x=22
      sofia.y=56
      
    } 
  if (sofia.isTouching(wall9)) {
      sofia.x=22
      sofia.y=56
      
    }
  if (sofia.isTouching(wall10)) {
      sofia.x=22
      sofia.y=56
      
    }
  if (sofia.isTouching(wall11)) {
      sofia.x=22
      sofia.y=56
      
    }
  if (sofia.isTouching(wall12)) {
      sofia.x=22
      sofia.y=56
      
    }
  if (sofia.isTouching(wall13)) {
      sofia.x=22
      sofia.y=56
      
    }
  if (sofia.isTouching(wall14)) {
      sofia.x=22
      sofia.y=56
      
    }
  if (sofia.isTouching(wall15)) {
      sofia.x=22
      sofia.y=56
      
    }
  if (sofia.isTouching(wall16)) {
      sofia.x=22
      sofia.y=56
      
    }
  if (sofia.isTouching(wall17)) {
      sofia.x=22
      sofia.y=56
      
    }
  if (sofia.isTouching(wall18)) {
      sofia.x=22
      sofia.y=56
      
    }
    
    if (sofia.collide(cup)) {
      text("You Win",220,220);
      fill("white");
      textFont("Arial")
      textSize("18")
      textAlign("CENTER")
    }
    
    
    
    
    
  
   wall1.shapeColor=("brown")
   wall2.shapeColor=("red")
   wall3.shapeColor=("brown")
   wall4.shapeColor=("red")
   wall5.shapeColor=("brown")
   wall6.shapeColor=("red")
   wall7.shapeColor=("brown")
   wall8.shapeColor=("red")
   wall9.shapeColor=("brown")
   wall10.shapeColor=("red")
   wall11.shapeColor=("brown")
   wall12.shapeColor=("red")
   wall13.shapeColor=("brown")
   wall14.shapeColor=("red")
   wall15.shapeColor=("brown")
   wall16.shapeColor=("red")
   wall17.shapeColor=("brown")
   wall18.shapeColor=("red")
  sofia.shapeColor=("green")
  cup.shapeColor=("orange")
drawSprites();

}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
