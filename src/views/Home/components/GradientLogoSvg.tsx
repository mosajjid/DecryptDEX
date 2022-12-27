import { Svg, SvgProps } from '@pancakeswap/uikit'
import gradientlogo from "../../../../public/images/GradientLogo.svg"
import Image from 'next/image'

const GradientLogo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Image src={gradientlogo}  alt={('gradient logo')} />
  )
}

export default GradientLogo
