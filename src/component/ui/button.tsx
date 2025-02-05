import { Icons } from "../icons"
import { IconNames } from "../icons/interface"

interface IButtons {
    className?: string;
    label: string;
    textColor?: string;
}

export const ButtonBorderOnlyAngle = ({
    className,
    label,
    textColor
}: IButtons) => {
    return (
        <div className="relative w-fit px-4 py-3">
            <Icons name={IconNames["angle-border"]} size={12} className={`absolute top-0 left-0 rotate-90 text-font-primary ${className}`} />
            <Icons name={IconNames["angle-border"]} size={12} className={`absolute bottom-0 left-0 -rotate-90 rotate-x-180  ${className}`} />
            <Icons name={IconNames["angle-border"]} size={12} className={`absolute top-0 right-0 rotate-90 rotate-x-180  ${className}`} />
            <Icons name={IconNames["angle-border"]} size={12} className={`absolute bottom-0 right-0 -rotate-90  ${className}`} />
            <p className={`text-lg capitalize font-semibold ${textColor}`}>{label}</p>
        </div>
    )
}