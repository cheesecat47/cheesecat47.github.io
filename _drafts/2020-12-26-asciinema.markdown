---
layout: post
title: "asciinema"
date: 2020-12-26 23:00:00 +0900
categories: Programming
tags: [asciinema, Terminal]
image: thumbnails/2020-12-26-asciinema.jpg
---

> asciinema is for recording terminal in text format.  

```html
<html>
<head>
  <link rel="stylesheet" type="text/css" href="/asciinema-player.css" />
</head>
<body>
  <!-- This line depends on your record. -->
  <asciinema-player src="/your_record.cast" cols="100" rows="30"></asciinema-player>
  ...
  <script src="/asciinema-player.js"></script>
</body>
</html>
```

Or, if you want to insert embeded player in your web, use this.

```javascript
<script id="asciicast-your_record_id" src="your_record_path" async></script> 
```

<script id="asciicast-kse92PuUiV1egGOoTBxqtgloC" src="https://asciinema.org/a/kse92PuUiV1egGOoTBxqtgloC.js" async></script>

## References

- <https://asciinema.org/docs/how-it-works>
