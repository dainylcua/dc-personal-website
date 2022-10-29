import { ReactNode } from "react"

type Props = {
  color?: string,
  extended?: boolean,
  id: string,
  children: ReactNode
}

export default function LayoutContainer(props: Props) {
  const {children, color, id, extended} = props
  return(
    <div className={`w-full ${color ? `${color} shadow-inner` : "bg-stone-900"} p-16 min-h-screen overflow-hidden`} id={id}>
      <div className={`${extended ? `max-w-7xl` : `max-w-5xl`} mx-auto`}>
        {children}
      </div>
    </div>
  )
}