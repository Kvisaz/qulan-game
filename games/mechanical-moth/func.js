var GameFunc = {
	// записываем параметры через this.
	// как только функция применяется - параметр появляется
	// имена функций не должны совпадать с именами параметров
	spiritF: function (value) {
		this.spirit += value;
	},
	
	intellectF: function(value){
		this.intellect += value;
	},

	healthFn: function(value) {
		this.health += value;
	},

	// в этом же объекте можно задавать параметры как поля
	someParam: 12, // добавили параметр с именем someParam и значением 12

	someParamChange: function (value) { // теперь можем вызывать эту функцию, чтобы менять параметр
		this.someParam += value;
    }

};