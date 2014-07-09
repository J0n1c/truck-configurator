(function(){ 
	var t_conf = angular.module('trucks_configurator', []);
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
            this.sv_mdl = null;
			this.seriaId=inSeriaId;
		}
	});

	var truck_series = [
		{
			id:1,
			name:"ELF",
			imageUrl:"1.jpg",
            variants: [
                {
                    id: 1,
                    name: "ELF 3.5 S (NLR85A) Полная масса 3.5 т"
                },
                {
                    id: 2,
                    name: "ELF 3.5 (NMR85H) Полная масса 3.5 т"
                },
                {
                    id: 3,
                    name: "ELF 5.2 (NMR85H) Полная масса 5.2 т"
                },
                {
                    id: 4,
                    name: "ELF 7.5 (NPR75) Полная масса 7.5 т"
                },
                {
                    id: 5,
                    name: "ELF 9.5 (NQR90) Полная масса 9.5 т"
                }
            ]
		},
		{
			id:2,
			name:"Forward",
			imageUrl:"2.png",
            variants: [
                {
                    name: "FORWARD 12.0 (FSR90) Полная масса 12 т"
                },
                {
                    name: "FORWARD 18.0 (FVR34) Полная масса 18 т"
                }
            ]
		},
		{
			id:3,
			name:"GIGA",
			imageUrl:"3.jpg",
            variants: []
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
                type: "radio",
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
                type: "radio",
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
			},
            {
                id: 3,
                name: "Доп. опции",
                type: "checkbox",
                addition_variants:
                    [
                        {
                            id: 1,
                            name: "Кондиционер"
                        },
                        {
                            id: 2,
                            name: "Магнитола"
                        },
                        {
                            id: 3,
                            name: "Сигнализация"
                        },
                        {
                            id: 4,
                            name: "АБС"
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