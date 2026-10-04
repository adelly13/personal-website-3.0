import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Callout({ title, children, type = 'note' }) {
  return (
    <aside className={`mdx-callout mdx-callout-${type}`}>
      {title ? <div className="mdx-callout-title">{title}</div> : null}
      <div>{children}</div>
    </aside>
  )
}

function Definition({ title, children }) {
  return (
    <aside className="mdx-box mdx-definition">
      <div className="mdx-box-title">
        {title ? `Definition: ${title}` : 'Definition'}
      </div>
      <div>{children}</div>
    </aside>
  )
}

function Theorem({ title, children }) {
  return (
    <aside className="mdx-box mdx-theorem">
      <div className="mdx-box-title">{title ? `Theorem: ${title}` : 'Theorem'}</div>
      <div>{children}</div>
    </aside>
  )
}

function Proof({ children }) {
  return (
    <aside className="mdx-box mdx-proof">
      <div className="mdx-box-title">Proof</div>
      <div>{children}</div>
    </aside>
  )
}

function Figure({ src, alt, caption, width = 1200, height = 800 }) {
  return (
    <figure className="mdx-figure">
      <Image src={src} alt={alt || ''} width={width} height={height} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

function ImageRow({ children }) {
  return <div className="mdx-image-row">{children}</div>
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  Callout,
  Note: Callout,
  Definition,
  Theorem,
  Proof,
  Figure,
  ImageRow,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeKatex],
        },
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
