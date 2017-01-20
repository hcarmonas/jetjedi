function jediAddService($document, $uibModal, $q, Backand, $http) {

	var objectName = '';
	var baseUrl = Backand.getApiUrl() + '/1/objects/';
	var chave = 'QfSwYoD1aGlFqGlAnUGqfTpzbc8Lr3Z4Hzubjw6Ex3kUE-wyHjSeCDwC-k8P93y5LOR4RpNRyE19MJtKK6U0L1aQZheXnWF0Co0EMBlXPek3h-ktg5n0BknAV361jUMnCz4xsrgPuyyhzTFPj9Gc5Iaihj6bXHz6EmOPbp_5fqETsSbTjW0BWlLmZbI2uwZrVM-sZUqYnJnFsM0oi-_NFunDRN_XFoBomIsr0CvfgZ18AGEFUJg2k0wTFK-MK_b4GELv-zSbo7-3tEww2Vd97Q'

	return {
		openAddJedi: openAddJedi,
		load: load,
		save: save
	}

	function save(jedi){
		var deferred = $q.defer();
		var url = 'salvar';

		$http.defaults.headers.common.Authorization = 'Bearer '+ chave;

		objectName = 'jedi';

		if(jedi.id){
			$http({
				method: 'PUT',
				url: baseUrl + objectName + '/' + jedi.id,
				data: jedi
			}).then(callCompleted, callFailed)

			function callCompleted(response) {
				deferred.resolve(response.data);
			}

			function callFailed(error) {
				console.log('XHR Failed for load tree.' + error.data);
				deferred.reject(error);
			}		
		} else {
			$http({
				method: 'POST',
				url: baseUrl + objectName,
				data: jedi
			}).then(callCompleted, callFailed)

			function callCompleted(response) {
				deferred.resolve(response.data);
			}

			function callFailed(error) {
				console.log('XHR Failed for load tree.' + error.data);
				deferred.reject(error);
			}	
		}

		return deferred.promise;
	}

	function openAddJedi(id, type){
		var modalInstance = $uibModal.open({
			templateUrl: 'src/app/view/jedi/cadJedi/jediAdd.tpl.html',
			controller: 'JediAddController',
			controllerAs: 'jediAddCtrl',
			windowClass: 'easy-jedi-modal',
			size: 'md',
			resolve: {
				modalParam: function () {
					return {
						id: id,
						type: type
					}
				}
			}

		});
		modalInstance.result.then(function () {
			console.log('Salvar');
		}, function () {
			console.log('Cancel');
		});
	};

	function load(id){
		var deferred = $q.defer();

		$http.defaults.headers.common.Authorization = 'Bearer '+ chave;

		objectName = 'jedi';

		$http({
			method: 'GET',
			url: baseUrl + objectName + '/' + id
		}).then(callCompleted, callFailed)

		function callCompleted(response) {
			deferred.resolve(response.data);
		}

		function callFailed(error) {
			console.log('XHR Failed for load tree.' + error.data);
			deferred.reject(error);
		}



		return deferred.promise;
	}

}

app.factory('jediAddService', jediAddService);

jediAddService.$inject = ['$document', '$uibModal', '$q', 'Backand', '$http'];


