import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {}

const Link = ({
 page,
}: Props) => {
  return (
    <AnchorLink>
     {page}
    </AnchorLink>
  )
}

export default Link