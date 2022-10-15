import React, { memo, useCallback, useEffect, useState } from 'react'
import ContentLoader from "react-content-loader"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
    height: number;
    width: number;
}

interface MyLoaderProps {
    width?: number;
    height?: number;
}

const MyLoader = ({width = 192, height = 280}: MyLoaderProps) => (
    <ContentLoader 
      speed={1}
      width={width}
      height={height}
      viewBox="0 0 293.333 440"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
       <rect x="1" y="4" rx="0" ry="0" width="288" height="450" /> 
    </ContentLoader>
  )

export default memo(({  src, height, width,  ...props }: ImageProps) => {
    const [loading, setLoading] = useState(false)

    const onLoad = useCallback(() => {
        setLoading(true)
    }, [src])

    useEffect(() => {
        const img = new Image();
        img.src = src as string;
        img.addEventListener("load", onLoad)
        return () => {
            img.removeEventListener("load", onLoad)
        }
    }, [src, onLoad])

    if(!loading){
        return <MyLoader height={height} width={width}/>
    }else{
        return <img {...props} alt={src} src={src} />
    }
})