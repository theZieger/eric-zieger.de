---
title: Access-Control-Expose-Headers
date: "2021-02-07T17:01:00.000Z"
description: "One of the things I never heard about before but needed lately."
image: "./sharing-is-caring.jpg"
---

![Sharing is caring!](./sharing-is-caring.jpg)

<div class="credit"><span aria-hidden="true">🙌 </span>Photo by <a class="link" target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@markuswinkler">Markus Winkler</a></div>

Today I learned that you can't access every response header when you are dealing with Cross-Origin-Requests.

By default, you can only access a handful of headers. Those headers are the following:

* Cache-Control
* Content-Language
* Content-Length
* Content-Type
* Expires
* Last-Modified
* Pragma

For example, the Content-Disposition header can not be accessed by default.

Our next question should probably be: How do we gain access to that header if we need the read its information in our frontend application?

The answer is quite simple: our server has to respond with an extra response header called Access-Control-Expose-Headers. The value of it is a list of header names that are made available to the frontend. Or in other words, the frontend is allowed to read.

Here an example that we could use inside an Express-based Node.js application:

```javascript
response
  .set({
    'Access-Control-Expose-Headers': 'Content-Disposition',
  })
  .send('successful response')
```

To simplify not having to list every single header we need access to, we could also use the Access-Control-Expose-Headers with a wildcard.

```javascript
response
  .set({
    'Access-Control-Expose-Headers': '*',
  })
  .send('successful response')
```

When doing this, keep in mind that the wildcard will only work for Cross-Origin-Requests that do not include HTTP cookies or authentication information. That means when you do the following in your frontend:

```javascript
fetch("https://otherdomain.com/api/user", {
  headers {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  }
})
```

Your server has to list every single header you need to access. The wildcard will not work for other response headers that are not on the safe list from above.
