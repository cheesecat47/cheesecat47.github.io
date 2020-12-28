---
layout: post
title: "[2020-1] KNU Info - WepProgramming team project"
date: 2020-07-04 20:30:00 +0900
categories: Programming
tags: [KNU, CSE, Tomcat, JSP]
image: thumbnails/2020-07-04-Webproject.gif
---

# KNU Info

> 2020 1st semester, Wep Programming project of team #6, [KNU][knu]{:target="blank"} [CSE][knucse]{:target="blank"}.  
>
> There is a lot of information on the department's website, but not all of it may be necessary for me.  
> So, the goal is to develop a website that shows only the relevant information when you save your major and a keyword that you have interest.  
> In addition, it provides personalized experiences such as setting up a background image.  

---

## Development Environment

* Eclipse EE
* Tomcat 9.0
* jsoup

## Team member info

[cheesecat47](https://github.com/cheesecat47){:target="blank"} – cheesecat47@gmail.com  
[chanSeong95](https://github.com/chanSeong95){:target="blank"} – ckan0822@gmail.com  
[eclairs1010](https://github.com/eclairs1010){:target="blank"} – eclairs1010@gmail.com  
[JehyunJung](https://github.com/JehyunJung){:target="blank"} – toojey7@gmail.com  

## Description of each page

### Main page

![mainpage](https://raw.githubusercontent.com/cheesecat47/KNU_Info/master/docs/mainpage.gif)  

* The first page of the site.  
  
### Login page

![login1](https://raw.githubusercontent.com/cheesecat47/KNU_Info/master/docs/login1.png)  

* The design is from an open source bootstrap login template.  
* Provides ID/password search and Sign up.  
  
![login2](https://raw.githubusercontent.com/cheesecat47/KNU_Info/master/docs/login2.png)  

* Provides ID duplication check.  
* Select your major when signing up.  
  
![login3](https://raw.githubusercontent.com/cheesecat47/KNU_Info/master/docs/login3.png)
![login4](https://raw.githubusercontent.com/cheesecat47/KNU_Info/master/docs/login4.png)  
  
### Mypage

![mypage](https://raw.githubusercontent.com/cheesecat47/KNU_Info/master/docs/mypage.png)  

* You can see mypage when you sign in successfully.  
* Use the table to show the crawled information.  
  * Use 'Datatable' open source table templates.  
  * You can select the number of lists that are visible at a time.  
* Select each item to go to the corresponding notice of the department's homepage.  
* If you are not logged in and attempt to access this page using the address bar, you will be redirected to the login page.  
  
### Customize page

![customizepage](https://raw.githubusercontent.com/cheesecat47/KNU_Info/master/docs/customizepage2.gif)  

* You can enter the keyword you want.  
* You can also set the background image you want.  
  * This background picture applies to mypage and customize page.  

## Demo video

On Youtube: <https://youtu.be/9ouNuz7PaTw>{:target="blank"}  

## Source code version management

<https://github.com/cheesecat47/KNU_Info>{:target="blank"}  

[knu]: http://www.knu.ac.kr/
[knucse]: http://computer.knu.ac.kr/
