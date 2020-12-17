---
layout: page
title: Writing
permalink: /writing/
---

<div class="container">
	<div class="row">
		{% for post in site.posts %}
      {% if post.categories contains "Writing" %}
        {% unless post.next %}
          <h3>{{ post.date | date: '%Y' }}</h3>
        {% else %}
          {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
          {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
          {% if year != nyear %}
            <h3>{{ post.date | date: '%Y' }}</h3>
          {% endif %}
        {% endunless %}

			  {% include article-content.html %}
      {% endif %}
		{% endfor %}
	</div>
</div>