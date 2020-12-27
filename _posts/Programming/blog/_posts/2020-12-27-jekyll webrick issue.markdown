---
layout: post
title: "jekyll webrick issue"
date: 2020-12-27 10:00:00 +0900
categories: Programming
tags: [jekyll, Ruby]
image: programming/201227_jekyll/2020-12-27-jekyll_webrick_issue_2.png
---

Ruby version is updated to 3.0.0. And when I runned `bundler exec jekyll serve` command to run jekyll server, I got this error message.

```
/usr/local/lib/ruby/gems/3.0.0/gems/jekyll-4.2.0/lib/jekyll/commands/serve/servlet.rb:3:in `require': cannot load such file -- webrick (LoadError)
        ...
        from /Users/username/.gem/ruby/3.0.0/bin/bundler:23:in `<main>'
```

At first, since the Ruby version was updated, so I thought I needed to install a new gem file. So I runned `bundle install` command, but it couldn't be resolved.  
Consequently speaking, it was a 50 out of 100 points idea.  

Refer to [this issue](https://github.com/jekyll/jekyll/issues/8523){:target="blank"} opened yesterday, the error happened because `webrick` is no longer a bundled gem in Ruby 3.0.  
![ruby]({{"assets/img/programming/201227_jekyll/2020-12-27-jekyll_webrick_issue_1.jpg" | relative_url}}){:class="imgframe"}  

What you have to do is just add one line `gem "webrick"` into your Gemfile.  
In my case, I added it last like this.  
![gemfile]({{"assets/img/programming/201227_jekyll/2020-12-27-jekyll_webrick_issue_2.png" | relative_url}}){:class="imgframe"}  

After adding, run `bundle install` command to install `webrick`.

---

## References

- <https://github.com/jekyll/jekyll/issues/8523>
- <https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/>
