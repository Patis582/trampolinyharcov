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
    <Link href={href} className={`border-2 border-primary w-fit rounded-lg rounded-tl-sm rounded-br-sm px-8 py-2 button-text hover:rounded-lg hover:rounded-bl-sm hover:rounded-tr-sm transition-all duration-100
        ${filled
            ? 'bg-primary text-white hover:bg-transparent'
            : `bg-transparent hover:bg-primary hover:text-white text-black ${textWhite ? "text-white" : "text-black"}`}`}>{children}</Link>
  )
}

export default Button