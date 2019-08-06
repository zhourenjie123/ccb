<template>
	<div>
		<KuangiaHeader></KuangiaHeader>
		<KuangiaZuoce></KuangiaZuoce>
		<div style="margin-left: 210px; margin-top: 10px; margin-bottom: 10px;">首页>员工套账管理</div>
		<div style="margin-left: 200px;">
			<el-table
			:data="tableData"
			border
			style="width: 100%">
			<el-table-column
			  prop="name"
			  label="姓名"
			  width="175">
			</el-table-column>
			<el-table-column
			  prop="job"
			  label="工号"
			  width="180">
			</el-table-column>
			<el-table-column
			  prop="mail"
			  label="电子邮件"
			  width="180">
			</el-table-column>
			<el-table-column
			  prop="phone"
			  label="手机号码"
			  width="180">
			</el-table-column>
			<el-table-column label="工资套账" width="300">
				<el-tooltip placement="right">
				  <div slot="content"><span style="border: 1px solid dodgerblue; border-radius: 5px; color:dodgerblue; background-color: rgba(0,0,0,0.1);">基本工资</span>￥2000<br/><span style="border: 1px solid dodgerblue; border-radius: 5px; color:dodgerblue; background-color: rgba(0,0,0,0.1);">基本工资</span>￥2000</div>
				  <el-button style="color:dodgerblue;">人事部工资套账</el-button>
				</el-tooltip>
			</el-table-column >
			<el-table-column
			  prop="mail"
			  label="电子邮件"
			  width="300">
			  <template slot-scope="scope">
			  <el-button type="danger" size="mini" @click="open">删除</el-button>
			  </template>
			</el-table-column>
		  </el-table>
		</div>
	</div>
</template>

<script>
import KuangiaHeader from '@/pages/kuangia/components/Header'
import KuangiaZuoce from '@/pages/kuangia/components/Zuoce'
export default {
		  name: 'ccw1',
		  components:{
		  	  KuangiaHeader,
			  KuangiaZuoce
		  },
		  data() {
      return {
		visible:false,
        tableData: [{
          name: '王小虎',
		  job:'00000001',
		  mail:'zhou@qq.com',
		  phone:'18569107125'
        },{
          name: '王小虎',
		  job:'00000001',
		  mail:'zhou@qq.com',
		  phone:'18569107125'
        },{
          name: '王小虎',
		  job:'00000001',
		  mail:'zhou@qq.com',
		  phone:'18569107125'
        },{
          name: '王小虎',
		  job:'00000001',
		  mail:'zhou@qq.com',
		  phone:'18569107125'
        },]
      }
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
	}
</script>

<style>
</style>
