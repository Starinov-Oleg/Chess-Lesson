interface IframeProps {
  src: string
  height: string
  width: string
  title: string
}
function Iframe({ src, height, width, title }: IframeProps) {
  return (
    <div>
      <iframe src={src} height={height} width={width} title={title} />
    </div>
  )
}

export default Iframe
