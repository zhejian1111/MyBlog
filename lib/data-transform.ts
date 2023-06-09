import ms from 'ms'
import { Configs } from './utils'

export const msToString = (time: number | unknown): string => {
  if (!time) return ''
  const str = ms(time as number, { long: true })
  if (!Configs.isCN()) return `${str} ago`
  return (
    str
      .replace('days', '天')
      .replace('day', '天')
      .replace('minutes', '分钟')
      .replace('minute', '分钟')
      .replace('hours', '小时')
      .replace('hour', '小时')
      .replace('seconds', '秒') + '之前'
  )
}

export const getDNSPrefetchValue = (domain: string | undefined): string | null => {
  if (!domain) return null
  if (domain.startsWith('http')) return domain.replace(/https?:/, '')
  if (domain.startsWith('//')) return domain
  return `//${domain}`
}
