---
layout: page
title: Photography
permalink: /photography/
---

<ul class="posts">
{% for post in site.posts %}

  {% if post.categories contains "Photography" %}

    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}

    <li itemscope>
      <a href="{{ site.github.url }}{{ post.url }}">{{ post.title }}</a>
      {% if post.image %}	
        <div class="thumbnail-container">	
        <a href="{{ site.github.url }}{{ post.url }}"><img src="{{ site.github.url }}/assets/img/{{ post.image }}"></a>	
      </div>	
      {% endif %}
      <p>{{ post.content | strip_html | truncate: 200 }} <a href="{{ site.github.url }}{{ post.url }}">Read more</a></p>
      {% if post.tags %}<span class="post-tags"><p>{% for each in post.tags %}<i class="fa fa-hashtag" aria-hidden="true"></i>{{each}} {% endfor %}</p></span>{% endif %}
      <p class="post-date"><span><i class="fa fa-calendar" aria-hidden="true"></i> {{ post.date | date: "%B %-d" }} - <i class="fa fa-clock-o" aria-hidden="true"></i> {% include read-time.html %}</span></p>
      <br>
    </li>

  {% endif %}

{% endfor %}

</ul>
