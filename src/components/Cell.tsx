type Props = {
  value: number
}

export const Cell = (props: Props) => {
  return <div className="border-2 border-black">{props.value}</div>
}