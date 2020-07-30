---
title: window.length
date: "2020-07-29T22:55:12.346Z"
description: "I mostly discover new things by mistake. `window.length` is one of those encounters."
---

![A lot of image frames on a wall](./how-many-frames-are-there.jpg)

<div class="credit"><span aria-hidden="true">🙌 </span>Photo by <a class="link" target="_blank" rel="noopener noreferrer"  href="https://unsplash.com/@jonnysplsh">Jonny Caspari</a></div>

Most of the time, when dealing with vanilla JavaScript code, I try things out directly in the browser. I just open the console within my favorite developer tools and start poking around until I gain whatever I searched for.

Today I made a small mistake and accidentally called something similar to this:

```javascript
myVariable-length
```

And as I hit return on my keyboard, I already saw my foolish mistake. I did no valid property access but performed a calculation with a not defined variable called `length`. Until I saw the output of:


```javascript
myVariable-length
-3
```

What? How did that happen? Did I declare `length` by mistake as a variable? Why does it not throw an error? Or - wait for a second - is this available as a property on the `window` object?

Yep, `window.length` exists. And as I apparently did not know anything about its existence, I asked the best online resource about it - the Mozilla Developer Network web docs.

> window.length
>
> Returns the number of frames (either `<frame>` or `<iframe>` elements) in the window.
>
> [window.length on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/length)

Yes, it exists. Now you know too.