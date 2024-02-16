# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Desktop](./screenshot/desktop-1440.png)


### Links

- Solution URL: [Solution URL]()
- Live Site URL: [Live site URL]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

#### CSS Animations For Loading
```CSS
    /* Note: Result of hit and trail - refer at you own risk ;) */
.placeholder {
    opacity: 0;
    animation: fade-in 1s infinite ease, fade-out 1s infinite ease;
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
}

@keyframes fade-in {
    100% {
        opacity: 1;
    }
}

@keyframes fade-out {
    100% {
        opacity: 0;
    }
}
```

#### Grid Layout
```CSS
main {
    --card-border-radius: 15px;

    display: grid;
    grid-template: auto repeat(6, 1fr) / minmax(325px, auto);
    /* Crate 7 row for mobile site with first row auto sizing. */
    /* Used minmax() to define the [min, max] width for the cols. */
}

@media screen and (min-width: 776px) {
    main {
        display: grid;
        grid-template: 1fr 1fr / repeat(4, minmax(200px, 1fr));
        /* Create two row and four column layout. */
        /* Where rows are equal in height and columns are min 200px. */
    }
}
```

### Continued development

- Improve on CSS animation
- Thinking in JS

### Useful resources

- [Great article on creating fade-in/out animation](https://www.rockyourcode.com/creating-a-smooth-fade-in-fade-out-animation-effect-with-css/#:~:text=Here's%20how%20it%20works%3A%20we,and%20%E2%80%9Cfade%2Dout%E2%80%9D.)
- [Using Data attributes as CSS selectors](https://css-tricks.com/almanac/selectors/a/attribute/)

## Author

- Website - [Praveen Kumar](praveenkum11.github.io/portfolio)
- Frontend Mentor - [@PraveenKum11](https://www.frontendmentor.io/profile/PraveenKum11)
- Twitter - [@softwheredev](https://twitter.com/softwheredev)
