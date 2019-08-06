<template>
	<div class="dlu_min">
		<div class="dlu_top">
			<div class="dlu_top1">系统登录</div>
			<el-input placeholder="请输入内容" v-model="input" clearable></el-input>
			<el-input placeholder="请输入密码" v-model="input1" show-password></el-input>
			<el-checkbox v-model="checked">记住密码</el-checkbox>
			<el-button type="primary" class="cca"><a><router-link to='/Kuangia'>登录</router-link></a></el-button>
		</div>
	</div>
</template>

<script>
	export default {
		  name: 'DluHeader',
		   data() {
			  return {
				input: '',
				input1: '',
				checked: false
			  }
            }
		}
</script>

<style scoped>
	.dlu_min{
		width: 100%;
		height: 100%;
		position: absolute;		
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
	}
	
	.dlu_top{
		width: 450px;
		height: 370px;
		box-shadow:1px 1px 9px 9px #E4E7ED;
		margin: 0 auto;
		border-radius: 15px;
	}
	.dlu_top1{
		width: 450px;
		height: 80px;
		line-height: 80px;
		text-align: center; 
		font-size: 18px;
		font-weight:bold; 
		color: #505458;
	}
	.el-input{
		width: 390px;
		margin-left: 30px;
		margin-top: 20px;
	}
	.el-checkbox{
		margin-left: 180px;
		margin-top: 25px;
	}
	.el-button{
		width: 390px;
		margin-left: 30px;
		margin-top: 40px;
	}
	.cca a{
		text-decoration: none;
		color: #FFFFFF;
	}
</style>
