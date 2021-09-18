import { memo } from 'react'
import { animated, useSpring } from 'react-spring'
import { useMediaQuery } from 'react-responsive'

import { commonSpring } from '@lib/constants'

import styles from './index.module.scss'

type HeaderProps = {
    makeReverse: boolean
}

function Header({ makeReverse }: HeaderProps) {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    })

    const headingStyles = useSpring({
        ...commonSpring,
    })
    const titleStyles = useSpring({
        ...commonSpring,
        delay: 100,
    })

    const vStyles = useSpring({
        from: {
            marginLeft: isMobile ? -10 : -20,
        },
        to: {
            marginLeft: isMobile ? -80 : -120,
        },
        reverse: makeReverse,
    })

    return (
        <>
            <animated.div className={styles.heading} style={headingStyles}>
                <div>A</div>
                <animated.div style={vStyles}>V</animated.div>
            </animated.div>
            <animated.h1 className={styles.h1} style={titleStyles}>
                Countdown to our wedding
            </animated.h1>
        </>
    )
}

export default memo(Header)
