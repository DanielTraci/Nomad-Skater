# Project's name

[Link Deploy](http://github.com)

## Description

Hungry Nomad Developer is a game about a developer that struggles to eat healthy while travelling. The player has to navigate through obstacles to get healthy food and avoid eating something that will poison him. If the character gets food poisoining more than 3 times, the game is over. On the other hand, if he reaches 100 score points, he gets safe to the airport.

## MVP

The "Hungry Nomad Developer":

- has a player that jumps, and moves forward and backward
- has roten food that apears randomly from the right side of the screen
- if the player eats one pierce of rotten food, scored points decrease by -1
- if the player eats, the game is over.
- has levels of speed every 20 points.

## Backlog

- add 5 levels of complexity.
- add increase speed

## Data structure

buildStartScreen(){}
buildGameScreen(){}
buildGameOverScreen(){}
drawCanvas(){}
startLoop(){}
collision(){}
clearCanvas(){}
drawCanvas(){}
keepScore(){}
endGame(){}
draw(){}
moveForward(){}
moveBackward(){}
jump(){}
score(){}

## States y States Transitions

Definition of the different states and their transition (transition functions)

startScreen
gameScreen
gameOverScreen

## Task

main - buildDom
main - buildStartScreen
main - addEventListener
main - buildGameScreen
main - buildGameOverScreen
main - addEventListener
game - drawCanvas
game - updateCanvas
game - drawObstacles
developer - moveLeft
developer - moveRight
developer - jump
game - checkCollision
game - keepScore
game - GameOver
game - addEventListener

## Additional Links

### Trello

https://trello.com/b/eSiJfSyc/kanban-template

### Slides

To be updated
