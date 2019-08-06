<template>
	<div>
		<kuangia-header></kuangia-header>
		<kuangia-zuoce></kuangia-zuoce>
		<div style="margin-left: 210px; margin-top: 10px;">首页>基本资料</div>
		<div class="biao">
			<el-main>
					<el-table
					:data="tableData"
					style="width: 100%"
					max-height="600">
					<el-table-column
					  fixed
					  prop="date"
					  label="日期"
					  width="150">
					</el-table-column>
					<el-table-column
					  prop="gender"
					  label="性别"
					  width="100">
					</el-table-column>
					<el-table-column
					  prop="nation"
					  label="民族"
					  width="100">
					</el-table-column>
					<el-table-column
					  prop="phone"
					  label="电话号码"
					  width="130">
					</el-table-column>
					<el-table-column
					  prop="id"
					  label="身份证号码"
					  width="180">
					</el-table-column>
					<el-table-column
					  prop="mail"
					  label="电子邮件"
					  width="180">
					</el-table-column>
					<el-table-column
					  prop="title"
					  label="职称"
					  width="130">
					</el-table-column>
					<el-table-column
					  prop="name"
					  label="姓名"
					  width="120">
					</el-table-column>
					<el-table-column
					  prop="province"
					  label="省份"
					  width="120">
					</el-table-column>
					<el-table-column
					  prop="city"
					  label="市区"
					  width="120">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="地址"
					  width="300">
					</el-table-column>
					<el-table-column
					  prop="zip"
					  label="邮编"
					  width="120">
					</el-table-column>
					<el-table-column
					  fixed="right"
					  label="操作"
					  width="300">
					  <template slot-scope="scope">
						<!-- <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button> -->
						<el-button size="mini">编辑</el-button>
						<el-button size="mini" type="primary">查看高级资料</el-button>
						<!-- <el-button size="mini" type="danger">删除</el-button> -->
						<el-button type="danger" size="mini" @click="open">删除</el-button>
					  </template>
					</el-table-column>
				  </el-table>
				</el-main>
		</div>
	</div>
</template>

<script>
	import KuangiaHeader from '@/pages/kuangia/components/Header'
	import KuangiaZuoce from '@/pages/kuangia/components/Zuoce'
	export default {
	
		  name: 'YuangongBiaodan',
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
          date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		},
		{
		  date: '2016-05-03',
		  gender:'男',
		  nation:'汉',
		  phone:'18569107125',
		  id:'430723199808234613',
		  mail:'1715756251@qq.com',
		  title:'教授',
		  name: '王小虎',
		  province: '上海',
		  city: '普陀区',
		  address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333
		}]
      }
	}
		}
</script>

<style>
	.biao{
		float: left;
		width:86%;
		margin-left: 200px;
	}
</style>
