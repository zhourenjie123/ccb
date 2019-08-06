<template>
	<div style="float: left; width: 200px;">
		<el-container>
			<el-aside  width="200px" style="background-color: rgb(238, 241, 246); ">
			  <el-menu :default-openeds="['1', '3']" class="aaa" style="border-right: none;">
				  
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>员工资料</template>
						<el-menu-item-group>
						<el-menu-item index="1-1" class="aaw"><a><router-link to='/Yuangong' style="">基本资料</router-link></a></el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>人事管理</template>
						<el-menu-item-group>
						<el-menu-item index="2-1">员工奖惩</el-menu-item>
						<el-menu-item index="2-2">员工培训</el-menu-item>
						<el-menu-item index="2-3">员工调薪</el-menu-item>
						<el-menu-item index="2-4">员工调动</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>薪资管理</template>
						<el-menu-item-group>
						<el-menu-item index="3-1" class="aaw"><a><router-link to='/gongzizi' style="">工资账套管理</router-link></a></el-menu-item>
						<el-menu-item index="3-2" class="aaw"><a><router-link to='/ccw' style=''>员工账套设置</router-link></a></el-menu-item>
						<el-menu-item index="3-3">工资表管理</el-menu-item>
						<el-menu-item index="3-4">月末处理</el-menu-item>
						<el-menu-item index="3-5">工资表查询</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-setting"></i>统计管理</template>
						<el-menu-item-group>
						<el-menu-item index="4-1">综合信息统计</el-menu-item>
						<el-menu-item index="4-2">员工积分统计</el-menu-item>
						<el-menu-item index="4-3">人事信息统计</el-menu-item>
						<el-menu-item index="4-4">人事记录统计</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-setting"></i>系统管理</template>
						<el-menu-item-group>
						<el-menu-item index="5-1" class="aaw"><a><router-link to='/cce' style=''>基础信息设置</router-link></a></el-menu-item>
						<el-menu-item index="5-2">系统管理</el-menu-item>
						<el-menu-item index="5-3">操作日志管理</el-menu-item>
						<el-menu-item index="5-4">操作员管理</el-menu-item>
						<el-menu-item index="5-5">备份恢复数据库</el-menu-item>
						<el-menu-item index="5-6">初始化数据库</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				
			  </el-menu>  
			</el-aside>				 
		</el-container>
	</div>
</template>

<script>
	export default {
		  name: 'KuangiaZuoce'
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
		.aaw a{
			text-decoration: none;
		}
</style>
