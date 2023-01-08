import { type FC } from 'react'
import { type CustomLinkProps } from '../types/types'

/**
 * 
 * @param props { CustomLinkProps }
 * 
 */
const CustomLink: FC<CustomLinkProps> = ({ url, title }: CustomLinkProps) => {
    return ( 
            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:decoration-dashed hover:underline duration-50">{title}</a>
    )

}

export default CustomLink