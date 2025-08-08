import Link from 'next/link'
import React from 'react'

interface Props{
    children: React.ReactNode,
    filled: boolean,
    href: string,
    textWhite?: boolean,
    textBlackOnHover?: boolean,
    target?: '_blank' | '_self'
}

const Button = ({children, filled, href, textWhite, textBlackOnHover, target}: Props) => {
  return (
    <Link target={target ? target : '_self'} href={href} className={`border-2 border-primary w-fit rounded-lg rounded-tl-sm rounded-br-sm px-8 py-2 button-text hover:rounded-lg hover:rounded-bl-sm hover:rounded-tr-sm transition-all duration-100
        ${filled
            ? `bg-primary hover:bg-transparent text-white ${textBlackOnHover ? "hover:text-black" : "text-white"}`
            : `bg-transparent hover:bg-primary hover:text-white text-black ${textWhite ? "text-white" : "text-black"}`}`}>{children}</Link>
  )
}

export default Button