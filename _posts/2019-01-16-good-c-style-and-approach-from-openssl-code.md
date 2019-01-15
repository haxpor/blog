---
layout: post
title:  "Good C Style & Approach from OpenSSL Source Code"
date:   2019-01-16 03:30
thumbnail: /assets/images/post-thumbnail/textpost.png
tags: [openssl, c]
comments: true
og_image: /assets/images/post-thumbnail/textpost.png
---

From my yesterday night [live streaming](https://www.youtube.com/watch?v=nfPzkn2PTE8&index=7&list=PLYDp_pZlmMEgv8Y5wA3yEracC_yTEaOTi) about minimalist Twitter CLI in C, I have found interesting and good approach in library design used in one of the most important library out there; Openssl.

They are as follows

1. __Expose struct name but not struct definition to user__

    User use such name to refer to somewhat context used during working with Openssl API without a need to include relevant header as mostly we don't directly access attribute of such struct.
    This can be seen from `BIO` which is defined via `typedef struct bio_st BIO` (in ./include/openssl/ossl_typ.h which is available for use in public). Its structure definition is defined inside internal header file ./include/openssl/ossl_typ.h.

2. __Use full UPPERCASE for struct name__

    Following code will clearly explain this point.

```
...
BIO* bio, *b64;
BUF_MEM *buffer_ptr;

b64 = BIO_new(BIO_f_base64());
bio = BIO_new(BIO_s_mem());
bio = BIO_push(b64, bio);
...
``` 

  Function name is prefixed with struct name in UPPERCASE then follows with snake\_case of function name.
  This approach is similar to what [allergro](https://liballeg.org/).
