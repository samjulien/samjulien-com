# SamJulien.com

Hi, I'm Sam. This is the repo [my personal website](http://www.samjulien.com).

This site was built using the [egghead MDX Starter](https://github.com/eggheadio/gatsby-starter-egghead-blog) for [Gatsby](https://www.gatsbyjs.org/). I'm also using [ConvertKit](https://convertkit.com/) for my email list.

## Backlog
Now that the site is launched, here's what's on my roadmap:

- Download last few articles from the old Ghost site and convert them to MD
- Update dependencies 😬
- Migrate to double quotes (run Prettier on components)?
- "Uses" page for useful stuff
- Tags
- Convert a Prism theme into the right JS format for React renderer
- Move talks content to AirTable
- Migrate "blog" to "writing" ✅
- Algolia search

## Design Inspiration
- [Vojta](http://vojta.io)
- [Joel Hooks](https://joelhooks.com/)
- [Overreacted](https://overreacted.io/)

## Development References
I migrated this site from a very old Ghost instance. Here are some resources I found helpful in the process:

- [GitHub - eggheadio/gatsby-starter-egghead-blog: This is an example Gatsby blog site that we use as a reference at egghead.](https://github.com/eggheadio/gatsby-starter-egghead-blog)
- [GitHub - kentcdodds/kentcdodds.com: Kents Homepage](https://github.com/kentcdodds/kentcdodds.com)
- [Why My New Blog Isn’t on Medium – Dan Abramov – Medium](https://medium.com/@dan_abramov/why-my-new-blog-isnt-on-medium-3b280282fbae)
- [Overreacted — A blog by Dan Abramov](https://overreacted.io/)
- [GitHub - kyleshevlin/blog: A rewrite of my blog in Gatsby](https://github.com/kyleshevlin/blog)
- [GitHub - jlengstorf/lengstorf.com: Source for lengstorf.com, Jason Lengstorf’s personal site.](https://github.com/jlengstorf/lengstorf.com)
- [GitHub - joelhooks/joelhooks-com: playing with static pages](https://github.com/joelhooks/joelhooks-com)
- [Beyond Static With Gatsby & Apollo (Jason Lengstorf) - YouTube](https://www.youtube.com/watch?v=wNUg1jpj9T0&index=8&list=PLz8Iz-Fnk_eQGt4-VFFCXYuYcuKaw4F07)
- [gatsby-starter-ghost: Gatsby Starter | GatsbyJS](https://www.gatsbyjs.org/starters/TryGhost/gatsby-starter-ghost/)
- [Imports and exports in Ghost: Access your content and data - FAQ](https://docs.ghost.org/faq/the-importer/#exports-in-ghost)
- [ghost-image-downloader](https://github.com/reverentgeek/ghost-image-downloader)
- [ghost-to-md](https://github.com/hswolff/ghost-to-md)
- [Download your information – Medium Support](https://help.medium.com/hc/en-us/articles/115004745787-Download-your-information)
- [GitHub - jamischarles/export-medium-to-gatsby: A CLI to convert your medium exported .html files to gatsby .md files.](https://github.com/jamischarles/export-medium-to-gatsby)
- [Exporting Medium Posts to Markdown - YouTube](https://www.youtube.com/watch?v=9Uy1db7qsT0)

```bash
scp -r username@droplet_ip:/path/to/file /path/to/destination
```

- [A comprehensive guide to images in Gatsby](https://www.orangejellyfish.com/blog/a-comprehensive-guide-to-images-in-gatsby/)

```bash
for file in *.md; do
    dir=${file%%.*}
    mkdir -p "$dir"
    mv "$file" "$dir"
    mkdir "$dir"/images
done
```

- [linux - creating directory from filename and move bash - Stack Overflow](https://stackoverflow.com/questions/13020720/creating-directory-from-filename-and-move-bash)
