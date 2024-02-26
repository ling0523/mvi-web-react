import { ReactNode, createElement } from 'react'
import { Dap } from '../dap'
import { Icon } from '../icon'
import Props from '../../props'
import './index.less'

interface ButtonProps extends Props {
	//类型
	type?: 'default' | 'info' | 'success' | 'error' | 'warn' | 'primary'
	//尺寸
	size?: 'mini' | 'small' | 'medium' | 'large'
	//是否禁用
	disabled?: boolean
	//原生按钮类型
	nativeType?: string
	//是否独占一行
	block?: boolean
	//渲染标签
	tag?: string
	//是否朴素按钮
	plain?: boolean
	//自定义按钮颜色
	color?: string
	//自定义文字颜色
	subColor?: string
	//圆形按钮
	round?: boolean
	//方形按钮
	square?: boolean
	//是否显示点击态
	active?: boolean
	//是否显示加载状态
	loading?: boolean
	//加载文字
	loadText?: string
	//加载图标
	loadIcon?: string | object
	//加载中使用的插槽
	loadSlot?: ReactNode
}

const LoadTextNode = ({ loadText }) => {
	if (loadText) {
		return <span className='mvi-button-load-text'>{loadText}</span>
	}
	return null
}

const LoadNode = ({ loadIcon, loadText }) => {
	const parseIcon = (params: any) => {
		let icon = {
			spin: false,
			type: null,
			url: null,
			color: null,
			size: null
		}
		if (Dap.common.isObject(params)) {
			if (typeof params.spin == 'boolean') {
				icon.spin = params.spin
			}
			if (typeof params.type == 'string') {
				icon.type = params.type
			}
			if (typeof params.url == 'string') {
				icon.url = params.url
			}
			if (typeof params.color == 'string') {
				icon.color = params.color
			}
			if (typeof params.size == 'string') {
				icon.size = params.size
			}
		} else if (typeof params == 'string') {
			icon.type = params
		}
		return icon
	}
	const icon = parseIcon(loadIcon)
	return (
		<>
			<Icon type={icon.type} color={icon.color} url={icon.url} spin={icon.spin} size={icon.size} />
			<LoadTextNode loadText={loadText} />
		</>
	)
}

const Button = (props: ButtonProps) => {
	const btnClass = () => {
		let cls = ['mvi-button']
		if (props.type) {
			cls.push(props.type)
		}
		if (props.size) {
			cls.push(props.size)
		}
		if (props.round) {
			cls.push('round')
		} else if (props.square) {
			cls.push('square')
		}
		if (props.block) {
			cls.push('block')
		}
		if (props.plain) {
			cls.push('plain')
		}
		if (props.active && !props.disabled) {
			cls.push('active')
		}
		if (props.loading) {
			cls.push('loading')
		}
		return cls.join(' ')
	}
	const btnStyle = () => {
		let obj: any = {}
		//单色
		if (props.plain) {
			if (props.color) {
				obj.color = props.color
				obj.borderColor = props.color
				obj.background = props.subColor || '#fff'
			}
		} else {
			if (props.color) {
				obj.background = props.color
				obj.borderColor = props.color
				obj.color = props.subColor || '#fff'
			}
		}
		return obj
	}

	let slot: any = props.children
	//如果是加载状态
	if (props.loading) {
		if (props.loadSlot) {
			slot = props.loadSlot
		} else {
			slot = <LoadNode loadIcon={props.loadIcon} loadText={props.loadText} />
		}
	}

	return createElement(
		props.tag,
		{
			disabled: props.disabled,
			className: [btnClass(), props.className].join(' '),
			style: { ...btnStyle(), ...props.style },
			type: props.nativeType,
			onClick: props.onClick,
			onDoubleClick: props.onDoubleClick
		},
		slot
	)
}

Button.defaultProps = {
	className: null,
	style: null,
	children: null,
	onClick: null,
	onDoubleClick: null,
	type: 'default',
	size: 'medium',
	disabled: false,
	nativeType: 'button',
	block: false,
	tag: 'button',
	plain: false,
	color: null,
	subColor: null,
	round: false,
	square: false,
	active: true,
	loading: false,
	loadText: 'loading...',
	loadIcon: { type: 'load-e', spin: true }
}

export { Button, Button as default }
