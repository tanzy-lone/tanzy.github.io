<template>
	<div class="dashboard">
		<el-row :gutter="10">
			<el-col :span="7">
				<YlCard title="分类商品数量(饼图)">
					<pieEcharts :pie-data="categoryCount" />
				</YlCard>
			</el-col>
			<el-col :span="10">
				<YlCard title="不同城市商品销量">
					<mapEcharts :map-data="categoryAddress" />
				</YlCard>
			</el-col>
			<el-col :span="7">
				<YlCard title="分类商品数量(玫瑰图)">
					<roseEcharts :rose-data="categoryCount" />
				</YlCard>
			</el-col>
		</el-row>

		<el-row :gutter="10">
			<el-col :span="12">
				<YlCard title="分类商品的销量">
					<lineEcharts v-bind="categoryGoodsSale" />
				</YlCard>
			</el-col>
			<el-col :span="12">
				<YlCard title="分类商品的收藏">
					<barEcharts v-bind="categoryFavor" />
				</YlCard>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import YlCard from '@/base-ui/card/Card.vue'
import { pieEcharts, mapEcharts, roseEcharts, lineEcharts, barEcharts } from '@/components/pageEcharts/index'
import { computed } from 'vue'
import useAnalysisStore from '@/store/analysis'

const useAnalysis = useAnalysisStore()
useAnalysis.categoryEchartsAsync()
const categoryCount = computed(() => {
	return useAnalysis.categoryCount.map((item: any) => {
		return { name: item.name, value: item.goodsCount }
	})
})
const categoryAddress = computed(() => {
	return useAnalysis.categoryAddress.map((item: any) => {
		return { name: item.address, value: item.count }
	})
})
const categoryGoodsSale = computed(() => {
	const xLabels: any = []
	const values: any = []
	useAnalysis.categoryGoodsSale.map((item: any) => {
		xLabels.push(item.name)
		values.push(item.goodsCount)
	})
	return { xLabels, values }
})
const categoryFavor = computed(() => {
	const xLabels: any = []
	const values: any = []
	useAnalysis.categoryFavor.map((item: any) => {
		xLabels.push(item.name)
		values.push(item.goodsFavor)
	})
	return { xLabels, values }
})
</script>

<style lang="less" scoped></style>
