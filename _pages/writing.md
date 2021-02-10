---
layout: page
title: Writing
permalink: /writing/
published: false
---

<div class="container">
	<div class="row">
		{% for post in site.posts %}
      {% if post.categories contains "Writing" %}
			  {% include article-content.html %}
      {% endif %}
		{% endfor %}
	</div>
</div>