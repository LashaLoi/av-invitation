import { useEffect, useState } from 'react'

const getTime = () => {
    const countDownDate = new Date(2021, 11, 21).getTime()

    const now = new Date().getTime()
    const distance = countDownDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
}

type ResultValue = {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export function useTimer(): [ResultValue, boolean] {
    const [date, setDate] = useState(getTime)
    const [isExpired, setIsExpired] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(function () {
            const time = getTime()

            if (!time) {
                clearInterval(intervalId)
                setIsExpired(true)

                return
            }

            setDate(time)
        }, 1000)

        return () => clearInterval(intervalId)
    })

    return [date, isExpired]
}