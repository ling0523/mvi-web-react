import './index.less'

interface Props {
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

const Icon = ({ type = null, spin = false, url = null, size = null, color = null }: Props) => {
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
	if (type == 'url') {
		return <i className={['mvi-icon-url', spin ? 'spin' : ''].join(' ')} style={getIconStyle()}></i>
	}

	return <i className={['mvi-icon', 'icon-' + type, spin ? 'spin' : ''].join(' ')} style={getIconStyle()}></i>
}

export { Icon, Icon as default }
