import { config } from 'react-spring'

export const colors = {
    50: '#FDE3C3',
    40: '#FCD7BF',
    30: '#F4DEE2',
    20: '#F6CE66',
    10: '#8AAB8C',
    0: '#D1EAEC',
}

export const commonSpring = {
    from: { opacity: 0, color: '#ffefd5', scale: 0.95 },
    to: { opacity: 1, color: '#666', scale: 1 },
    config: config.molasses,
}
