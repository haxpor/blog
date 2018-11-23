---
layout: post
title:  "Prepare Linux Box Freshly"
date:   2018-11-21 11:30
thumbnail: /assets/images/post-thumbnail/textpost.png
tags: [linux]
comments: true
og_image: /assets/images/post-thumbnail/textpost.png
---

This post is more or less a note for myself whenever I need to freshly prepare (thus include installation) softwares on Linux box. Most of the time I work with unmanaged VPS box which doesn't have any restoring from snapshot feature. Thus we start off fresh, really fresh.

The list of stuff I need to prepare  on Linux box freshly is as follows

* SSH key-based authentication for ssh login
* Postgres DB with pre-set of user and password
* curl with brotli and http2 support
* nginx with brotli and http2 support
* go
* python (for supplement in using with other apps, not for programming)

## SSH key-based authentication for ssh login

See [SSH Key-based authentication on Ubuntu](https://blog.wasin.io/blog/2016/12/21/ssh-key-based-authentication-on-ubuntu.html) with updated information on how to do it easily manually.

## Postgres DB

Install postgres via `apt install postgresql postgresql-contrib`.

Then setting password to account following my solution on [SO](https://stackoverflow.com/questions/12720967/how-to-change-postgresql-user-password/49480215#49480215).

It's very efficient to also set user, and password in environment variables so you don't have to login as `posgres` user then enter password every single time.  
Set the following two environment variables in your `~/.bash_profile` or `~/.bash_aliases`.

```
export PGUSER=postgres
export PGPASSWORD=<your password>
```

## nghttp2

This is a dependency that required by curl and nginx later to make it supports http2 protocol.

Install it by `apt install nghttp2 libnghttp2-dev libssl-dev`.

## brotli

This is a dependency that required by curl and nginx later to make it supports brotli compression algorithm.

Follow the install instruction at https://github.com/google/brotli, probably cmake way will be the best option.

## curl

Make sure you install nghttp2, and brotli first.

> brotli support has been brought to curl since version 7.57.0 thus there's no need to install brotli separately.

Clone curl source code from github via `git clone https://github.com/curl/curl.git`.

Checkout latest release version (as of now of this post) or check latest version on its github page. Then execute `git checkout curl-7_62_0`.

Then `./configure --with-nghttp2 --prefix=/usr/local --with-ssl --with-brotli --with-zlib` which is what I need, you may need to consult other options with `./configure --help` and might need to install some more dependencies, just follow what shown on screen.

Then `make`, `make install`. You can as well test curl with `make test`.


## nginx with brotli and http2 support

Make sure you install nghttp2, and http2 first.

Then download nginx source code from http://nginx.org/en/download.html to your `/usr/local/src`.  
As well as clone nginx's brotli support source code from https://github.com/google/ngx_brotli.git with `git clone https://github.com/google/ngx_brotli.git` to `/usr/local/src`.

What we need to do is to get default compile arguments from nginx. The trick I use is to firstly install nginx from `apt install nginx`, then execute `nginx -V` to get configure arguments. Copy it somewhere then we use these combine with `--add-module=/usr/local/src/ngx_brotli` appending at the end to build nginx with brotli support.

By now, we should have no worry about http2 support. But for safety, just check result from `nginx -V` whether it has `--with-http_v2_module` or not. If not, then you need to make nginx support it first in which I don't include such guide in this post though.

Then execute `./configure <copied build arguments> --add-module=/usr/local/src/ngx_brotli`.

You might have to copy the result binary to the correct path. From `/usr/local/nginx/sbin/nginx` to `/usr/sbin/nginx`.

Likely you will face with following issues. Solve it one by one.

* pcre => `apt install libpcre3 libpcre3-dev`
* libxml2/libxslt => `apt intall libxml2-dev libxslt1-dev`
*  the HTTP image filter module requires the GD library. => `apt install libgd-dev`
* error: the GeoIP module requires the GeoIP library. => `apt install libgeoip-dev`

I note the default compile parameters of nginx if installed via normal wawy of apt-get as follows.

```
nginx version: nginx/1.14.0 (Ubuntu)
built with OpenSSL 1.1.0g  2 Nov 2017
TLS SNI support enabled
configure arguments: --with-cc-opt='-g -O2 -fdebug-prefix-map=/build/nginx-FIJPpj/nginx-1.14.0=. -fstack-protector-strong -Wformat -Werror=format-security -fPIC -Wdate-time -D_FORTIFY_SOURCE=2' --with-ld-opt='-Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,-z,now -fPIC' --prefix=/usr/share/nginx --conf-path=/etc/nginx/nginx.conf --http-log-path=/var/log/nginx/access.log --error-log-path=/var/log/nginx/error.log --lock-path=/var/lock/nginx.lock --pid-path=/run/nginx.pid --modules-path=/usr/lib/nginx/modules --http-client-body-temp-path=/var/lib/nginx/body --http-fastcgi-temp-path=/var/lib/nginx/fastcgi --http-proxy-temp-path=/var/lib/nginx/proxy --http-scgi-temp-path=/var/lib/nginx/scgi --http-uwsgi-temp-path=/var/lib/nginx/uwsgi --with-debug --with-pcre-jit --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module --with-http_auth_request_module --with-http_v2_module --with-http_dav_module --with-http_slice_module --with-threads --with-http_addition_module --with-http_geoip_module=dynamic --with-http_gunzip_module --with-http_gzip_static_module --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_xslt_module=dynamic --with-stream=dynamic --with-stream_ssl_module --with-mail=dynamic --with-mail_ssl_module
```

## go

* Download go package from https://golang.org/dl/
* Extract downloaded package
* Change owner of whole directory via `chown -R root:root go`
* Move it to `/usr/local/`
* Add following lines into `~/.bash_aliases` (chnge GOPATH to yours accordingly)

  ```
  export GOPATH=$HOME/Data/Projects/go-work
  export GOBIN=/usr/local/bin/go-bin
  export PATH=$PATH:/usr/local/go/bin:$GOBIN
  ```
* Test with helloworld code by following example on [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-go-on-ubuntu-18-04).

## python

Install via `apt install python3`.

As I won't program in python or anything, just use its tool especially `python -m json.tool` to parse json string from output of other commands. So I'm not interested in python version 2.

Thus I make an alias in my `~/.bash_aliases` file as `alias python=python3`.
