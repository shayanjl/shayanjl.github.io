---
# Core
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
author: "Shayan Jalali"

# Routing / SEO
slug: "{{ .Name | urlize }}"
url: "/posts/{{ .Name | urlize }}/"
description: ""
keywords: ["bioinformatics","systems biology","machine learning","omics","R","Python","Julia"]
canonicalURL: "https://shayanjl.github.io/posts/{{ .Name | urlize }}/"

# Content presentation
summary: ""
toc: true
ShowToc: true
TocOpen: false
mathjax: true

# Taxonomy
tags: []
categories: []

# Social & comments (theme may read these)
share: true
comments: false

# Featured image (Page Bundle recommended)
# If you ran: `hugo new posts/my-post/index.md`
# put images next to this file and reference them by name.
image: "hero.png"
alt: ""
caption: ""

# Optional links (handy for papers/projects)
doi: ""
code: ""
dataset: ""
project: ""
---
<!-- Write your intro here. For images in a page bundle, use:
![Alt text](hero.png)
-->
