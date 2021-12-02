# Quote Generator

I built a quote generator with a background color change onclick to brush up my Javascript skills. I got the idea here: https://dev.to/codefoxx/15-beginner-javascript-projects-to-improve-your-front-end-skills-5bcj and my main inspiration was this: https://dev.to/nehasoni__/random-quote-generator-using-html-css-and-javascript-3gbp

## The problems I couldn't solve (yet):

* I searched for an App to use in my code generator, but couldn't get it to work with the API Key. I also need to learn more about how to hide the API Key in my code. I ended up using the API provided in my main inspiration link.
* I used async function as it was used in the example, but need to read more to fully understand how it works.
* I was unsure about which html tags to use, for example I used main and styled it in CSS but not sure if it's the right approach.
* I still have problems with centering elements and responsive designing. 
* I couldn't center the twitter bird! display:flex on the parent element was messing it somehow:)
* The places of the buttons shift depending on the length of the quotes. I really don't know if this is a solvable issue. (I could wrap them up in a container and give a fixed height. Not sure if this will prevent overflow)
* In some quotes, the quotation mark is left alone in a single line (due to length of the quote). Changing the width of the container just creates new ones:) I'm not sure how to solve this one either.
* I added the first sentence appearing before generating quotes at the last minute. It solved some of my styling issues, but I couldn't style the sentence itself with CSS, as it messed up my javascript codes.
