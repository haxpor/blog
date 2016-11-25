---
layout: post
title:  "Test stuff"
date:   2016-11-22 14:12:00
categories: blog
tags: [test, test2]
---

Updated for `master` branch.
Updated 2nd times for `master` branch.

This is a test for `code`.

Questions | Answers
--- | ---
This is good, I think | I think so
This is not good, I think | I think so

first header | second header
--- | ---
this is good | this is good
this is goods | asldfjas;dlfk
jlasjd;faklsdf | asfasdfa sdf


{% highlight javascript %}
function test() {
	console.log("this is good");
}
{% endhighlight %}

<div class="mermaid">
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
</div>

<div class="mermaid">
sequenceDiagram
    participant Alice
    participant Bob
    Alice->John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
</div>

<div class="mermaid">
gantt
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to mermaid
        section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2               :         des4, after des3, 5d
        section Critical tasks
        Completed task in the critical line :crit, done, 2014-01-06,24h
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to mermaid                      :1d
</div>

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
