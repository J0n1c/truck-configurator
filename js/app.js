(function(){ 
	var t_conf = angular.module('trucks_configurator', [])
	t_conf.controller('ConfiguratorController', function(){   
		this.truck = first_test_truck;
	});
	var first_test_truck = { 
		type: 'Автофургон', 
		subtype: 'Сэндвич',
		options: [
			{
				id: 1,
				name: "Тип",
				option_variants:[
					{
						id: 1,
						name:"ППУ"
					},
					{
						id: 2,
						name:"ППС"
					}
				]
			}			
		],
		additions: [
			{
				id: 1,
				name: "Автономный отопитель",
				addition_variants: 
					[
						{
							id: 1,
							name: "WEBASTO"	
						},
						{
							id: 2,
							name: "EBERSPACHER"
						}
					]
			},
			{
				id: 2,
				name: "Гидроборт",
				addition_variants: [
					{
						id: 3,
						name: "DHOLLANDIA"
					},
					{
						id: 4,
						name: "ZEPRO"
					},
					{
						id: 5,
						name: "DAUTEL"
					},
					{
						id: 6,
						name: "MBB"
					},
					{
						id: 7,
						name: "Другое"
					}
				]
			}					
		]
	};
})();