---
title: "About"
date: 2025-09-01
layout: "about"
slug: "about"
image:
links:
  - title: GitHub
    description:
    website: https://github.com/crxso
    image: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
menu:
    main:
        weight: 2
        params: 
            icon: user
---

Today is
{{< date.inline ":date_full" >}}
  {{- now | time.Format (.Get 0) -}}
{{< /date.inline >}}.

![GitHub Contributions](https://ghchart.rshah.org/crxso)