import React from 'react'

const GuideBanner = () => {
  return (
    <div class="rounded bg-blue-50 p-5">
      Hi!{' '}
      <span role="img" aria-label="wave emoji">
        👋
      </span>{' '}
      People loved this article so much that I decided to expand it into an
      ebook! You can pre-order the Developer Microskills{' '}
      <span class="font-bold">
        <a
          href="https://learn.samjulien.com/guide-to-tiny-experiments"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guide to Tiny Experiments
        </a>
      </span>{' '}
      today.{' '}
      <span role="img" aria-label="tada emoji">
        🎉
      </span>
    </div>
  )
}

export default GuideBanner
