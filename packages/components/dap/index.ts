import Dap from 'dap-util'

//解决ios系统下css伪类无效的问题
Dap.event.on(window, 'touchstart.ios', (e: any) => {
	console.log(e)
})

export { Dap, Dap as default }
