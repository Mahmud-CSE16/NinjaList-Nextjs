import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
        <div className="logo">
          <Image src="/logo.png" height={70} width={128} alt="" />
        </div>
        <Link href='/' ><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/ninjas'><a>Ninja Listing</a></Link>
    </nav>
  )
}

export default Navbar