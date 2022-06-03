import React from 'react'
import {BannerPict} from "../assets"

const Banner = () => {
  return (
    <div w-full h-screen>
    <img src={BannerPict} alt="Banner" class="object-cover w-full h-full"/>
 </div>
  )
}

export default Banner