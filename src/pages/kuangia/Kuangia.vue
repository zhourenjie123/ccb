<template>
	<div>
		<kuangia-header></kuangia-header>
		<kuangia-zuoce></kuangia-zuoce>
	</div>
</template>

<script>
	import KuangiaHeader from './components/Header'
	import KuangiaZuoce from './components/Zuoce'
	export default {
		  name: 'Kuangia',
		   components:{
			   KuangiaHeader,
			   KuangiaZuoce
		   }
		}
</script>

<style>
</style>
