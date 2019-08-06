<template>
	<div>
		<el-collapse v-model="activeName" accordion>
		  <el-collapse-item title="一致性 Consistency" name="1">
				<el-tree
					:data="data"
					show-checkbox
					node-key="id"
					:default-checked-keys="[1,4,9]"
					:props="defaultProps"
					:default-expand-all='false'>
				</el-tree>
		  </el-collapse-item>
		  <el-collapse-item title="反馈 Feedback" name="2">
			  <el-tree
			  	:data="data"
			  	show-checkbox
			  	node-key="id"
			  	:default-checked-keys="[1,4,9]"
			  	:props="defaultProps"
			  	:default-expand-all='false'>
			  </el-tree>
		  </el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
	export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '所有',
          children: [{
            id: 4,
            label: '员工资料',
            children: [{
              id: 9,
              label: '基本资料'
            }]
          },{
			id: 4,
			label: '人事管理',
			children: [{
			  id: 9,
			  label: '员工奖惩'
			},{
			  id: 9,
			  label: '员工培训'
			},{
			  id: 9,
			  label: '员工调薪'
			},{
			  id: 9,
			  label: '员工调动'
			}],  
		  },{
			id: 4,
			label: '薪资管理',
			children: [{
			  id: 9,
			  label: '工资账套管理'
			},{
			  id: 9,
			  label: '员工账套设置'
			},{
			  id: 9,
			  label: '工资表管理'
			},{
			  id: 9,
			  label: '月末处理'
			},{
			  id: 9,
			  label: '工资表查询'
			}],  
		  },{
			id: 4,
			label: '统计管理',
			children: [{
			  id: 9,
			  label: '综合信息统计'
			},{
			  id: 9,
			  label: '员工积分统计'
			},{
			  id: 9,
			  label: '人事信息统计'
			},{
			  id: 9,
			  label: '人事记录统计'
			}],  
		  },{
			id: 4,
			label: '系统管理',
			children: [{
			  id: 9,
			  label: '基础信息设置'
			},{
			  id: 9,
			  label: '系统管理'
			},{
			  id: 9,
			  label: '操作日志管理'
			},{
			  id: 9,
			  label: '操作员管理'
			},{
			  id: 9,
			  label: '备份恢复数据库'
			},{
			  id: 9,
			  label: '初始化数据库'
			}],  
		  }]
        }],
      };
    }
  };
</script>

<style>
</style>
