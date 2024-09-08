##### Lifting State Up Technique

DATA -> Flow in before in react-> unidirectional

What is unidirectional?

>> one direction only. from parent to child.

Comp (A) to Comp (B) -> no way to do this.

child to parent pass any props, then get the error.

(A) to (app)?

A to App -> App to B -> that is lifting state up.

Parent to child > need a data, so use a props, data you want to share.

Child to parent and parent to child? -> real world example..

Lifting means > i lift some data to the parents.

App is my parent?

What is prop drilling?  

Which thing leads to prop drilling?

>> Concept of composition?

What is Callback?

>> call me back, whenever you need me, call me back, 

pass the data, i can execute whatever i need.

Functions can pass to props, its a valid prop. 

can you pass function in another function in javascript.

Thats why called a higher order functions.

browser only care about html+css+js



***LSUT TASK


Your State should be local, not pass any where else for performing some task..

to your respective component..

Performance: switch board in room, separate entity of outside world.

Two developer are working. App.js and A.js

which component is updated the data.

redudant stuff > re rendering is increase, maintaince is also a problem.

App > App Component is re render then all are re render.


##### Debouncing






