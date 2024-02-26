import './index.less'
import Props from '../../props'
interface IconProps extends Props {
	//图标类型
	type?: string
	//是否旋转
	spin?: boolean
	//图标的图片链接
	url?: string
	//图标尺寸
	size?: string
	//图标颜色
	color?: string
}

const Icon = ({ className = null, style = null, type = null, spin = false, url = null, size = null, color = null }: IconProps) => {
	const getIconStyle = (): any => {
		let style: any = {}
		if (url) {
			style.backgroundImage = url
			if (size) {
				style.width = size
				style.height = size
			}
		} else {
			if (size) {
				style.fontSize = size
			}
			if (color) {
				style.color = color
			}
		}
		return style
	}
	const iconStyle = getIconStyle()
	if (type == 'url') {
		return <i className={['mvi-icon-url', spin ? 'spin' : '', className].join(' ')} style={Object.assign(iconStyle, style)}></i>
	}

	return <i className={['mvi-icon', 'icon-' + type, spin ? 'spin' : ''].join(' ')} style={Object.assign(iconStyle, style)}></i>
}

export { Icon, Icon as default }
