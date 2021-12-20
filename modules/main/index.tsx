import { useMemo } from 'react'
import { useSpring, animated, config } from 'react-spring'

import Header from '@components/header'
import { useTimer } from '@lib/hooks/useTimer'
import { colors, commonSpring } from '@lib/constants'

import styles from './index.module.scss'

export default function Home() {
    const { days, hours, minutes, seconds } = useTimer()

    const colorNumber = Math.floor(seconds / 10) * 10

    const containerStyles = useSpring({
        backgroundColor: colors[colorNumber],
        config: config.molasses,
    })
    const dateStyles = useSpring({
        ...commonSpring,
        delay: 200,
    })

    const makeReverse = useMemo(
        () => (colorNumber / 10) % 2 === 0,
        [colorNumber]
    )

    return (
        <animated.div className={styles.container} style={containerStyles}>
            <Header makeReverse={makeReverse} />
            <animated.ul className={styles.ul} style={dateStyles}>
                <li className={styles.li}>
                    <span className={styles.span}>{days}</span>
                    days
                </li>
                <li className={styles.li}>
                    <span className={styles.span}>{hours}</span>
                    hours
                </li>
                <li className={styles.li}>
                    <span className={styles.span}>{minutes}</span>
                    minutes
                </li>
                <li className={styles.li}>
                    <animated.span className={styles.span}>
                        {seconds}
                    </animated.span>
                    seconds
                </li>
            </animated.ul>
        </animated.div>
    )
}
