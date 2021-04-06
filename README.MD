# Project's name

[Link Deploy](http://github.com)

## Description

Nomad Skater is a game about a skateboarder that earns money from tricks while travelling. The player has to navigate through obstacles to get money and avoid the police officers who think that 'skateboarding is a crime'. If the character gets caught more than 3 times, the game is over. On the other hand, if he reaches 100 score points, he gets safe to the airport to travel to the next destination.

## MVP

The "Nomad Skater":

- has a player that jumps, and moves forward and backward
- police officers appear randomly from the right side of the screen
- if the player gets caught once, scored points decrease by -1
- if the player gets caught three times, the game is over.

## Backlog

- add 5 levels of complexity. Each level means 20 points.
- add increased speed at every reached level.

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

- police()
  platform()
  character()
  animate()
  start()
  restart()

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
