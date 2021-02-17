---
layout: post
title: "jekyll webrick issue"
date: 2020-12-27 10:00:00 +0900
categories: Programming
tags: [jekyll, Ruby]
image: programming/201227_jekyll/2020-12-27-jekyll_webrick_issue_2.png
---

루비 버전이 3.0.0으로 업데이트 되었습니다. 업데이트를 하고 지킬 서버를 켜기 위해 `bundler exec jekyll serve` 명령어를 입력했는데, 에러가 발생했습니다.  

{:.lang-en}

Ruby version is updated to 3.0.0. And when I runned `bundler exec jekyll serve` command to run jekyll server, I got this error message.

```plaintext
/usr/local/lib/ruby/gems/3.0.0/gems/jekyll-4.2.0/lib/jekyll/commands/serve/servlet.rb:3:in `require': cannot load such file -- webrick (LoadError)
        ...
        from /Users/username/.gem/ruby/3.0.0/bin/bundler:23:in `<main>'
```

처음에는 루비 버전이 업데이트 되었으니 gem을 다시 설치해야 되는 줄 알았습니다. 그래서 `bundle install` 명령어를 입력했는데도 에러는 해결되지 않았습니다.  
결과적으로 말하자면, 50점짜리 정답이었습니다.  
  
{:.lang-en}
  
At first, since the Ruby version was updated, so I thought I needed to install a new gem file. So I runned `bundle install` command, but it couldn't be resolved.  
Consequently speaking, it was a 50 out of 100 points idea.  

<br/>

지킬 깃허브 레포지토리의 [이슈](https://github.com/jekyll/jekyll/issues/8523)에 따르면, 루비 3.0 버전부터는 기본 gem으로 `webrick`이 더이상 제공되지 않아 발생한 것입니다.
  
{:.lang-en}
  
Refer to [this issue](https://github.com/jekyll/jekyll/issues/8523){:target="blank"} opened yesterday, the error happened because `webrick` is no longer a bundled gem in Ruby 3.0.  
![ruby]({{"assets/img/programming/201227_jekyll/2020-12-27-jekyll_webrick_issue_1.jpg" | relative_url}}){:class="imgframe"}  
  
해결 방법은 Gemfile에 `gem "webrick"` 한 줄만 추가해주면 됩니다.  

{:.lang-en}

What you have to do is just add one line `gem "webrick"` into your Gemfile.  
In my case, I added it last like this.  
![gemfile]({{"assets/img/programming/201227_jekyll/2020-12-27-jekyll_webrick_issue_2.png" | relative_url}}){:class="imgframe"}  

그리고 `bundle install` 명령어를 사용해 `webrick`을 설치하면 에러가 해결됩니다.  

{:.lang-en}

After adding, run `bundle install` command to install `webrick`.

---

## References

- <https://github.com/jekyll/jekyll/issues/8523>
- <https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/>
