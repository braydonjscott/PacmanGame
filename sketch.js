var pacman, ghost1, ghost2, ghost3, ghost4
var pacmanimage, ghost1image, ghost2image, ghost3image, ghost4image
var wall1,wall2,wall3,wall4,wall5,wall6,wal,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15
var target1,target2,target3,target4,target5
var gameState=1

function preload(){
    ghost1image=loadImage('sprites/ghost1.png')
    ghost2image=loadImage('sprites/ghost2.png')
    ghost3image=loadImage('sprites/ghost3.png')
    ghost4image=loadImage('sprites/ghost4.png')
    pacmanimage=loadImage('sprites/pacman.png')
}

function setup(){
    createCanvas(800,400)
    pacman=createSprite(655,270,25,25)
    pacman.addImage(pacmanimage)
    pacman.scale=0.05
    ghost1=createSprite(400,140,25,25)
    ghost1.addImage(ghost1image)
    ghost1.scale=0.1
    ghost2=createSprite(400,260,25,25)
    ghost2.addImage(ghost2image)
    ghost2.scale=0.1
    ghost3=createSprite(245,150,25,25)
    ghost3.addImage(ghost3image)
    ghost3.scale=0.095
    ghost4=createSprite(565,250,25,25)
    ghost4.addImage(ghost4image)
    ghost4.scale=0.1
    wall1=createSprite(400,100,600,20)
    wall2=createSprite(400,300,600,20)
    wall3=createSprite(690,200,20,200)
    wall4=createSprite(110,200,20,200)
    wall5=createSprite(270,140,20,75)
    wall6=createSprite(270,260,20,75)
    wall7=createSprite(530,140,20,75)
    wall8=createSprite(530,260,20,75)
    wall9=createSprite(285,168,50,20)
    wall10=createSprite(285,232,50,20)
    wall11=createSprite(515,168,50,20)
    wall12=createSprite(515,232,50,20)
    wall13=createSprite(180,160,20,100)
    wall14=createSprite(190,200,70,20)
    wall15=createSprite(180,280,20,50)
    wall16=createSprite(620,240,20,100)
    wall17=createSprite(610,200,70,20)
    wall18=createSprite(620,120,20,50)
    target=createSprite(145,130,20,20)
    target.shapeColor='lime'
    ghost1.velocityX=4
    ghost2.velocityX=-4
    ghost3.velocityY=-4
    ghost4.velocityY=4
}

function draw(){
    background('black')
    if(keyDown('up')&&gameState===1){
        pacman.y-=5
    }
    if(keyDown('left')&&gameState===1){
        pacman.x-=5
    }
    if(keyDown('right')&&gameState===1){
        pacman.x+=5
    }
    if(keyDown('down')&&gameState===1){
        pacman.y+=5
    }
    ghost1.bounceOff(wall5)
    ghost1.bounceOff(wall7)
    ghost2.bounceOff(wall6)
    ghost2.bounceOff(wall8)
    ghost3.bounceOff(wall1)
    ghost3.bounceOff(wall2)
    ghost4.bounceOff(wall1)
    ghost4.bounceOff(wall2)
    pacman.collide(wall1)
    pacman.collide(wall2)
    pacman.collide(wall3)
    pacman.collide(wall4)
    pacman.collide(wall5)
    pacman.collide(wall6)
    pacman.collide(wall7)
    pacman.collide(wall8)
    pacman.collide(wall9)
    pacman.collide(wall10)
    pacman.collide(wall11)
    pacman.collide(wall12)
    pacman.collide(wall13)
    pacman.collide(wall14)
    pacman.collide(wall15)
    pacman.collide(wall16)
    pacman.collide(wall17)
    pacman.collide(wall18)
    if(pacman.isTouching(ghost1)||pacman.isTouching(ghost2)||pacman.isTouching(ghost3)||pacman.isTouching(ghost4)){
        ghost1.setVelocity(0,0)
        ghost2.setVelocity(0,0)
        ghost3.setVelocity(0,0)
        ghost4.setVelocity(0,0)
        pacman.setVelocity(0,0)
        gameState=0
        fill('red')
        textSize(40)
        text("Game Over",310,210)
    }
    if(pacman.isTouching(target)){
        ghost1.setVelocity(0,0)
        ghost2.setVelocity(0,0)
        ghost3.setVelocity(0,0)
        ghost4.setVelocity(0,0)
        pacman.setVelocity(0,0)
        gameState=0
        target.visible=false
        fill('lime')
        textSize(40)
        text("Game Completed",250,210)
    }
    drawSprites()
}