import { config } from 'react-spring'

export const colors = {
    50: '#EF9794',
    40: '#EEB18F',
    30: '#FFA6B2',
    20: '#CADFCF',
    10: '#FACED2',
    0: '#B9B2CB',
}

export const commonSpring = {
    from: { opacity: 0, color: '#ffefd5', scale: 0.95 },
    to: { opacity: 1, color: '#666', scale: 1 },
    config: config.molasses,
}
