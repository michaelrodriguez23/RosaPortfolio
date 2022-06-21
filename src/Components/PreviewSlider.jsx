import React from 'react'

export const PreviewSlider = () => {
  return (
    <div>
        <ol> 
            <list>
                <img src="props.source"> </img>
            </list>
            <list>
                <img src="props.source"> </img>
            </list>
            <list>
                <img src="props.source"> </img> // middle image = current image
            </list>
            <list>
                <img src="props.source"> </img>
            </list>
            <list>
                <img src="props.source"> </img>
            </list>
        </ol>
    </div>
  )
}
