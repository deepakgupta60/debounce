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


// React work concept that is mutability..

// does any one know this..

initial value and target value should be same.

old data is not equal to current data..

my ui and my data should be change.


always use the final value inside the setData state..

like setData(data.videos) ->

for undefined is set to complete the data.

### DEBOUNCING is a solution..

Relatives: mother your prepare some guest, she will be preparing something, 

Samosa stuff -> guest and being a person in house.

can i just eat this, once your, lets a deal i will give you particular thing after hour, will.

9 - 10 pm > after one hour. 
if you ask before 1hr, then it will add 1hr on that.

at 10 again can i give me, on top of this. according to our deal, we have a deal, current time, helps us to solve this problem, resources and data, getting some data.  


### Debouncing Recap

Javascript Throttling
1) mechanism that allows function execution for a limited number of times after that i will block its execution..


set time is clear
clear time out >
sleeper function > kind i want a pause moment, task 1
intentional delay > working on task one, take rest, sleep or do something else.

********************************************

SetInterval use clearInterval
SetTimeout use clearTimeOut

when timerid is remove then its data is also remove..

Common Interview Question
1) Build a Stopwatch in react
2) Build a Stopwatch in js

Why should we use setinterval or settimeout?
>> What the understanding the cleartimeout and clearinterval() 
>> 

SetInterval() => execute the function again and again, what time you have issued

SetTimeOut() => execute the function only one time.

does this make sense.

Real world example: all are typing some name, 100*4, they will be doing,

kind of bombarding with api, every body is searching api.

don't want to put heavy load on server.

that's why we implement debouncing,





