import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="#2a2000"
          hoverFillColor="#1a1500"
        />
      </div>
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,180,0,0.04) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}
