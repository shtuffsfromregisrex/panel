import { FC } from 'react'
import useRouter from 'next/router'
import { CustomLinkProps } from '../types'

/**
 * 
 * @param props { CustomLinkProps }
 * 
 */
const CustomLink: FC<CustomLinkProps> = ({ url, underline, title }: CustomLinkProps) => {
    return ( 
            <a href={url} target="_blank" className="hover:decoration-dashed hover:underline duration-50">{title}</a>
    )

}

export default CustomLink