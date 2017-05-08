#!/bin/bash

bundle exec jekyll build --future -d ./docs && ghp-import -c 'blog.wasin.io' -m 'Deployed with ghp-import' -p ./docs/ && echo 'done'
