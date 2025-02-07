import React from 'react'
import { Icons } from '../icons'
import { IconNames } from '../icons/interface'

export const CustomBorder = () => {
    return (
        <>
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -top-1 left-0 rotate-90 text-sixth`} />
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -bottom-1 left-0 -rotate-90 rotate-x-180 text-sixth`} />
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -top-1 right-0 rotate-90 rotate-x-180 text-sixth`} />
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -bottom-1 right-0 -rotate-90 text-sixth`} />
        </>
    )
}
