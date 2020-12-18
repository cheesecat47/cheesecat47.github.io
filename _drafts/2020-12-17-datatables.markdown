---
layout: post
title: "Datatables"
date: 2020-12-17 17:00:00 +0900
categories: Programming
tags: [Datatables, Table, Javascript]
# image: thumbnails/2020-07-04-MobileAppProgramming.png
---

> Datatables is a plug-in for jQuery Javascript library.
> I used it very usefully when working on projects this semester, so I summarize it not to forget.  

At first, add CDN path into `head` tag.  

```html
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"></script>
```

And then, make a structure for the table.  

```html
<table id="table_id" class="display">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </thead>
</table>
```

## References

- <https://datatables.net/>
- <https://kutar37.tistory.com/entry/Grid-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%ACDatatables-%EC%82%AC%EC%9A%A9%EB%B2%95%EC%98%88%EC%A0%9C>
- <http://blog.naver.com/93immm/221348202134>