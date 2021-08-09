import { useState } from 'react'
import { a, useSpring } from 'react-spring'

import { useTimer } from '../../hooks/useTimer'

import './index.css'

export default function Index() {
    const [date] = useTimer()
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 250, friction: 100 },
    })

    return (
        <div className="card-container" onClick={() => set((state) => !state)}>
            <a.div
                className="c back"
                style={{ opacity: opacity.to((o) => 1 - o), transform }}
            />
            <a.div
                className="c front"
                style={{
                    opacity,
                    transform,
                    rotateX: '180deg',
                }}
            />
            <p>{date}</p>
        </div>
    )
}
