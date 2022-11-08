import { useTransition, animated, config } from '@react-spring/web'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

type Props = {

}

// const Div = styled.div`
//     * {
//         background-color: white;
//     }
//     `
export default function Playground({ }: Props) {
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!toggle),
  })

  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div
        style={{
          position: 'absolute',
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}>
        👇
      </animated.div>
    ) : (
      <animated.div
        style={{
          position: 'absolute',
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}>
        🤚
      </animated.div>
    )
  )
}