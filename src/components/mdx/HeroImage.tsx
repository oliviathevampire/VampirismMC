import React from "react"

export default function HeroImage({ src, alt, width, height, css }: { 
  src: string; 
  alt: string;
  width?: number;
  height?: number;
  css: string
}) {
  css += 'shadow-sm hover:shadow-lg transition-shadow duration-200';
  return (
    <img src={src} alt={alt} className={css} width={width} height={height} />
  )
}