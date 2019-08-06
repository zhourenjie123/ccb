<template>
	<div>
		<KuangiaHeader></KuangiaHeader>
		<KuangiaZuoce></KuangiaZuoce>
		<div style="margin-left: 210px; margin-top: 10px; margin-bottom: 10px;">首页>基础信息设置</div>
		<div style="margin-left: 210px; margin-top: 10px; margin-bottom: 10px;">
			<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
				<el-tab-pane label="部门管理" name="first">
					<div class="custom-tree-container">
					  <div class="block">
						<el-tree
						  :data="data"
						  show-checkbox
						  node-key="id"
						  default-expand-all
						  :expand-on-click-node="false">
						  <span class="custom-tree-node" slot-scope="{ node, data }">
							<span>{{ node.label }}</span>
							<span>
							  <el-button
								type="text"
								size="mini"
								@click="() => append(data)">
								添加
							  </el-button>
							  <el-button
								type="text"
								size="mini"
								@click="() => remove(node, data)">
								删除
							  </el-button>
							</span>
						  </span>
						</el-tree>
					  </div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="职位管理" name="second">
					<div>
						<el-table
						:data="tableData"
						style="width: 100%">
						<el-table-column
						  prop="ccc"
						  label="编号"
						  width="100">
						</el-table-column>
						<el-table-column
						  prop="cce"
						  label="职位名称"
						  width="100">
						</el-table-column>
						<el-table-column
						  prop="ccv"
						  label="创建时间"
						  width="130">
						</el-table-column>
						<el-table-column
						  prop="address"
						  label="地址"
						  width="150">
						  <template slot-scope="scope">
						  <el-button size="mini">编辑</el-button>
						  </template>
						  <template slot-scope="scope">
						  <el-button type="danger" size="mini" @click="open">删除</el-button>
						  </template>
					  </el-table-column>
					  </el-table>
					</div>
				</el-tab-pane>
				<el-tab-pane label="角色管理" name="third">
					<div>
						<el-table
						:data="tableData"
						style="width: 100%">
						<el-table-column
						  prop="ccc1"
						  label="编号"
						  width="100">
						</el-table-column>
						<el-table-column
						  prop="cce"
						  label="职位名称"
						  width="100">
						</el-table-column>
						<el-table-column
						  prop="ccv"
						  label="创建时间"
						  width="130">
						</el-table-column>
						<el-table-column
						  prop="address"
						  label="地址"
						  width="150">
						  <template slot-scope="scope">
						  <el-button size="mini">编辑</el-button>
						  </template>
						  <template slot-scope="scope">
						  <el-button type="danger" size="mini" @click="open">删除</el-button>
						  </template>
					  </el-table-column>
					  </el-table>
					</div>
				</el-tab-pane>
				<el-tab-pane label="定时任务补偿" name="faaa">奖惩规则</el-tab-pane>
				<el-tab-pane label="定时任务补偿" name="fourth">
					<div>
						<el-collapse v-model="activeName" accordion style="width: 500px;">
						  <el-collapse-item title="可访问的资源" name="1">
								<el-tree
									:data="data"
									show-checkbox
									node-key="id"
									:default-checked-keys="[1,4,9]"
									:props="defaultProps"
									:default-expand-all='false'>
								</el-tree>
								<el-button size="mini" style="float: right; margin-left: 10px;" type="primary">确认修改</el-button>
								<el-button size="mini" style="float: right;">取消修改</el-button>
						  </el-collapse-item>
						</el-collapse>
						<el-collapse v-model="activeName" accordion style="width: 500px;">
						  <el-collapse-item title="人事专员" name="1">
						  	<el-tree
						  		:data="data"
						  		show-checkbox
						  		node-key="id"
						  		:default-checked-keys="[1,4,9]"
						  		:props="defaultProps"
						  		:default-expand-all='false'>
						  	</el-tree>
						  	<el-button size="mini" style="float: right; margin-left: 10px;" type="primary">确认修改</el-button>
						  	<el-button size="mini" style="float: right;">取消修改</el-button>
						  </el-collapse-item>
						</el-collapse>
						<el-collapse v-model="activeName" accordion style="width: 500px;">
						  <el-collapse-item title="招聘主管" name="1">
						  	<el-tree
						  		:data="data"
						  		show-checkbox
						  		node-key="id"
						  		:default-checked-keys="[1,4,9]"
						  		:props="defaultProps"
						  		:default-expand-all='false'>
						  	</el-tree>
						  	<el-button size="mini" style="float: right; margin-left: 10px;" type="primary">确认修改</el-button>
						  	<el-button size="mini" style="float: right;">取消修改</el-button>
						  </el-collapse-item>
						</el-collapse>
						<el-collapse v-model="activeName" accordion style="width: 500px;">
						  <el-collapse-item title="培训主管" name="1">
						  	<el-tree
						  		:data="data"
						  		show-checkbox
						  		node-key="id"
						  		:default-checked-keys="[1,4,9]"
						  		:props="defaultProps"
						  		:default-expand-all='false'>
						  	</el-tree>
						  	<el-button size="mini" style="float: right; margin-left: 10px;" type="primary">确认修改</el-button>
						  	<el-button size="mini" style="float: right;">取消修改</el-button>
						  </el-collapse-item>
						</el-collapse>
						<el-collapse v-model="activeName" accordion style="width: 500px;">
						  <el-collapse-item title="薪酬绩效主管" name="1">
						  	<el-tree
						  		:data="data"
						  		show-checkbox
						  		node-key="id"
						  		:default-checked-keys="[1,4,9]"
						  		:props="defaultProps"
						  		:default-expand-all='false'>
						  	</el-tree>
						  	<el-button size="mini" style="float: right; margin-left: 10px;" type="primary">确认修改</el-button>
						  	<el-button size="mini" style="float: right;">取消修改</el-button>
						  </el-collapse-item>
						</el-collapse>
						<el-collapse v-model="activeName" accordion style="width: 500px;">
						  <el-collapse-item title="测试角色2" name="1">
						  	<el-tree
						  		:data="data"
						  		show-checkbox
						  		node-key="id"
						  		:default-checked-keys="[1,4,9]"
						  		:props="defaultProps"
						  		:default-expand-all='false'>
						  	</el-tree>
						  	<el-button size="mini" style="float: right; margin-left: 10px;" type="primary">确认修改</el-button>
						  	<el-button size="mini" style="float: right;">取消修改</el-button>
						  </el-collapse-item>
						</el-collapse>
						<el-collapse v-model="activeName" accordion style="width: 500px;">
						  <el-collapse-item title="测试角色1" name="1">
						  	<el-tree
						  		:data="data"
						  		show-checkbox
						  		node-key="id"
						  		:default-checked-keys="[1,4,9]"
						  		:props="defaultProps"
						  		:default-expand-all='false'>
						  	</el-tree>
						  	<el-button size="mini" style="float: right; margin-left: 10px;" type="primary">确认修改</el-button>
						  	<el-button size="mini" style="float: right;">取消修改</el-button>
						  </el-collapse-item>
						</el-collapse>
						<el-collapse v-model="activeName" accordion style="width: 500px;">
						  <el-collapse-item title="方法" name="1">
						  	<el-tree
						  		:data="data"
						  		show-checkbox
						  		node-key="id"
						  		:default-checked-keys="[1,4,9]"
						  		:props="defaultProps"
						  		:default-expand-all='false'>
						  	</el-tree>
						  	<el-button size="mini" style="float: right; margin-left: 10px;" type="primary">确认修改</el-button>
						  	<el-button size="mini" style="float: right;">取消修改</el-button>
						  </el-collapse-item>
						</el-collapse>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import KuangiaHeader from '@/pages/kuangia/components/Header'
	import KuangiaZuoce from '@/pages/kuangia/components/Zuoce'
	let id = 1000;
		export default {
			name:'cce1',
			components:{
			  KuangiaHeader,
			  KuangiaZuoce
			},
			data() {
			  const data = [{
				id: 1,
				label: '一级 1',
				children: [{
				  id: 4,
				  label: '二级 1-1',
				  children: [{
					id: 9,
					label: '三级 1-1-1'
				  }, {
					id: 10,
					label: '三级 1-1-2'
				  }]
				}]
			  }, {
				id: 2,
				label: '一级 2',
				children: [{
				  id: 5,
				  label: '二级 2-1'
				}, {
				  id: 6,
				  label: '二级 2-2'
				}]
			  }, {
				id: 3,
				label: '一级 3',
				children: [{
				  id: 7,
				  label: '二级 3-1'
				}, {
				  id: 8,
				  label: '二级 3-2'
				}]
			  }];
			  return {
				data: JSON.parse(JSON.stringify(data)),
				data: JSON.parse(JSON.stringify(data)),
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
				tableData: [{
				  ccc:'29',
				  ccc1:'01',
				  cce:'技术总监',
				  ccv: '2018-01-11',
					},
				{
				  ccc:'29',
				  cce:'运营总监',
				  ccc1:'01',
				  ccv: '2018-01-11',
				},
				{
				  ccc:'29',
				  cce:'市场总监',
				  ccc1:'01',
				  ccv: '2018-01-11',
				},
				{
				  ccc:'29',
				  cce:'总经理',
				  ccc1:'01',
				  ccv: '2018-01-11',
				},
				{
				  ccc:'29',
				  cce:'研发工程师',
				  ccc1:'01',
				  ccv: '2018-01-11',
				},
				{
				  ccc:'29',
				  cce:'运维工程师',
				  ccc1:'01',
				  ccv: '2018-01-11',
				}]
			  }
			},

			methods: {
			  append(data) {
				const newChild = { id: id++, label: 'testtest', children: [] };
				if (!data.children) {
				  this.$set(data, 'children', []);
				}
				data.children.push(newChild);
			  },

			  remove(node, data) {
				const parent = node.parent;
				const children = parent.data.children || parent.data;
				const index = children.findIndex(d => d.id === data.id);
				children.splice(index, 1);
			  },

			  renderContent(h, { node, data, store }) {
				return (
				  <span class="custom-tree-node">
					<span>{node.label}</span>
					<span>
					  <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
					  <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
					</span>
				  </span>);
			  }
			}
		  };
</script>

<style>
</style>
