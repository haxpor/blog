#!/bin/bash

bundle exec jekyll build --future -d ./docs && echo "blog.wasin.io" > ./docs/CNAME && echo "done"
