<template>
<div>
	<el-container > 
	  <el-container>
		<el-header style="text-align: right; font-size: 12px; background-color: #20a0ff">
			<div style="float: left; color: #fff; font-size:22px; margin-left:20px;">微人事</div>
		  <el-dropdown>
			<i class="el-icon-setting" style="margin-right: 15px"></i>
		  </el-dropdown>
		  <el-dropdown style="cursor:pointer;">
			  <span class="el-dropdown-link" style="color: #fff; line-height: 30px;">
				系统管理员 <img src="../../../assets/img/index_03.png">	
			  </span>
			  <el-dropdown-menu slot="dropdown">
				<el-dropdown-item>个人中心</el-dropdown-item>
				<el-dropdown-item>设置</el-dropdown-item>
				<el-dropdown-item divided>注销</el-dropdown-item>
			  </el-dropdown-menu>
          </el-dropdown>
		  <template></template>
		</el-header>
		</el-container>
	</el-container>
		
		
	
</div>
</template>

<script>
	export default {
		  name: 'KuangiaHeader',
		  //  data() {
			 //  const item = {
				// date: '2016-05-02',
				// name: '王小虎',
				// address: '上海市普陀区金沙江路 1518 弄'
			 //  };
			 //  return {
				// tableData: Array(20).fill(item)
			 //  }
    //         }
		}
</script>

<style>
body,div,ol,ul,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,p,form,fieldset,legend,input{ margin:0; padding:0;}
h1,h2,h3,h4,h5,h6{ font-size:100%; font-weight:normal;}
ol,ul{ list-style:none;}
	.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
	.el-dropdown-link img{
	  width: 30px;
	  height: 30px;
	  vertical-align:middle ; 
	  border-radius: 50%;
	}
  .aaa{
	  position: absolute;
	  width: 200px;
	  height: 100%;
	  background-color: #ececec;
  }
  
</style>
