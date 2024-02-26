import { createElement } from 'react'
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
	//是否显示加载状态
	loading?: boolean
	//加载文字
	loadText?: string
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
	//加载图标
	loadIcon?: string | object
}

const LoadTextNode = ({ loadText }) => {
	if (!loadText) {
		return null
	}
	return <span className='mvi-button-load-text'>{loadText}</span>
}

const LoadNode = ({ loadIcon, loadText }) => {
	const parseIcon = param => {
		let icon = {
			spin: false,
			type: null,
			url: null,
			color: null,
			size: null
		}
		if (Dap.common.isObject(param)) {
			if (typeof param.spin == 'boolean') {
				icon.spin = param.spin
			}
			if (typeof param.type == 'string') {
				icon.type = param.type
			}
			if (typeof param.url == 'string') {
				icon.url = param.url
			}
			if (typeof param.color == 'string') {
				icon.color = param.color
			}
			if (typeof param.size == 'string') {
				icon.size = param.size
			}
		} else if (typeof param == 'string') {
			icon.type = param
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

const Button = ({ className = null, style = null, children = null, type = 'default', size = 'medium', disabled = false, nativeType = 'button', loading = false, loadText = 'loading...', block = false, tag = 'button', plain = false, color = null, subColor = null, round = false, square = false, active = true, loadIcon = { type: 'load-e', spin: true } }: ButtonProps) => {
	const btnClass = () => {
		let cls = ['mvi-button']
		if (type) {
			cls.push(type)
		}
		if (size) {
			cls.push(size)
		}
		if (round) {
			cls.push('round')
		} else if (square) {
			cls.push('square')
		}
		if (block) {
			cls.push('block')
		}
		if (plain) {
			cls.push('plain')
		}
		if (active && !disabled) {
			cls.push('active')
		}
		if (loading) {
			cls.push('loading')
		}
		return cls.join(' ')
	}
	const btnStyle = () => {
		let obj: any = {}
		//单色
		if (plain) {
			if (color) {
				obj.color = color
				obj.borderColor = color
				obj.background = subColor || '#fff'
			}
		} else {
			if (color) {
				obj.background = color
				obj.borderColor = color
				obj.color = subColor || '#fff'
			}
		}
		return obj
	}

	//如果是加载状态
	if (loading) {
		children = <LoadNode loadIcon={loadIcon} loadText={loadText} />
	}

	return createElement(
		tag,
		{
			disabled: disabled,
			className: [btnClass(), className].join(' '),
			style: { ...btnStyle(), ...style },
			type: nativeType
		},
		children
	)
}

export { Button, Button as default }
