import { coordinateData } from './coordinateData'

interface IData {
	name: string
	value: string
}

export function convertData(data: any) {
	const res: IData[] = []
	for (let i = 0; i < data.length; i++) {
		const geoCoord = coordinateData[data[i].name]
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			})
		}
	}
	return res
}
