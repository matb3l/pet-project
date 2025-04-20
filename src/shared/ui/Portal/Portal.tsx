import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  content: Element
}

export const Portal: FC<PortalProps> = ({ children, content }) => {
  return createPortal(children, content)
}
