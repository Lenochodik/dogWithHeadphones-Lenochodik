/*
@title: Dog with headphones
@author: Lenochodik
@snapshot: dog1.png
*/

const width = 125;
const height = 125;
setDocDimensions(width, height);


const t = new bt.Turtle()

const faceTranslation = 8

const noseRadius = 5
const mouthRadius = 8
const eyeHeight = 74 - faceTranslation
const headHeight = 26

// Nose
t.jump([width / 2, height / 2 - faceTranslation])
t.arc(360, noseRadius)

// Mouth
t.right(90)
t.arc(90, mouthRadius)
t.jump([width / 2, height / 2 - faceTranslation])
t.right(90)
//t.forward(100)
t.arc(-90, mouthRadius)

//Right eye
t.jump([75.5, eyeHeight])
t.left(180)
t.forward(6)
t.left(-90)
t.arc(-180, 3)

//Left eye
t.jump([44.5, eyeHeight])
t.left(270)
t.forward(6)
t.left(-90)
t.arc(-180, 3)

//Head
t.jump([width / 4, 43])
t.forward(headHeight)

t.jump([(3 * width) / 4, 43])
t.forward(headHeight)

t.arc(180, width / 4)

// Headphones
t.up()
t.left(180)
t.forward(4.5)
t.left(90)
t.forward(2)
t.right(90)
t.down()
t.arc(-180, width / 4 + 2)

//Left ear headphone
t.jump([width / 4, 43 + headHeight])
t.left(180)
t.arc(180, 6)
t.forward(26)
t.arc(180, 6)

//Right ear headphone
t.setAngle(270)
t.jump([3 * width / 4, 43 + headHeight])
t.left(180)
t.arc(-180, 6)
t.forward(26)
t.arc(-180, 6)


drawLines(t.lines())
