import { useSpring, animated, config } from 'react-spring'

import { useTimer } from '../../hooks/useTimer'

import styles from './index.module.scss'

import { colors, commonSpring } from './constants'

export default function Home() {
    const [date] = useTimer()

    const aStyles = useSpring({
        backgroundColor: colors[Math.floor(date.seconds / 10) * 10],
        config: config.molasses,
    })

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
        <animated.div className={styles.container} style={aStyles}>
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
        </animated.div>
    )
}
