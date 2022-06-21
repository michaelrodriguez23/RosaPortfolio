import React from 'react'

export const ProjectCard = () => {
  return (
    <div>
        <figure key={props.id}>
        <img src={props.source} alt={props.caption}>
        <figcaption>{props.caption}</figcaption>
</img>
        </figure>
       
    </div>
  )
}
