import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image src='/homeimages/logo.svg' alt='logo-image' width={150} height={150}/>
    </div>
  )
}

export default Logo
