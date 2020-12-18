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

  echo "New post created"
  code $GATSBY_ROOT
  code $NEW_POST_FILE
}