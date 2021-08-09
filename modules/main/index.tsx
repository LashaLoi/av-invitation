import { useTimer } from '../../hooks/useTimer'

import styles from './index.module.scss'

export default function Home() {
    const [{ days, hours, minutes, seconds }] = useTimer()

    return (
        <div className={styles.container}>
            <h1 className={styles.h1} id="headline">
                Countdown to our wedding:
            </h1>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <span className={styles.span}>{days}</span>
                    days
                </li>
                <li className={styles.li}>
                    <span className={styles.span}>{hours}</span>
                    Hours
                </li>
                <li className={styles.li}>
                    <span className={styles.span}>{minutes}</span>
                    Minutes
                </li>
                <li className={styles.li}>
                    <span className={styles.span}>{seconds}</span>
                    Seconds
                </li>
            </ul>
        </div>
    )
}
