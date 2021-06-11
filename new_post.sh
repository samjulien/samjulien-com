#!/bin/bash
# Gatsby post creator
new_post() {
  GATSBY_ROOT=~/Dev/samjulien-com
  GATSBY_POSTS=$GATSBY_ROOT/content/writing
  TITLE=$1
  SLUG="$(echo -n "$TITLE" | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z)"
  DATE="$(date +%Y-%m-%d)"
  NEW_POST_FOLDER=$GATSBY_POSTS/$DATE-$SLUG
  NEW_POST_FILE=$NEW_POST_FOLDER/index.mdx

  mkdir $NEW_POST_FOLDER
  mkdir $NEW_POST_FOLDER/images

  cat <<frontmatter > $NEW_POST_FILE
---
title: "$TITLE"
slug: "$SLUG"
description: ''
date: "$DATE"
date_updated: "$DATE"
ogimage: "images/og-$SLUG.png"
published: true
tags:
  - Tech
---
frontmatter

  ENCODED="$(urlencode "$TITLE")"

  wget -P ${NEW_POST_FOLDER}/images https://res.cloudinary.com/samjulien/image/upload/w_989,c_fit,g_north_west,x_60,y_60,l_text:Inter-Black.ttf_64:${ENCODED}/og-template.png

  mv "${NEW_POST_FOLDER}/images/og-template.png" "${NEW_POST_FOLDER}/images/og-${SLUG}.png"

  echo "New post created"
  code $GATSBY_ROOT
  code $NEW_POST_FILE
}

# https://gist.github.com/cdown/1163649
urlencode() {
    # urlencode <string>

    old_lc_collate=$LC_COLLATE
    LC_COLLATE=C

    local length="${#1}"
    for (( i = 0; i < length; i++ )); do
        local c="${1:$i:1}"
        case $c in
            [a-zA-Z0-9.~_-]) printf '%s' "$c" ;;
            *) printf '%%%02X' "'$c" ;;
        esac
    done

    LC_COLLATE=$old_lc_collate
}