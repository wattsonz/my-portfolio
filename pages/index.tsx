import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

type Props = {}

export default function Home({ }: Props) {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <animated.div style={props}>I will fade in</animated.div>
  )
}