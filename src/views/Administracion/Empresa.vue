<template>
    <div>
        <div class="breadcrumbs">
            <div class="col-sm-4">
                <div class="page-header float-left">
                    <div class="page-title">
                        <h1>Maestro empresa</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li><a href="#">Administracion</a></li>
                            <li><a href="#">Empresa</a></li>
                            <li class="active">Maestro</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    <div class="content mt-3">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Lista empresas</strong>
                            <button type="button" data-toggle="modal" data-target="#newModal" class="btn btn-success" style="float: right;">Nuevo <i class="fa fa-plus"></i></button>
                        </div>
                        <div class="card-body">
                            <div id="people">
                                <v-client-table :data="tableData" :columns="columns" :options="options">
                                    <a slot="edit"  slot-scope="props" class="fa fa-edit fa-lg action" href="javascript: void(0);" @click="edit(props.row.id)"></a>
                                    <a slot="delete"  slot-scope="props" class="fa fa-eraser fa-lg action" href="javascript: void(0);" @click="delet(props.row.id)"></a>
                                </v-client-table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- .animated -->
    </div><!-- .content -->

<button data-toggle="modal" data-target="#editModal" ref="openModalEdit" style="display: none"></button>

        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="largeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="largeModalLabel">Editar Empresa</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="form-group col-md-4">
                            <label class=" form-control-label">Nit:</label>
                            <input v-model="editData.nit" type="number" id="nit" name="nit"  class="form-control">
                        </div>
                        <div class="form-group col-md-2">
                            <label class=" form-control-label">Digito:</label>
                            <input v-model="editData.digito" type="number" id="digito" name="digito"  class="form-control">
                        </div>
                        <div class="form-group col-md-6">
                            <label  class=" form-control-label">Nombre completo:</label>
                            <input v-model="editData.nombreCompleto" type="text" id="nombre_completo" name="nombre_completo" class="form-control">
                        </div>
                        <div class="form-group col-md-6">
                            <label  class=" form-control-label">Nombre corto:</label>
                            <input v-model="editData.nombreCorto" type="text" id="nombre_corto" name="nombre_corto" class="form-control">
                        </div>
                        <div class="form-group col-md-6">
                            <label  class=" form-control-label">Dirección:</label>
                            <input v-model="editData.direccion" type="text" id="direccion" name="direccion" class="form-control">
                        </div>
                        <div class="form-group col-md-6">
                            <label  class=" form-control-label">Teléfono:</label>
                            <input v-model="editData.telefono" type="text" id="telefono" name="telefono" class="form-control">
                        </div>
                        <div class="form-group col-md-6">
                            <label  class=" form-control-label">Celular:</label>
                            <input v-model="editData.celular" type="text" id="celular" name="celular" class="form-control">
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="closeModalEdit">Cerrar</button>
                        <button type="button" @click="update()" class="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>




        <div class="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="largeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="largeModalLabel">Nueva Empresa</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group col-md-4">
                                <label class=" form-control-label">Nit:</label>
                                <input v-model="newData.nit" type="number" id="nit" name="nit"  class="form-control">
                            </div>
                            <div class="form-group col-md-2">
                                <label class=" form-control-label">Digito:</label>
                                <input v-model="newData.digito" type="number" id="digito" name="digito"  class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label  class=" form-control-label">Nombre completo:</label>
                                <input v-model="newData.nombreCompleto" type="text" id="nombre_completo" name="nombre_completo" class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label  class=" form-control-label">Nombre corto:</label>
                                <input v-model="newData.nombreCorto" type="text" id="nombre_corto" name="nombre_corto" class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label  class=" form-control-label">Dirección:</label>
                                <input v-model="newData.direccion" type="text" id="direccion" name="direccion" class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label  class=" form-control-label">Teléfono:</label>
                                <input v-model="newData.telefono" type="text" id="telefono" name="telefono" class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label  class=" form-control-label">Celular:</label>
                                <input v-model="newData.celular" type="text" id="celular" name="celular" class="form-control">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="closeModalNew">Cerrar</button>
                        <button type="button" @click="create()" class="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
    .td-accion {
        text-align: center;

    }
