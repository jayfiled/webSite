---
path: "/progressCode"
date: "2018-07-02T10:46:33.962Z"
title: ".. personal progression journal pt 2"
---

##Hello, Powershell!

<a href="/history">.. Continued from my personal progression journal</a>

Even being the master of deploying images and software 🐱‍👤, there were still many manual tasks.  My colleagues had, over time made a .bat file or a vbscript that made tasks here and there quicker - for example, we had a .bat file for:

- When you want to know who is currently logged into a PC, you put in the PC name and the currently logged on user is displayed in the command terminal window.
- When you want to copy shortcuts to someone's Desktop over the network, we automated it with a VB script

and so on.  

I used them often but always had to browse to the Desktop, open the folder they are in, skim over them all, pick the right one and then run the script.  Often I left them open but then my workspace got cluttered with command terminal windows.

I always wanted to make one script to rule them all 📃 that would 'house' all the other scripts. It needed to include options where you could choose which script you want to run, and maybe some variables, but I was unsure how to start.

I knew all these scripts could be written in Powershell, so I converted all the scripts to powershell to start with.

But it was still a script, and I still needed to locate it in a folder to run it etc, plus the added headache of having to figure out how to run scripts in Powershell, because, they don't run as easily as a .bat file.  You need to change the behaviour of how **powershell** scripts run on your machine.  Something about execution policies that sounded too complicated and not worth the effort understanding.

I stalled a few times reading up articles, until I found the Microsoft Virtual Academy course, 'Getting started with powershell' - it explained how to get up and running from scratch.  Watching the first quarter gave me enough knowledge to run riot!  I learned about setting execution policy (so simple once explained!), remotely turning them on and off (in case I wanted to share my scripts with someone else and didn't want them to have to change it) and best of all I learned about, and started to use the PowerShell ISE (like an IDE, but for scripts!).

It gave me the means to run scripts by double clicking them and save shortcuts to them on my taskbar etc. So, I started using the PowerShell ISE (like an IDE for scripts) to run the scripts and for some time enjoyed the time it saved and working on new scripts, refactoring old script and the 'script to rule them all'.

However, something was still missing - a GUI that could remain open in the background that had buttons to execute the scripts based on variables in the text feild.

I dabbled with Visual Studio and started some C# courses on Sololearn until I ran into <a href="http://techgenix.com/building-powershell-gui-part1/"> this awesome guide</a>right on my annual leave.

I then continued to work on my first program every night for the next month and resulted in this!

<a href="https://drive.google.com/open?id=1c7vKZ2ZyyHOIb_Gvpww1mlgfY2rt8dxn">Screenshots of Handy Scripts GUI</a>

