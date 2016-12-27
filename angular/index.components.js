import {ProcedimientoRequisitoComponent} from './app/components/procedimiento-requisito/procedimiento-requisito.component';
import {UitEditComponent} from './app/components/uit-edit/uit-edit.component';
import {UitAddComponent} from './app/components/uit-add/uit-add.component';
import {UitListComponent} from './app/components/uit-list/uit-list.component';
import {UsersAddComponent} from './app/components/users-add/users-add.component';
import {ExpdtrecibidosAddComponent} from './app/components/expdtrecibidos-add/expdtrecibidos-add.component';
import {ExpdtrecibidosListComponent} from './app/components/expdtrecibidos-list/expdtrecibidos-list.component';
import {TipodocEditComponent} from './app/components/tipodoc-edit/tipodoc-edit.component';
import {TipodocAddComponent} from './app/components/tipodoc-add/tipodoc-add.component';
import {TipodocListComponent} from './app/components/tipodoc-list/tipodoc-list.component';
import {TipodocumentoEditComponent} from './app/components/tipodocumento-edit/tipodocumento-edit.component';
import {TipodocumentoAddComponent} from './app/components/tipodocumento-add/tipodocumento-add.component';
import {TipodocumentoListComponent} from './app/components/tipodocumento-list/tipodocumento-list.component';
import {RutaEditComponent} from './app/components/ruta-edit/ruta-edit.component';
import {RutasAddComponent} from './app/components/rutas-add/rutas-add.component';
import {RutasListComponent} from './app/components/rutas-list/rutas-list.component';
import {ProcedReqEditComponent} from './app/components/proced-req-edit/proced-req-edit.component';
import {ProcedReqAddComponent} from './app/components/proced-req-add/proced-req-add.component';
import {ProcedReqListComponent} from './app/components/proced-req-list/proced-req-list.component';
import {RequisitoEditComponent} from './app/components/requisito-edit/requisito-edit.component';
import {RequisitoAddComponent} from './app/components/requisito-add/requisito-add.component';
import {RequisitosListComponent} from './app/components/requisitos-list/requisitos-list.component';
import {ProcedimientoEditComponent} from './app/components/procedimiento-edit/procedimiento-edit.component';
import {ProcedimientoAddComponent} from './app/components/procedimiento-add/procedimiento-add.component';
import {ProcedimientoListComponent} from './app/components/procedimiento-list/procedimiento-list.component';
import {ConsultasComponent} from './app/components/consultas/consultas.component';
import {DerivadosListComponent} from './app/components/derivados-list/derivados-list.component';
import {RecibidosListComponent} from './app/components/recibidos-list/recibidos-list.component';
import {EntidadesListComponent} from './app/components/entidades-list/entidades-list.component';
import {CargosEditComponent} from './app/components/cargos-edit/cargos-edit.component';
import {CargosAddComponent} from './app/components/cargos-add/cargos-add.component';
import {CargosListComponent} from './app/components/cargos-list/cargos-list.component';
import {OficinasEditComponent} from './app/components/oficinas-edit/oficinas-edit.component';
import {OficinasAddComponent} from './app/components/oficinas-add/oficinas-add.component';
import {OficinasListComponent} from './app/components/oficinas-list/oficinas-list.component';
import {EntidadesEditComponent} from './app/components/entidades-edit/entidades-edit.component';
import {EntidadesAddComponent} from './app/components/entidades-add/entidades-add.component';
import {RemitenteEditComponent} from './app/components/remitente-edit/remitente-edit.component';
import {RemitenteAddComponent} from './app/components/remitente-add/remitente-add.component';
import {RemitenteListComponent} from './app/components/remitente-list/remitente-list.component';
import {EstadoEditComponent} from './app/components/estado-edit/estado-edit.component';
import {EstadoAddComponent} from './app/components/estado-add/estado-add.component';
import {EstadoListComponent} from './app/components/estado-list/estado-list.component';
import { TablesSimpleComponent } from './app/components/tables-simple/tables-simple.component'
import { UiModalComponent } from './app/components/ui-modal/ui-modal.component'
import { UiTimelineComponent } from './app/components/ui-timeline/ui-timeline.component'
import { UiButtonsComponent } from './app/components/ui-buttons/ui-buttons.component'
import { UiIconsComponent } from './app/components/ui-icons/ui-icons.component'
import { UiGeneralComponent } from './app/components/ui-general/ui-general.component'
import { FormsGeneralComponent } from './app/components/forms-general/forms-general.component'
import { ChartsChartjsComponent } from './app/components/charts-chartjs/charts-chartjs.component'
import { WidgetsComponent } from './app/components/widgets/widgets.component'
import { UserProfileComponent } from './app/components/user-profile/user-profile.component'
import { UserVerificationComponent } from './app/components/user-verification/user-verification.component'
import { ComingSoonComponent } from './app/components/coming-soon/coming-soon.component'
import { UserEditComponent } from './app/components/user-edit/user-edit.component'
import { UserPermissionsEditComponent } from './app/components/user-permissions-edit/user-permissions-edit.component'
import { UserPermissionsAddComponent } from './app/components/user-permissions-add/user-permissions-add.component'
import { UserPermissionsComponent } from './app/components/user-permissions/user-permissions.component'
import { UserRolesEditComponent } from './app/components/user-roles-edit/user-roles-edit.component'
import { UserRolesAddComponent } from './app/components/user-roles-add/user-roles-add.component'
import { UserRolesComponent } from './app/components/user-roles/user-roles.component'
import { UserListsComponent } from './app/components/user-lists/user-lists.component'
import { DashboardComponent } from './app/components/dashboard/dashboard.component'
import { NavSidebarComponent } from './app/components/nav-sidebar/nav-sidebar.component'
import { NavHeaderComponent } from './app/components/nav-header/nav-header.component'
import { LoginLoaderComponent } from './app/components/login-loader/login-loader.component'
import { ResetPasswordComponent } from './app/components/reset-password/reset-password.component'
import { ForgotPasswordComponent } from './app/components/forgot-password/forgot-password.component'
import { LoginFormComponent } from './app/components/login-form/login-form.component'
import { RegisterFormComponent } from './app/components/register-form/register-form.component'

