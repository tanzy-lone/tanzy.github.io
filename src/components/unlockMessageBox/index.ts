import { createApp, watch } from 'vue'
import unlockMessageBox from './unlockMessageBox.vue'

function lockCpn(options?: any) {
	const app = createApp(unlockMessageBox, options)
	showLockCpn(app)
}

function showLockCpn(app: any) {
	const fragement = document.createDocumentFragment()
	const vm = app.mount(fragement)
	document.body.appendChild(fragement)
	vm.setVisible(true)
	watch(
		() => vm.allStateCpn,
		(allStateCpn) => {
			if (!allStateCpn.visivle) {
				hideMessageBox(app)
			}
		}
	)
}

const hideMessageBox = (app: any) => {
	app.unmount()
}

export default lockCpn
