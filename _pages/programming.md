---
layout: page
title: Programming
permalink: /programming/
---

<div class="container">
	<div class="row">
		{% for post in site.posts %}
      {% if post.categories contains "Programming" %}
			  {% include article-content.html %}
      {% endif %}
		{% endfor %}
	</div>
</div>