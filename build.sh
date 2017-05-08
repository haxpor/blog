#!/bin/bash

#bundle exec jekyll build --future -d ./docs && echo "blog.wasin.io" > ./docs/CNAME && echo "done"
bundle exec jekyll build --future -d ./docs && ghp-import -c 'blog.wasin.io' docs/ && echo 'done'
