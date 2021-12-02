import { useEffect, useState } from 'react'

const getDistance = () => {
    const countDownDate = new Date(2021, 10, 21, 15).getTime()
    const now = new Date().getTime()

    return countDownDate - now
}

const getTime = () => {
    const distance = getDistance()

    const isExpired = distance < 0

    const days = Math.abs(
        Math.floor(distance / (1000 * 60 * 60 * 24)) + (isExpired ? 1 : 0)
    )
    const hours = Math.abs(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) +
            (isExpired ? 1 : 0)
    )
    const minutes = Math.abs(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) +
            (isExpired ? 1 : 0)
    )
    const seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000))

    return { days, hours, minutes, seconds }
}

type ResultValue = {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export const useTimer = (): [ResultValue, boolean] => {
    const [date, setDate] = useState(getTime)
    const [isExpired, setIsExpired] = useState(getDistance() < 0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const time = getTime()
            const distance = getDistance()

            if (!isExpired && distance < 0) {
                setIsExpired(true)
            }

            setDate(time)
        }, 1000)

        return () => clearInterval(intervalId)
    })

    return [date, isExpired]
}
