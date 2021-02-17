---
layout: post
title: "asciinema"
date: 2020-12-26 23:00:00 +0900
categories: Programming
tags: [asciinema, Terminal]
image: thumbnails/2020-12-26-asciinema.jpg
---

> asciinema는 터미널을 텍스트 형식으로 녹화하는 프로그램입니다.  

{:.lang-en}

> asciinema is for recording terminal in text format.  

학교 수업 중, 프로젝트 결과물이 CLI 기반인 경우 결과 발표를 할 때 컴퓨터 화면을 녹화한 적이 있습니다. 문제는 화면을 녹화할 경우 용량이 너무 크다는 것입니다. 그래서 용량을 줄이기 위해 조금 더 낮은 화질로 인코딩하는 과정이 필요했습니다.  
하지만 asciinema를 사용하면 터미널을 텍스트 형식으로 기록할 수 있으므로 용량이 작고, 전용 embedded player를 제공하므로 재생하기도 좋습니다.  

{:.lang-en}

During class, I recorded a computer screen when presenting the results which were based on CLI. The problem is that the size of the recorded file is too big. So, encoding time is needed to reduce the file size.  
However, with asciinema, the terminal can be recorded in text format. So the file size is small, and it is also good to play as it provides an embeded player.  

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

웹페이지에 플레이어를 바로 추가하고 싶다면 아래 코드를 추가하면 됩니다.  

{:.lang-en}

If you want to insert an embeded player in your web, use this.

```javascript
<script id="asciicast-your_record_id" src="your_record_path" async></script> 
```

<script id="asciicast-kse92PuUiV1egGOoTBxqtgloC" src="https://asciinema.org/a/kse92PuUiV1egGOoTBxqtgloC.js" async></script>

## References

- <https://asciinema.org/docs/how-it-works>
