---
title: Homepage
description: This is my website. There are many like it, but this one is mine. My website is my best friend. It is my life. I must master it as I must master my life.
---

{% extends "layouts/base.njk" %}

{% block head %}
  <meta name="description" content="{{ description }}" />
  <style>
    h1 {
      color: gold;
    }
  </style>
{% endblock %}

{% block footer %}
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
{% endblock %}

{% block content %}

  # This is a header

  Some into content.

  ## Subheader ahoy!

  And some more lovely content to be written here.

  ```js
  console.log("Is this a code block?");
  ```
{% endblock %}


