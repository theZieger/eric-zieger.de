---
layout: ../../layouts/post.astro
title: window.length
date: 2020-07-29 22:55
image: how-many-frames-are-there.jpg
description: I mostly discover new things by mistake. `window.length` is one of those encounters.
photographer: Jonny Caspari
unsplash: /@jonnysplsh
---

Most of the time, when dealing with vanilla JavaScript code, I try things out directly in the browser. I just open the console within my favorite developer tools and start poking around until I gain whatever I searched for.

Today I made a small mistake and accidentally called something similar to this:

```javascript
myVariable - length
```

And as I hit return on my keyboard, I already saw my foolish mistake. The property access I did was not valid but a calculation with a not defined variable called `length`. Then I saw the output:


```javascript
myVariable - length
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
