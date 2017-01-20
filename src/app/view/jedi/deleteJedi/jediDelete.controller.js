(function (angular) {
	function jediDeleteController ($scope, jediListService, $uibModalInstance, modalParam) {
		var that = this;

		that.jedi = modalParam.jedi;

		that.deleteJedi = function(){
			jediListService.deleteJedi(that.jedi.id);
			$uibModalInstance.dismiss();
		}		

		that.close = function () {
        $uibModalInstance.dismiss();
    }
	};

	jediDeleteController.$inject = ['$scope', 'jediListService', '$uibModalInstance', 'modalParam'];

	app.controller('jediDeleteController', jediDeleteController);
})(angular);