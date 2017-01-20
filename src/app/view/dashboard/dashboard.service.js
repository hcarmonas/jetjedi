function dashboardService($http, Backand, $q, $uibModal) {

	return {
		loadJedi: loadJedi,
		loadStatus: loadStatus
	}

	var objectName = '';
		var baseUrl = Backand.getApiUrl() + '/1/objects/';

		var chave = 'QfSwYoD1aGlFqGlAnUGqfTpzbc8Lr3Z4Hzubjw6Ex3kUE-wyHjSeCDwC-k8P93y5LOR4RpNRyE19MJtKK6U0L1aQZheXnWF0Co0EMBlXPek3h-ktg5n0BknAV361jUMnCz4xsrgPuyyhzTFPj9Gc5Iaihj6bXHz6EmOPbp_5fqETsSbTjW0BWlLmZbI2uwZrVM-sZUqYnJnFsM0oi-_NFunDRN_XFoBomIsr0CvfgZ18AGEFUJg2k0wTFK-MK_b4GELv-zSbo7-3tEww2Vd97Q'

	function loadJedi(){
			var deferred = $q.defer();

			$http.defaults.headers.common.Authorization = 'Bearer '+ chave;

			objectName = 'jedi';

			$http({
                method: 'GET',
                url: baseUrl + objectName
            }).then(callCompleted, callFailed)

			function callCompleted(response) {
				deferred.resolve(response.data.data);
			}

			function callFailed(error) {
				console.log('XHR Failed for load tree.' + error.data);
				deferred.reject(error);
			}

			return deferred.promise;
		}	

		function loadStatus(){
			var deferred = $q.defer();

			$http.defaults.headers.common.Authorization = 'Bearer '+ chave;

			objectName = 'status';

			$http({
                method: 'GET',
                url: baseUrl + objectName
            }).then(callCompleted, callFailed)

			function callCompleted(response) {
				deferred.resolve(response.data.data);
			}

			function callFailed(error) {
				console.log('XHR Failed for load tree.' + error.data);
				deferred.reject(error);
			}

			return deferred.promise;
		}	

}

app.factory('dashboardService', dashboardService);

dashboardService.$inject = ['$http', 'Backand', '$q', '$uibModal'];


