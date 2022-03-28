# K-Bugz Password generator

K-Bugz secure password generator with editable parameter setting. You need a password, I have got you! This password generator allows you to pick parameters and length. 

## Description

🔐 This repository contains the completed code for a password generator project requested by an anonymous client. This project began from a starter code file graciously provided by the UT Austin Full-Stack Coding Boot Camp. Our user story here is about an employee with access to lots of sensitive data, in need of a program to generate strong passwords in order to provide greater security.

🏗️ The provided starter code took care of the basic process of rendering whatever text I wanted to generate in my generatePassword() function, but that was about it. Aside from a couple variables, an undeclared function, an event listener, and a few query selectors there was nothing provided in the way of actually generating the password.

The goal was to create a password given a certain set of critera such as
                            lettercases, numerics and special characters. I wrote this program using HTML, CSS, and JS.
                            The program works by adding an event listner that looks for a click and if so start a
                            function to get the logic going. I created global arrays for lowercase, uppercase, numerics
                            and special cases. I also created a string blank password and blank array waiting to recieve
                            the prior arrays. Then used corresponding booleans with confirm for logic to insert or
                            concatenate onto the blank array. Also, prompt the user for password size that allows from 8
                            to 128 chars. When confim is selected yes then it triggers the boolean to trueAt then end of
                            that function, I use the join function to turn an array into a string to present the very
                            nice password. Finally, I use querySelector to grab the html element and populate with
                            string.

![picture of deployed site](images/rmIMG1.png)

## Credits
UT Austin Coding Boot Camp https://techbootcamps.utexas.edu/coding/

Stack Overflow https://stackoverflow.com/

<!-- Links to your social media accounts -->
## Contact Me
Email: kbugusky@gmail.com <br>
Linkedin: https://www.linkedin.com/in/kevinbugusky333454/ <br>
GitHub: https://k-bugz.github.io/password-generator/

## Other 

Have a great day and thank you for being here. 