</style>
<script>
    export default {
        name: 'empresa',
        data() {
            return {
                columns: ['nit', 'nombre_corto','direccion','telefono','edit','delete'],
                tableData: [],
                options: {
                    columnsClasses: {edit: "td-accion",delete:"td-accion"},

                    headings: {
                        nit: 'Nit',
                        nombre_corto: 'Nombre',
                        direccion: 'Dirección',
                        telefono : 'Teléfono',
                        edit: 'Editar',
                        delete: 'Eliminar'
                    },
                    texts : {
                        count: "Mostrando {from} a {to} de {count} registros|{count} registros|Un registro",
                        first: 'primero',
                        last: 'ultimo',
                        filter: "Filtro:",
                        filterPlaceholder: "Busqueda",
                        limit: "Registro:",
                        page: "Paginas:",
                        noResults: "No se encontraron registros",
                        filterBy: "Filtrar por {column}",
                        loading: 'Cargando...',
                        defaultOption: 'Seleccionada {column}',
                        columns: 'Columnas'
                    },
                    sortable: ['nit', 'nombre_corto'],
                    filterable: ['nit', 'nombre_corto'],
                },
                editData : {
                    id : '',
                    nombreCompleto : '',
                    nombreCorto : '',
                    nit: '',
                    digito: '',
                    direccion : '',
                    telefono : '',
                    celular : ''
                },
                newData : {
                    id : '',
                    nombreCompleto : '',
                    nombreCorto : '',
                    nit: '',
                    digito: '',
                    direccion : '',
                    telefono : '',
                    celular : ''
                }
            }
        },
        methods:{
            load:async function(){
                const token = this.$session.get("dataSession");
                const parameter = {
                    method: 'get',
                    url: 'http://127.0.0.1:8000/api/auth/empresa',
                    headers: {
                        Authorization: "Bearer " + token.access_token
                    }
                }
                const response = await this.axios(parameter);
                this.tableData = response.data.data
            },
            delet: async function(id){
                const token = this.$session.get("dataSession");
                const parameter = {
                    method: 'delete',
                    url: 'http://127.0.0.1:8000/api/auth/empresa'+'/'+id,
                    headers: {
                        Authorization: "Bearer " + token.access_token
                    },
                }
                try {
                    const response = await this.axios(parameter);
                    if(response.status === 200 ){
                        this.load()
                    }else{
                        console.log(response.status)
                    }
                }catch (error) {
                    console.error(error);
                }
            },
            edit: async function(id){
                const token = this.$session.get("dataSession");
                const parameter = {
                    method: 'get',
                    url: 'http://127.0.0.1:8000/api/auth/empresa'+'/'+id+'/edit',
                    headers: {
                        Authorization: "Bearer " + token.access_token
                    },
                }
                const response = await this.axios(parameter);
                try {
                    const response = await this.axios(parameter);
                    console.log(response);
                    if(response.status === 200 ){
                        this.editData.id = id
                        this.editData.nit = response.data.data.nit
                        this.editData.digito = response.data.data.digito_verificacion
                        this.editData.nombreCompleto = response.data.data.nombre_completo
                        this.editData.nombreCorto = response.data.data.nombre_corto
                        this.editData.direccion = response.data.data.direccion
                        this.editData.telefono = response.data.data.telefono
                        this.editData.celular = response.data.data.celular
                        this.$refs.openModalEdit.click()
                    }else{
                        console.log(response.status)
                    }
                }catch (error) {
                    console.error(error);
                }
            },
            update: async function(){
                const token = this.$session.get("dataSession");
                const id = this.editData.id;
                const parameter = {
                    method: 'put',
                    url: 'http://127.0.0.1:8000/api/auth/empresa'+'/'+id,
                    data : this.editData,
                    headers: {
                        Authorization: "Bearer " + token.access_token
                    },
                }
                const response = await this.axios(parameter);
                try {
                    const response = await this.axios(parameter);
                    console.log(response);
                    if(response.status === 200 ){
                        this.load()
                        this.$refs.closeModalEdit.click()
                    }else{
                        console.log(response.status)
                    }
                }catch (error) {
                    console.error(error);
                }
            },
            create: async function(){
                const token = this.$session.get("dataSession");
                const parameter = {
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/auth/empresa',
                    data : this.newData,
                    headers: {
                        Authorization: "Bearer " + token.access_token
                    },
                }
                try {
                    const response = await this.axios(parameter);
                    console.log(response);
                    if(response.status === 200 ){
                        this.load();
                        this.$refs.closeModalNew.click();
                        this.reset();
                    }else{
                        console.log(response.status)
                    }
                }catch (error) {
                    console.error(error);
                }

            },
            reset: function () {
                this.newData.nit = "";
                this.newData.digito = "";
                this.newData.nombreCompleto = "";
                this.newData.nombreCorto = "";
                this.newData.direccion = "";
                this.newData.telefono = "";
                this.newData.celular = "";
            }
        },
        async beforeMount() {
            this.load()
        }
    }
</script>