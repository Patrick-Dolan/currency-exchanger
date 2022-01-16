# _Currency Exchanger_

#### By _**Patrick Dolan**_

#### _An application that will allow you to calculate the exchange value from USD to other currencies._

## Github Pages Link

NOT YET DEPLOYED
[Currency Exchanger Github Pages](https://patrick-dolan.github.io/currency-exchanger/)

## Technologies Used

* _HTML_
* _CSS & Bootstrap_
* _Javascript & jQuery_
* _NPM & Webpack_

## Description

This is a web app that allows you to put in an amount in United States Dollars, select a currency to convert to, then click convert to get an up to date currency exchange value. 

This App uses the [ExchangeRate-API](https://www.exchangerate-api.com/) to get current exchange conversions.

## Setup/Installation Requirements

First thing you will need to do is download or clone the repo to your computer.

Next you'll need to get an API key from [ExchangeRate-API](https://www.exchangerate-api.com/) follow the instructions below on how to do so:

<details>
<summary>Click here for API key instructions</summary>
<br>

Click on the Get Free Key button marked with the red circle:

![Image of where to get your api key](/README-imgs/step1.PNG)

Input your Email choose your password and click the "Accept Terms & Create API Key!" button:

![Image of where to sign up for your api account](/README-imgs/step2.PNG)

You will then need to go to your email and activate your exchange api account by clicking on the link in the email. This should automatically take you to your dashboard on the api's site but if not just navigate back to the site and log in.

The dashboard will have you api key right in the middle of the screen as below: 

![Image of where to find you api key](/README-imgs/step3.PNG)

This is also where you will find the API documentation and other such useful resources if you're interested.

</details>
<br>
After you have your API key you will need to create a .env file in the root directory of the currency-exchanger folder you downloaded in the first step of these installation isntructions.  

open the .env file and and type in the follow replacing "YOUR_KEY_HERE" with your API key.<br>
<code>API_KEY=YOUR_KEY_HERE</code>  

Next you will need to open the project in you terminal of choice and in the root directory run the following command:  
<code>npm run install</code>  

MAC USERS, you will need to change one line of code in the package.json folder to the following in order to start the program:  
<code>"start": "npm run build; webpack-dev-server --open --mode development"</code>  

Run the program by typing the following into your terminal:  
<code>npm run start</code>

## Known Bugs

* _No known issues_

## Contact Me

_Let me know if you run into any issues or have questions, ideas or concerns:_
_dolanp1992@gmail.com_

## License

_MIT_

Copyright (c) _2022_ _Patrick Dolan_