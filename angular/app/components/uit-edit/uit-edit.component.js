class UitEditController{
    constructor ($stateParams, $state, API) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let uitId = $stateParams.uitId
    let Uit = API.service('uit-show', API.all('uits'))
    Uit.one(uitId).get()
      .then((response) => {
        this.uit = API.copy(response)
      })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.uit.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Uit actualizada.' }
          $state.go($state.current, { alerts: alert})
        }, (response) => {
          let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
          $state.go($state.current, { alerts: alert})
        })
    } else {
      this.formSubmitted = true
    }
  }


    $onInit(){}
}

export const UitEditComponent = {
    templateUrl: './views/app/components/uit-edit/uit-edit.component.html',
    controller: UitEditController,
    controllerAs: 'vm',
    bindings: {}
}
