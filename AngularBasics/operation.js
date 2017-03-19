( function() {
		var name = "myApp",
		    requires = [],
		    myApp = null;

		myApp = angular.module(name, requires);
		
		myApp.service("addSvc", function() {
			this.add = function(first, second) {
				return parseInt(first) + parseInt(second);
			};
		});

		myApp.service("subtractSvc", function() {
			this.subtract = function(first, second) {
				return parseInt(first) - parseInt(second);
			};
		});
		myApp.controller("AppCtrl", function(addSvc, subtractSvc) {
			this.operator = "+";

			this.setOperator = function(operator) {
				this.operator = operator;
			};

			this.calculate = function(first, second) {
				if (this.operator === "+") {
					this.result = addSvc.add(first, second);
				}
				if (this.operator === "-") {
					this.result = subtractSvc.subtract(first, second);
				}

			};
		});
	}());
