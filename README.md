# SamJulien.com

Hi, I'm Sam. This is the repo for migrating [my site](http://www.samjulien.com) from Ghost to Gatsby. A good chunk of it was done prior to adding source control and pushing it up to a repo, so I'll try to add references and links as time goes on in case you're starting from scratch.

This site is built using the [egghead MDX Starter](https://github.com/eggheadio/gatsby-starter-egghead-blog) for [Gatsby](https://www.gatsbyjs.org/), but will shortly be migrated to the more recent [theme version of the same](https://github.com/eggheadio/gatsby-theme-egghead-blog).

You can see the current live status of this site on Netlify [here](https://samjuliencom.netlify.com/).

## Minimum Viable Product
Here's what I want to have done before officially switching over [samjulien.com](http://www.samjulien.com):

- Download last few articles and convert them to MD
- Migrate most visited/favorite articles with preserved URLs
- Basic blog with MDX ✅
- Basic image support ✅
- Basic video embed support ✅
- Make sure syntax highlighting is working ✅
- Index page with basic info and links to recent projects & important articles ✅
- Update talks page to be current ✅
- Update dependencies 😬
- Migrate to double quotes (run Prettier on components)?
- Hook up basic ConvertKit ✅
- Switch to custom domain!

## Nice-to-Have
What I want to do post production (aka "the fun streams"):

- "Uses" page
- Change the font and make the reading experience better (better contrast, etc)
- Convert a Prism theme into the right JS format for React renderer
- Move talks content to AirTable
- Algolia search

## Design Inspiration
- [Vojta](http://vojta.io)
- [Joel Hooks](https://joelhooks.com/)
- [Overreacted](https://overreacted.io/)

## References
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
