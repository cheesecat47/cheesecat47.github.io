---
layout: page
title: Tags
permalink: /tags/
---

<div class="container">
    <div class="row tagrow">
        <!-- https://wormwlrm.github.io/2019/09/22/How-to-add-tags-on-Jekyll.html -->
        {% for tag in site.tags %}
            <span class="tag" data-tag="{{tag[0]}}">
                {{ tag[0] }}
            </span>
        {% endfor %}
	</div>
    <div class="row">
        {% for post in site.posts %}
          <div class="post-wrapper"
            {% if post.tags %}
              {% for tag in post.tags %}
                data-{{ tag }}
              {% endfor %}
            {% endif %}>
            <article class="post-preview">
              {% include article-content.html %}
            </article>
          </div>
        {% endfor %}
    </div>
</div>