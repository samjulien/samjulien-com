import React from 'react'

const GuideBanner = () => {
  return (
    <div class="rounded bg-blue-50 p-5">
      Hi!{' '}
      <span role="img" aria-label="wave emoji">
        👋
      </span>{' '}
      This article has been revised and expanded as a chapter of the Developer
      Microskills{' '}
      <span class="font-bold">
        <a
          href="https://learn.samjulien.com/guide-to-tiny-experiments"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guide to Tiny Experiments
        </a>
      </span>
      . It's available as an ebook and audio book!{' '}
      <span role="img" aria-label="tada emoji">
        🎉
      </span>
    </div>
  )
}

export default GuideBanner
