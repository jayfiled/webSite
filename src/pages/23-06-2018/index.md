---
path: "/underlined-links"
date: "2018-06-23T00:01:33.962Z"
title: "Blue underlined links"
---

###Wired.com's hyperlinks - 2 styles ###

It'll look like this:

<img class="blog-img" src="https://drive.google.com/uc?id=1_u22MQMHLfOBeuHynIpeGnvtt-iV8FNg">

Or this:
<img class="blog-img" src="https://drive.google.com/uc?id=1Hj9ZoYkyOGs_skP5KMbuPBXKk5GyshfS">


1. Simply reference a .png

    `a {
    background-image: url(http://cdn.mobify.com/sites/wired/production/i/link-bg.png);<br />
    background-size: 5px 24px;
    }`
    
Overlays a blue .png file over the top and bottom of the text, and the background size is increased to make it look like one single highlight

---

2. ..or remote text-decoration and assign the *inset* value on the *box-shadow* property. 

    `a {
    text-decoration: none;
    color: #000;
    box-shadow: inset 0 -4px 0 #c0e6f7;
    text-decoration: none;
    }`

I should explain the inset value in the box-shadow property.. 
