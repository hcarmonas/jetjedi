(function (angular) {
  function JediAddController ($scope, $uibModalInstance, modalParam, jediAddService, jediListService) {
    var that = this;

    that.id = modalParam.id;
    that.typeLoad = modalParam.type;

    function init(){
      jediAddService.load(that.id).then(function(data){
        that.jediObj = data;

        if(that.typeLoad && that.typeLoad == "copia"){
          delete that.jediObj.id;
        }
        that.jediObj.status = parseInt(that.jediObj.status);
      });

      jediListService.loadStatus().then(function(data){
        that.status = data;
      });


    }

    that.save = function () {
    	jediAddService.save(that.jediObj).then(function(){
        $uibModalInstance.dismiss();
    	});      
    }    

    that.close = function () {
        $uibModalInstance.dismiss();
    }

    init();

  };

  JediAddController.$inject = ['$scope', '$uibModalInstance', 'modalParam', 'jediAddService', 'jediListService'];

  app.controller('JediAddController', JediAddController);
})(angular);