import { useMemo } from 'react'
import { useSpring, animated, config } from 'react-spring'

import Header from '@components/header'
import { useTimer } from '@lib/hooks/useTimer'
import { colors, commonSpring } from '@lib/constants'

import styles from './index.module.scss'

export default function Home() {
    const [date] = useTimer()
    const colorNumber = Math.floor(date.seconds / 10) * 10

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
