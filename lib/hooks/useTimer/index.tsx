import { useEffect, useState } from 'react'

const getDistance = () => {
    const countDownDate = new Date(2021, 10, 21, 15).getTime()
    const now = new Date().getTime()

    return countDownDate - now
}

const getTime = () => {
    const distance = getDistance()

    const days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)) + 1)
    const hours = Math.abs(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 1
    )
    const minutes = Math.abs(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + 1
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

export const useTimer = (): ResultValue => {
    const [date, setDate] = useState(getTime)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const time = getTime()

            setDate(time)
        }, 1000)

        return () => clearInterval(intervalId)
    })

    return date
}
