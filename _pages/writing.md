---
layout: page
title: Writing
permalink: /writing/
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