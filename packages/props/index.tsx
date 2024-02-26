/**
 * 这里的是组件的公共props
 * className、style和children会默认为公共prop
 */

import { ReactNode } from 'react'

interface Props {
	className?: string
	style?: object
	children?: ReactNode
}

export default Props
