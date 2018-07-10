---
path: "/JSBasics"
date: "2018-07-10"
title: "Back to basics"
---

I'll have to admit, I didn't know how to translate people's advice of 'you should learn x'.  'x' may look a little bit like this:

`x = [javaScript, reactJS, gitHub, jQuery, AngularJS, bootstrap]`

So I started with Javascript.  I did the codecademy course and spent at least 15 hours on an Udemy course, and, while they are great and I got a LOT out of it and enjoyed it, I felt a slight niggle the whole time thatm made me think I should be stopping and practicing each topic as I learned it, but neither platform had the (free) means to do so.

I continued on until I bumped into Zell Liew's awesome [Build a CRUD app in Node and express](https://zellwk.com/blog/crud-express-mongodb/) walkthrough.  His teaching style was super straight forward but not lengthy, so I checked out his site.

Unsurprisingly, [Zell had his own course on JavaScript](https://learnjavascript.today/) and heavily marketed it.  The intake hadn't started at that point yet, but he had an 'email based JavaScript course' that you could sign up to, so I did.

His approach really targeted people like me who jumped straight in and took everyone's advice and learned 'all the things' at once, started steps too far ahead, rushed through fundamentals so that we can get to the 'build cool stuff' phase.

He had been there.  And had gotten through it, evaluated his own learnings and systematically developed a system that is a fail safe way of learning JavaScript.

So I took his advice and went back to the basics with [Mosh's Learn JavaScript Course on Udemy](https://www.udemy.com/javascript-basics-for-beginners/learn) because it was packed full of exercises for practice.  I wrote out every bit of code, commented the shit out of it for understanding, faithfully spent the time to figure out the exercises and I feel like it is paying off.

Zell classifies each stage of learning JS;
    The baby stage <-- Went back to this
    The child stage <-- Thought I was in the middle of this
    The teenager stage
    The adult stage
    
The important takeaway is: don't get caught up in progression for progression sake. Learn and iterate over the basics until it becomes comfortable.

I know it's basic, but I sovled a basic exercise without referencing anything, and it felt GOOD.

Example quiz from tonight:

##Instructions:##

>The speed limit is 70 and for every 5 kms you go over the the speed limit, the driver loses 1 point.
If the driver goes over by 60kms (accumulates 12 points) the licence gets suspended.

        // notes to break down problem:
           // console.log(x + ': point ');
            // compare the speed with the limit to see the difference between them
            // calculate the difference
            // if minus console.log ok, if above, console log 
###My code:###

        function checkSpeed(speed) {
            let speedLimit = 70;
            let speedDiff = speed - speedLimit; 
            if (speedDiff <= 4) {
               return console.log('ok');
            }
            let speedByFive = speedDiff / 5;
            let roundSpeedDown = Math.floor(speedByFive);
            let points = roundSpeedDown + ': points';
            roundSpeedDown >= 12 ? console.log('Licence Suspended') : console.log(points);
        }

        checkSpeed(75);


###Refactored using Mosh's guidance:###

        function checkSpeed(speed) {
        const speedLimit = 70;
        const kmPerPoint = 5;

            if (speed < speedLimit + kmPerPoint) {
                console.log('Ok');
                return ;
            }

            const points = Math.floor((speed - speedLimit) / kmPerPoint);
            if (points >= 12)
            console.log('License suspended');
            else
            console.log('Points', points);
        }

        checkSpeed(80);



