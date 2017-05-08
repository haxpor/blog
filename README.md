# blog

Visit my blog at [https://wasin.io](https://wasin.io).
The content is updated reflecting the changes of this repository.

# Development

## Deploy

It uses power of [ghp-import](https://github.com/davisp/ghp-import) to efficiently copy and push content to remote `gh-pages` branch with the following command

```
ghp-import -c 'blog.wasin.io' -m 'Deployed with ghp-import' -p ./_site/
```

It's already inside `build.sh` script. Thus when deploy execute `./build.sh`.

# License

Licensed under **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International**.  
You can read license [here](https://github.com/haxpor/blog/blob/master/LICENSE.md).
