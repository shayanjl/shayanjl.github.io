---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
author: "Shayan Jalali"

slug: "{{ .Name | urlize }}"
url: "/projects/{{ .Name | urlize }}/"
summary: ""
description: ""
tags: []
categories: ["Projects"]

image: "hero.png"
alt: ""
ShowToc: true
toc: true
mathjax: false

links:
  repo: ""
  demo: ""
  paper: ""
tech: ["Python","R","Julia"]
status: "active"   # active | wip | archived
---
