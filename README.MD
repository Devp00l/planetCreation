# Planet Creation
## Purpose
Tries to illustrate the creation of a planet in a young solar system.
In it's final state it should be an educational game.

## Installation
Clone the repository to your local hard drive with ``git clone $thisRepositoriesURL``.

Then just start a local http-server of your choice in the directory.

I'm using the npm `http-server`. You can install it with ``npm install http-server``, than you can start it with ``http-server $pathToCloneDirectory``.


## Gameplay

Use the cursors to move your asteroid around. Hit space to instantly stop your movement.

Try to catch elements that are smaller than yourself to absorb some of their mass and the equal of the element type.

To get more unlikely elements you can hit `t` to make the game more unrealistic but more colorful :), with `g` your realistic level will go one level down. With a realistic level of 0, the game is totally unrealistic because each element will be created in the element creation cycle.

## What's missing

* Gravitation of the Player

* Orbit of the Player around the star

* Planet States

* That you can win the game.
