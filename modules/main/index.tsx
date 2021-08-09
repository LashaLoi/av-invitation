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

    const headingStyles = useSpring({
        ...commonSpring,
    })

    const titleStyles = useSpring({
        ...commonSpring,
        delay: 100,
    })
    const dateStyles = useSpring({
        ...commonSpring,
        delay: 200,
    })

    return (
        <div className={styles.container}>
            <animated.div style={headingStyles} className={styles.heading}>
                AV
            </animated.div>
            <animated.h1 className={styles.h1} style={titleStyles}>
                Countdown to our wedding:
            </animated.h1>
            <animated.ul className={styles.ul} style={dateStyles}>
                <li className={styles.li}>
                    <span className={styles.span}>{date.days}</span>
                    days
                </li>
                <li className={styles.li}>
                    <span className={styles.span}>{date.hours}</span>
                    hours
                </li>
                <li className={styles.li}>
                    <span className={styles.span}>{date.minutes}</span>
                    minutes
                </li>
                <li className={styles.li}>
                    <animated.span className={styles.span}>
                        {date.seconds}
                    </animated.span>
                    seconds
                </li>
            </animated.ul>
        </div>
    )
}
