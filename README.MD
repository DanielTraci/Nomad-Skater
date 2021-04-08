# Project's name

[Link Deploy](http://github.com)

## Description

Nomad Skater is a game about a skateboarder that earns money from tricks while travelling. The player has to navigate through obstacles to get money and avoid the police officers who think that 'skateboarding is a crime'.

## MVP

The "Nomad Skater" in a nutshell:

- It has a player that jumps, and moves forward and backward
- The police officers appear randomly from the right side of the screen
- If the player gets caught, the game is over.
- The game has 10 levels of complexity, which increase everytime the player scores another 15 points.

## Data structure

character()
money()
police()
platform()
foreground()
scoringDisplay()
speedLevels()
animate()
start()
restart()

## States y States Transitions

Definition of the different states and their transition (transition functions)

startPage
gamePage
gameOverPage

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

## GAME
https://danieltraci.github.io/Nomad-Skater/
