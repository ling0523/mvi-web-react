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

const Icon = (props: IconProps) => {
	const getIconStyle = () => {
		let style: any = {}
		if (props.url) {
			style.backgroundImage = props.url
			if (props.size) {
				style.width = props.size
				style.height = props.size
			}
		} else {
			if (props.size) {
				style.fontSize = props.size
			}
			if (props.color) {
				style.color = props.color
			}
		}
		return style
	}
	const iconStyle = getIconStyle()
	if (props.type == 'url') {
		return <i className={['mvi-icon-url', props.spin ? 'spin' : '', props.className].join(' ')} style={Object.assign(iconStyle, props.style)} onClick={props.onClick} onDoubleClick={props.onDoubleClick}></i>
	}

	return <i className={['mvi-icon', 'icon-' + props.type, props.spin ? 'spin' : ''].join(' ')} style={Object.assign(iconStyle, props.style)} onClick={props.onClick} onDoubleClick={props.onDoubleClick}></i>
}

Icon.defaultProps = {
	className: null,
	style: null,
	onClick: null,
	onDoubleClick: null,
	type: null,
	spin: false,
	url: null,
	sizee: null,
	color: null
}

export { Icon, Icon as default }
