(function (angular) {
	function jediListController ($scope, jediListService, jediAddService) {
		var that = this;
		$scope.search = '';

		$scope.chave = 'QfSwYoD1aGlFqGlAnUGqfTpzbc8Lr3Z4Hzubjw6Ex3kUE-wyHjSeCDwC-k8P93y5LOR4RpNRyE19MJtKK6U0L1aQZheXnWF0Co0EMBlXPek3h-ktg5n0BknAV361jUMnCz4xsrgPuyyhzTFPj9Gc5Iaihj6bXHz6EmOPbp_5fqETsSbTjW0BWlLmZbI2uwZrVM-sZUqYnJnFsM0oi-_NFunDRN_XFoBomIsr0CvfgZ18AGEFUJg2k0wTFK-MK_b4GELv-zSbo7-3tEww2Vd97Q';

		that.selectedRow = null;
		that.setSelected = function (selectedDateRow) {
			that.selectedRow = selectedDateRow;
		};

		function init(){
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
		}



		that.addJedi = function (id, type) {
			jediAddService.openAddJedi(id, type);
		}

		init();

		that.remove = function (id) {
			jediListService.remove(id).then(function (data) {

			})
		}

		that.deleteJedi = function(jedi){
			jediListService.deleteJedi(jedi);
		}

		that.openDeleteModal = function(jedi){
			jediListService.openDeleteModal(jedi);
		}
	};

	jediListController.$inject = ['$scope', 'jediListService', 'jediAddService'];

	app.controller('jediListController', jediListController);
})(angular);