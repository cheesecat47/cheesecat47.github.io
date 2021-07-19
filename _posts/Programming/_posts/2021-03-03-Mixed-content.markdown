---
layout: post
title: "혼합 컨텐츠(Mixed Content)"
date: 2021-03-03 08:10:00 +0900
categories: Programming
tags: [Web, https, MixedContent]
image: programming/210303_Mixed-content/2021-03-03-Mixed-content-1.png
---

> HTTPS로 연결한 페이지 안에서 HTTP를 이용해 컨텐츠(이미지, 비디오, css, js 등)를 가져올 때, 이를 혼합 컨텐츠<sup>[1][2]</sup>라고 합니다.
>
> {:.lang-en}
>
> Mixed Content is an HTTPS page that includes content fetched using HTTP.

&nbsp;

혼합 컨텐츠는 Active와 Passive로 나눌 수 있습니다. 차이점은 man-in-the-middle 공격에 의해 컨텐츠가 변경될 때 위협 수준에 따라 나뉩니다.  
Passive는 이미지, 오디오, 비디오와 같은 컨텐츠입니다. 이 경우엔 만약 공격을 하더라도 해당 컨텐츠만 바뀔 뿐, 페이지의 다른 부분은 변경하지 못합니다.  
하지만 Active는 스크립트, 스타일시트, iframe, fetch() 요청 등을 포함합니다. 이 경우에는 피싱, 악성 사이트로 리디렉션 등 거의 모든 공격으로 이어질 수 있습니다.<sup>[1][2]</sup>  

{:.lang-en}

There are two types of mixed contents: Active / Passive. The difference is divided according to the threat level when content is changed by a man-in-the-middle attack.
Passive is content such as images, audio and video. In this case, even if an attack occures, only the content is changed. Other parts of the page cannot be changed.  
But Active includes scripts, stylesheets, iframes, fetch() requests, etc. This can lead to almost any attack, such as phishing or redirecting to malicious sites.  

Passive 혼합 컨텐츠의 경우 콘솔에 경고 메시지가 출력됩니다. 만약 브라우저가 자동으로 https URL을 찾을 수 있다면, https를 통해 컨텐츠를 가져오고 메시지를 출력합니다.  

{:.lang-en}

For passive mixed content, a warning message is printed to the console. If the browser can automatically find the https URL, it fetches the content via https and prints a message.  

[![PostgreSQL]({{"assets/img/programming/210303_Mixed-content/2021-03-03-Mixed-content-1.png" | relative_url}})](https://passive-mixed-content.glitch.me/)

반면, Active의 경우는 컨텐츠를 가져오는 것을 막고 경고 메시지를 출력합니다.

{:.lang-en}

On the other hand, in the case of Active, the content fetch is prevented and a warning message is displayed.  

[![PostgreSQL]({{"assets/img/programming/210303_Mixed-content/2021-03-03-Mixed-content-2.png" | relative_url}})](https://active-mixed-content.glitch.me/)

{:.lang-en}

(Click these images redirect to the demo pages.)  

&nbsp;

해결 방법<sup>[5]</sup>은 다음과 같습니다.  

{:.lang-en}

These are how to fix the problem.  

1. 만약 동일 리소스를 `https://`로도 제공한다면, 간단히 이것만 바꿔주어도 됩니다. 일부 브라우저는 이를 자동으로 확인하고 자동으로 바꿔줍니다.  
1. 해당 호스트에서 해당 리소스을 `https://`로 제공하지 않는다면, `https://`로 동일한 리소스를 제공하는 다른 호스트가 있는지 찾아보고 바꿉니다.  
1. 법적으로 문제가 없다면 해당 리소스를 다운로드 받은 후 내 사이트에 직접 추가합니다.  
1. 이 모든 것이 불가능하다면, 그 리소스는 내 사이트에서 제외합니다.  

{:.lang-en}

1. If the host provides the same resource as `https://`, you can simply change this. Some internet browsers check for this and change it automatically.  
1. If the host does not provide the resouce as `https://`, look for another host that provides the same resource as `https://` and replace it.  
1. If there is no legal problem, download the resource and add it directly to your site.  
1. If all of this is not possible, exclude the resource from your site.  

## References

{:.references}

[1] "Mixed content". developer.mozilla.org. <https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content> (accessed Mar. 13, 2021).  
[2] Jo-el van Bergen and Rachel Andrew. "What is mixed content?". web.dev. <https://web.dev/what-is-mixed-content/> (accessed Mar. 13, 2021).  
[3] "Passive mixed content". passive-mixed-content.glitch.me. <https://passive-mixed-content.glitch.me/> (accessed Mar. 13, 2021).  
[4] "Active mixed content". passive-mixed-content.glitch.me. <https://active-mixed-content.glitch.me/> (accessed Mar. 13, 2021).  
[5] Jo-el van Bergen and Rachel Andrew. "Fixing mixed content". web.dev. <https://web.dev/fixing-mixed-content/> (accessed Mar. 13, 2021).
