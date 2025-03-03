'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, Transition, motion } from 'motion/react'
import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useState,
  useId,
} from 'react'

export type AnimatedBackgroundProps = {
  children:
  | ReactElement<{ 'data-id': string }>[]
  | ReactElement<{ 'data-id': string }>
  defaultValue?: string
  onValueChange?: (newActiveId: string | null) => void
  className?: string
  transition?: Transition
  enableHover?: boolean
}

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const uniqueId = useId()

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id)

    if (onValueChange) {
      onValueChange(id)
    }
  }

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue)
    }
  }, [defaultValue])

  return Children.map(children, (child: any, index) => {
    const id = child.props['data-id']

    const interactionProps = enableHover
      ? {
        onMouseEnter: () => handleSetActiveId(id),
        onMouseLeave: () => handleSetActiveId(null),
      }
      : {
        onClick: () => handleSetActiveId(id),
      }

    return cloneElement(
      child,
      {
        key: index,
        className: cn('relative inline-flex', child.props.className),
        'data-checked': activeId === id ? 'true' : 'false',
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn('absolute inset-0 rounded-xl border-2 bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-600 dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-900 animate-gradient-x [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [border-image:linear-gradient(to_right,var(--tw-gradient-from),var(--tw-gradient-via),var(--tw-gradient-to))_1]', className)}
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <div className="z-10">{child.props.children}</div>
      </>,
    )
  })
}
