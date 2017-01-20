(function (angular) {
	function dashboardController ($scope, dashboardService, jediListService) {
		var that = this;

		function init(){
			load();
			chart();
		}

		function load(){
			jediListService.load().then(function(data){
				that.jediObj = data;
				jediListService.loadStatus().then(function(data){
					that.status = data;
					getStatus();
				});
			});			
		}

		function getStatus(){
			for(var j = 0; j < that.jediObj.length; j++){
				for(var s = 0; s < that.status.length; s++){
					if(parseInt(that.jediObj[j].status) === that.status[s].id){
						that.jediObj[j].status_name = that.status[s].status_name;
					}
				}
			}	
			getChartData();		
		}		

		function getChartData(){
			that.chartStatus = [];
			that.chartStatusName = [];

			that.planetaName = [];
			that.planetaData = [];

			for(var s = 0; s < that.status.length; s++){
				that.chartStatusName.push(that.status[s].status_name);
				that.chartStatus.push(0);
			}

			if(that.chartStatusName.length > 0){
				for(var c = 0; c < that.chartStatusName.length; c++){
					for(var x = 0; x < that.jediObj.length; x++){						
						if(that.jediObj[x].status_name == that.chartStatusName[c]){
							that.chartStatus.splice(c, 1, that.chartStatus[c] + 1);
						}
					}
				}
			}

			for(var status = 0; status < that.chartStatus.length; status++){
				if(that.chartStatus[status] == 0){
					that.chartStatus.splice(status, 1);
					that.chartStatusName.splice(status, 1);
				}
			}

			for(var s = 0; s < that.jediObj.length; s++){
				that.planetaName.push(that.jediObj[s].planet);
				that.planetaData.push(0);
			}

			if(that.planetaName.length > 0){
				for(var c = 0; c < that.planetaName.length; c++){
					for(var x = 0; x < that.jediObj.length; x++){						
						if(that.jediObj[x].planet == that.planetaName[c]){
							that.planetaData.splice(c, 1, that.planetaData[c] + 1);
						}
					}
				}
			}

			chart();
		}

		function chart(){
			that.labelsStatus = that.chartStatusName;
			
			that.dataStatus = that.chartStatus;

			that.optionsStatus = {
				legend: {display: true},
				responsive: true,
				maintainAspectRatio: false

			};

			that.labelsPlanet = that.planetaName;
			
			that.dataPlanet = that.planetaData;

			that.optionsPlanet = {
				legend: {display: true},
				responsive: true,
				maintainAspectRatio: false

			};
		}

		init();

	};

	dashboardController.$inject = ['$scope', 'dashboardService', 'jediListService'];

	app.controller('dashboardController', dashboardController);
})(angular);