import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib/cn'

export function Section({
  className,
  ...props
}: ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={cn('relative py-20 sm:py-24 lg:py-28', className)}
      {...props}
    />
  )
}