angular.module('app.components')
	.component('procedimientoRequisito', ProcedimientoRequisitoComponent)
	.component('uitEdit', UitEditComponent)
	.component('uitAdd', UitAddComponent)
	.component('uitList', UitListComponent)
	.component('usersAdd', UsersAddComponent)
	.component('expdtrecibidosAdd', ExpdtrecibidosAddComponent)
	.component('expdtrecibidosList', ExpdtrecibidosListComponent)
	.component('tipodocEdit', TipodocEditComponent)
	.component('tipodocAdd', TipodocAddComponent)
	.component('tipodocList', TipodocListComponent)
	.component('tipodocumentoEdit', TipodocumentoEditComponent)
	.component('tipodocumentoAdd', TipodocumentoAddComponent)
	.component('tipodocumentoList', TipodocumentoListComponent)
	.component('rutaEdit', RutaEditComponent)
	.component('rutasAdd', RutasAddComponent)
	.component('rutasList', RutasListComponent)
	.component('procedReqEdit', ProcedReqEditComponent)
	.component('procedReqAdd', ProcedReqAddComponent)
	.component('procedReqList', ProcedReqListComponent)
	.component('requisitoEdit', RequisitoEditComponent)
	.component('requisitoAdd', RequisitoAddComponent)
	.component('requisitosList', RequisitosListComponent)
	.component('procedimientoEdit', ProcedimientoEditComponent)
	.component('procedimientoAdd', ProcedimientoAddComponent)
	.component('procedimientoList', ProcedimientoListComponent)
	.component('consultas', ConsultasComponent)
	.component('derivadosList', DerivadosListComponent)
	.component('recibidosList', RecibidosListComponent)
	.component('entidadesList', EntidadesListComponent)
	.component('cargosEdit', CargosEditComponent)
	.component('cargosAdd', CargosAddComponent)
	.component('cargosList', CargosListComponent)
	.component('oficinasEdit', OficinasEditComponent)
	.component('oficinasAdd', OficinasAddComponent)
	.component('oficinasList', OficinasListComponent)
	.component('entidadesEdit', EntidadesEditComponent)
	.component('entidadesAdd', EntidadesAddComponent)
	.component('remitenteEdit', RemitenteEditComponent)
	.component('remitenteAdd', RemitenteAddComponent)
	.component('remitenteList', RemitenteListComponent)
	.component('estadoEdit', EstadoEditComponent)
	.component('estadoAdd', EstadoAddComponent)
	.component('estadoList', EstadoListComponent)
  .component('tablesSimple', TablesSimpleComponent)
  .component('uiModal', UiModalComponent)
  .component('uiTimeline', UiTimelineComponent)
  .component('uiButtons', UiButtonsComponent)
  .component('uiIcons', UiIconsComponent)
  .component('uiGeneral', UiGeneralComponent)
  .component('formsGeneral', FormsGeneralComponent)
  .component('chartsChartjs', ChartsChartjsComponent)
  .component('widgets', WidgetsComponent)
  .component('userProfile', UserProfileComponent)
  .component('userVerification', UserVerificationComponent)
  .component('comingSoon', ComingSoonComponent)
  .component('userEdit', UserEditComponent)
  .component('userPermissionsEdit', UserPermissionsEditComponent)
  .component('userPermissionsAdd', UserPermissionsAddComponent)
  .component('userPermissions', UserPermissionsComponent)
  .component('userRolesEdit', UserRolesEditComponent)
  .component('userRolesAdd', UserRolesAddComponent)
  .component('userRoles', UserRolesComponent)
  .component('userLists', UserListsComponent)
  .component('dashboard', DashboardComponent)
  .component('navSidebar', NavSidebarComponent)
  .component('navHeader', NavHeaderComponent)
  .component('loginLoader', LoginLoaderComponent)
  .component('resetPassword', ResetPasswordComponent)
  .component('forgotPassword', ForgotPasswordComponent)
  .component('loginForm', LoginFormComponent)
  .component('registerForm', RegisterFormComponent)
