import { useTimer } from '../../hooks/useTimer'

import styles from './index.module.scss'
import { useSpring, animated, config } from 'react-spring'

const commonSpring = {
    from: { opacity: 0, color: '#ffefd5', scale: 0.95 },
    to: { opacity: 1, color: '#666', scale: 1 },
    config: config.molasses,
}

export default function Home() {
    const [date] = useTimer()

    const titleStyles = useSpring({
        ...commonSpring,
    })
    const dateStyles = useSpring({
        ...commonSpring,
        delay: 200,
    })

    const items = Object.entries(date).map(([key, value]) => ({ key, value }))

    return (
        <div className={styles.container}>
            <animated.h1 className={styles.h1} style={titleStyles}>
                Countdown to our wedding:
            </animated.h1>
            <animated.ul className={styles.ul} style={dateStyles}>
                {items.map(({ key, value }) => (
                    <li className={styles.li} key={key}>
                        <span className={styles.span}>{value}</span>
                        {key}
                    </li>
                ))}
            </animated.ul>
        </div>
    )
}
