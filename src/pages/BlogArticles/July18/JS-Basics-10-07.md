---
path: "/JSBasics"
date: "2018-07-10"
title: "Back to basics"
---

I'll have to admit, I didn't know how to translate people's advice of "start learning with x". &#128533;  If 'x' were an array, it may look a little bit like this:

`x = [javaScript, reactJS, gitHub, jQuery, AngularJS, bootstrap]`

So I started with Javascript.  I did the codecademy course and spent at least 15 hours on an Udemy course, and, while they are great and I got a LOT out of them and enjoyed it, I worried the whole time about whether I knew enough HTML & CSS etc to be diving so deep into JS, and had a niggle that I wasn't practicing each concept to ensure comprehension, but neither platform had the (free) means to acheive this.

I continued on until I bumped into Zell Liew's awesome [Build a CRUD app in Node and express](https://zellwk.com/blog/crud-express-mongodb/) walkthrough.  His teaching style was super straight forward but not lengthy, so I checked out his site.

Unsurprisingly, [Zell had his own course on JavaScript](https://learnjavascript.today/) and heavily marketed it.  The intake hadn't started at that point yet, but he had an 'email based JavaScript course' that you could sign up to, so I did.

His approach really targeted people like me who jumped straight in and took everyone's advice, learned 'all the things' at once and got too overwhelmed by all the things to learn and lack of progress.

He had been there.  And had gotten through it, evaluated his own learnings and systematically developed a system that is a fail safe way of learning JavaScript.

So I took his advice and went back to the basics (not with his paid course though 🙇‍), but with [Mosh's Learn JavaScript Course on Udemy](https://www.udemy.com/javascript-basics-for-beginners/learn) because it was packed full of exercises for practice.  I wrote out every bit of code, commented in explanations and faithfully spent the time to figure out the exercises and I feel like it is paying off.

Zell classifies each stage of learning JS;

    The baby stage <-- Went back to this
    The child stage <-- Thought I was in the middle of this
    The teenager stage
    The adult stage
    
&#128077;&#127996; The important takeaway is: don't get caught up in progression for progression sake. Learn and iterate over the basics until it becomes comfortable.

I know it's basic, but I sovled a basic exercise without referencing anything, and it felt GOOD &#9996;&#127996;

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



