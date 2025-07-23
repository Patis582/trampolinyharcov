import Link from 'next/link'
import React from 'react'

interface Props{
    children: string,
    filled: boolean,
    href: string,
    textWhite?: boolean
}

const Button = ({children, filled, href, textWhite}: Props) => {
  return (
    <Link href={href} className={`border-2 border-primary rounded-lg rounded-tl-sm rounded-br-sm px-8 py-2 button-text
        ${filled
            ? 'bg-primary text-white'
            : `bg-transparent text-black ${textWhite ? "text-white" : "text-black"}`}`}>{children}</Link>
  )
}

export default Button