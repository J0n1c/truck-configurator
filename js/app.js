(function(){ 
	var t_conf = angular.module('trucks_configurator', [])
	t_conf.controller('TConfiguratorController', function(){ 
		this.truck = first_test_truck;
		this.truck_types = truck_types;
		this.truck_series = truck_series;

		this.typeId=0;
		this.seriaId=0;

		// --- Type ---
		this.isSelected = function(typeId){
			return this.typeId===typeId;
		}
		this.selectType = function(inTypeId){
			this.typeId=inTypeId;
			$("#iTypeId").val(inTypeId);
		}
		this.selectedType = function(){
			return truck_types[this.typeId-1];
		}
		// --- SERIA ---
		this.isSelectedSeria = function(seriaId){
			return this.seriaId===seriaId;
		}
		this.selectSeria = function(inSeriaId){
			this.seriaId=inSeriaId;
		}
	});

	var truck_series = [
		{
			id:1,
			name:"ELF",
			imageUrl:"1.jpg"
		},
		{
			id:2,
			name:"Forward",
			imageUrl:"2.png"
		},
		{
			id:3,
			name:"GIGA",
			imageUrl:"3.jpg"
		}
	];



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

	var truck_types = [
		{
			id: 1,
			imageUrl: "truck.png",
			name: "Тягач"
		},
		{
			id: 2,
			imageUrl: "chassis.png",
			name: "Шасси"
		},
		{
			id: 3,
			imageUrl: "distribution-box.png",
			name: "Фургон промтоварный"
		},
		{
			id: 4,
			imageUrl: "isothermal.png",
			name: "Фургон изотермический"
		},
		{
			id: 5,
			imageUrl: "temperature-controlled.png",
			name: "Фургон рефрижераторный"
		},
		{
			id: 6,
			imageUrl: "curtainsider.png",
			name: "Тентованный шторный"
		},
		{
			id: 7,
			imageUrl: "platform-curtainsider.png",
			name: "Тентованный бортовой"
		},
		{
			id: 8,
			imageUrl: "platform.png",
			name: "Бортовой открытый"
		},
		{
			id: 9,
			imageUrl: "tanker.png",
			name: "Цистерна"
		},
		{
			id: 10,
			imageUrl: "container.png",
			name: "Контейнеровоз"
		},
		{
			id: 11,
			imageUrl: "mobile-crane.png",
			name: "Кран-манипулятор"
		},
		{
			id: 12,
			imageUrl: "tipper.png",
			name: "Самосвальный кузов"
		},
		{
			id: 13,
			imageUrl: "concrete.png",
			name: "Автобетоносмеситель"
		},
		{
			id: 14,
			imageUrl: "refuse-collectors.png",
			name: "Мусоровоз"
		},
		{
			id: 15,
			imageUrl: "timber.png",
			name: "Лесовоз"
		}
	]
})();