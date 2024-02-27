import Dap from 'dap-util'
//解决ios系统下css伪类无效的问题
Dap.event.on(window, 'touchstart.ios', (e: any) => {
	console.log(e)
})

/***** 全局默认样式 *****/
import './css/mvi-default.less'
/***** 辅助样式 *****/
import './css/mvi-support.less'

/***** 按需导出 *****/
export * from './components/icon'
export * from './components/button'

/***** 版本号 *****/
export const version = '0.0.1'
