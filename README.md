**Live Preview**

View live code [GitHub Pages](https://spiderwacho.github.io/create-cv/).
<br>
# Create CV App
The idea behind this project is to apply all the things that i learned from The Odin Project Lesson about React, and make something useful.

Desktop View
![First View](https://github.com/SpiderWacho/create-cv/assets/29034949/ee3b8157-f91c-441d-9a09-8b5c07f549b7)


  
  <p align="center">Mobile View</p>
<p align="center">
  <img src="https://github.com/SpiderWacho/create-cv/assets/29034949/95b9d37a-dfad-450f-bbb8-650021a6cb22">
</p>
<br>

## Main Takeaways
In this project i faced some issues that help me learn some things about react.
My main problems where:
*Find a library that allow me to download the finished cv in high quality
*Styling the preview view for mobile and later changing it when printing to pdf
*In this project, the css particulary represented a challenge, because i had to create the specific style that translate to the resume.

### Find a library that allow me to download the finished cv in high quality
I first used html2canvas and jspdf, but i was having several problems, the quality was not good and i couldn't get the correct size of impression, finally i found an opted to use react-to-print, a bug thats i cant resolve is that it prints two pages instead on only one, but it is usable.

### Styling the preview view for mobile and later changing it when printing to pdf
I learned to use the @media print query, i didn't know about it and now i know that if i need to work with files that need to be printed or viewed in pdf, i can use it

