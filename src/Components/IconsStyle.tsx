import { icons } from '../Assets/Images/Icons';

const Icon = ({ size, bgColor, stroke = "#ffffff", icon, onClick, className }: { size: 'x-small' | 'small' | 'medium' | 'large', bgColor?: string, stroke?: string, icon: string, onClick?: any, className?: string }) => {

    let sizeWidth: string
    sizeWidth = size === 'small' ? '20' : size === 'medium' ? '30' : size === 'large' ? '50' : '15'
    const IconComp = icons[icon as keyof typeof icons];

    return <IconComp fill={bgColor} stroke={stroke} width={sizeWidth} height={sizeWidth} onClick={onClick} className={className} />
}

export default Icon;

