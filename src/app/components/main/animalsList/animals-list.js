(function(angular) {

  angular.module('app').component('animalsList', {
    templateUrl:  'app/components/main/animalsList/animals-list-template.html',
    controller: ['$state', 'animalsFactory', animalsList],
    controllerAs: 'animalsList'
  });

  /* Inyectamos aquí y arriba $state */
  function animalsList($state, animalsFactory) {
    var vm = this;

    vm.$onInit = function() {
      vm.allAnimals = animalsFactory.getAllAnimals();
      vm.currentPosition = 'up';
      vm.animalBuscado = 'Bacalao';
    };

    /* Al clicar sobre un elemento de la lista,
    nos vamos al detalle con el método go de $state */
    vm.goToDetail = function(_idAnimal_) {
      $state.go('detail', {idAnimal: _idAnimal_});
    };

    vm.sortList = function(_position_) {
      if ( _position_ !== vm.currentPosition ) {
        vm.allAnimals.reverse();
        vm.currentPosition = _position_;
      }
    };

    vm.consolearAnimalBuscado = function() {
      console.log('Soy el animal buscado',  vm.animalBuscado);
    };
  }

})(angular);
