<template>
	<div>
		<KuangiaHeader></KuangiaHeader>
		<KuangiaZuoce></KuangiaZuoce>
		<div style="margin-left: 210px; margin-top: 10px; margin-bottom: 10px;">首页>工资套账管理</div>
		<div style="margin-left: 200px;">
			<el-table
			:data="tableData"
			style="width: 100%">
			<el-table-column
			  prop="cca"
			  label="账套名称"
			  width="130">
			</el-table-column>
			<el-table-column
			  prop="ccf"
			  label="基本工资"
			  width="80">
			</el-table-column>
			<el-table-column
			  prop="ccc"
			  label="交通补助"
			  width="80">
			</el-table-column>
			<el-table-column
			  prop="ccd"
			  label="午餐补助"
			  width="80">
			</el-table-column>
			<el-table-column
			  prop="cce"
			  label="奖金"
			  width="80">
			</el-table-column>
			<el-table-column
			  prop="ccv"
			  label="启用时间"
			  width="100">
			</el-table-column>
			<el-table-column label="养老金">
			  <el-table-column
				prop="ratio"
				label="比率"
				width="75">
			  </el-table-column>
			  <el-table-column
				prop="base"
				label="基数"
				width="75">
			  </el-table-column>
			</el-table-column>
			  <el-table-column label="医疗保险">
				<el-table-column
				  prop="ratio"
				  label="比率"
				  width="75">
				</el-table-column>
				<el-table-column
				  prop="base"
				  label="基数"
				  width="75">
				</el-table-column>
			  </el-table-column>
			  <el-table-column label="公积金">
				<el-table-column
				  prop="ratio"
				  label="比率"
				  width="75">
				</el-table-column>
				<el-table-column
				  prop="base"
				  label="基数"
				  width="75">
				</el-table-column>
			  </el-table-column>
			  <el-table-column label="地址">
				<el-table-column
				  prop="address"
				  label="地址"
				  width="150">
				  <template slot-scope="scope">
				  <el-button size="mini">编辑</el-button>
				  </template>
				</el-table-column>
				<el-table-column
				  prop="zip"
				  label="邮编"
				  width="150">
				  <template slot-scope="scope">
				  <el-button type="danger" size="mini" @click="open">删除</el-button>
				  </template>
				</el-table-column>
			  </el-table-column>
		  </el-table>
		</div>
	</div>
</template>

<script>
import KuangiaHeader from '@/pages/kuangia/components/Header'
import KuangiaZuoce from '@/pages/kuangia/components/Zuoce'
export default {
		  name: 'gongzi',
		  components:{
		  	  KuangiaHeader,
			  KuangiaZuoce
		  },
		  methods: {
		    deleteRow(index, rows) {
		      rows.splice(index, 1);
		    },
		  open() {
		      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		        confirmButtonText: '确定',
		        cancelButtonText: '取消',
		        type: 'warning'
		      }).then(() => {
		        this.$message({
		          type: 'success',
		          message: '删除成功!'
		        });
		      }).catch(() => {
		        this.$message({
		          type: 'info',
		          message: '已取消删除'
		        });          
		      });
		    }
		  },
		  data() {
      return {
        tableData: [{
		  cca:'市场部工资套账',
		  ccf:'9000',
		  ccc:'500',
		  ccd:'800',
		  cce:'4000',
          ccv: '2016-05-03',
		  ratio:'0.7',
		  base:'2000'
        },
		{
		  cca:'市场部工资套账',
		  ccf:'9000',
		  ccc:'500',
		  ccd:'800',
		  cce:'4000',
		  ccv: '2016-05-03',
		  ratio:'0.7',
		  base:'2000'
		},
		{
		  cca:'市场部工资套账',
		  ccf:'9000',
		  ccc:'500',
		  ccd:'800',
		  cce:'4000',
		  ccv: '2016-05-03',
		  ratio:'0.7',
		  base:'2000'
		},
		{
		  cca:'市场部工资套账',
		  ccf:'9000',
		  ccc:'500',
		  ccd:'800',
		  cce:'4000',
		  ccv: '2016-05-03',
		  ratio:'0.7',
		  base:'2000'
		},
		{
		  cca:'市场部工资套账',
		  ccf:'9000',
		  ccc:'500',
		  ccd:'800',
		  cce:'4000',
		  ccv: '2016-05-03',
		  ratio:'0.7',
		  base:'2000'
		},
		{
		  cca:'市场部工资套账',
		  ccf:'9000',
		  ccc:'500',
		  ccd:'800',
		  cce:'4000',
		  ccv: '2016-05-03',
		  ratio:'0.7',
		  base:'2000'
		},
		{
		  cca:'市场部工资套账',
		  ccf:'9000',
		  ccc:'500',
		  ccd:'800',
		  cce:'4000',
		  ccv: '2016-05-03',
		  ratio:'0.7',
		  base:'2000'
		}]
      }
    }
	}
</script>

<style>
</style>
