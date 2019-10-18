<template>
    <div>
        <div class="breadcrumbs">
            <div class="col-sm-4">
                <div class="page-header float-left">
                    <div class="page-title">
                        <h1>Maestro empleado</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li><a href="#">Administracion</a></li>
                            <li><a href="#">Empleado</a></li>
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
                                <strong class="card-title">Lista empleados</strong>
                                <button type="button" data-toggle="modal" data-target="#newModal" class="btn btn-success" style="float: right;">Nuevo <i class="fa fa-plus"></i></button>
                            </div>
                            <div class="card-body">
                                <div id="people">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                            <!--<span class="badge badge-success" v-if="props.row.estado === 1">Activo</span>-->
                                            <!--<span class="badge badge-danger" v-if="props.row.estado === 0">Inactivo</span>-->
                                        <template slot="estado" slot-scope="props">
                                            <span class="badge badge-success" v-if="props.row.estado === 1">Activo</span>
                                            <span class="badge badge-danger" v-if="props.row.estado === 0">Inactivo</span>
                                        </template>

                                        <span slot="estado"  class="badge badge-success">Success</span>
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


        <!--<button data-toggle="modal" data-target="#newModal" >olaaaa</button>-->

        <div class="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="largeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="largeModalLabel">Nuevo Empleado</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group col-md-6">
                                <label class=" form-control-label">Tipo documento:</label>
                                <select v-model="newData.tipoDocumento" id="tipoDocumento" name="tipoDocumento"  class="form-control">
                                    <option>Cédula ciudadanía</option>
                                    <option>Targeta identidad</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label class=" form-control-label">Numero documento:</label>
                                <input v-model="newData.numeroDocumento" type="number" id="numeroDocumento" name="numeroDocumento"  class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label class=" form-control-label">Nombres:</label>
                                <input v-model="newData.nombres" type="text" id="nombres" name="nombres"  class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label class=" form-control-label">Apellidos:</label>
                                <input v-model="newData.apellidos" type="text" id="apellidos" name="apellidos"  class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label class=" form-control-label">Teléfono:</label>
                                <input v-model="newData.telefono" type="number" id="telefono" name="telefono"  class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label class=" form-control-label">Dirección:</label>
                                <input v-model="newData.direccion" type="text" id="direccion" name="direccion"  class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label class=" form-control-label">Email:</label>
                                <input v-model="newData.email" type="email" id="email" name="email"  class="form-control">
                            </div>
                            <div class="form-group col-md-12">
                                <hr>
                            </div>
                            <div class="form-group col-md-6">
                                <label class=" form-control-label">Contraseña:</label>
                                <input v-model="newData.contrasena"  type="text" id="contrasena" name="contrasena"  class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label class=" form-control-label">Confirmar contraseña:</label>
                                <input v-model="newData.confirmar" type="email" id="confirmar" name="confirmar"  class="form-control">
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
                columns: ['nombres', 'apellidos','numero_documento','telefono','estado','edit','delete'],
                tableData: [],
                options: {
                    columnsClasses: {edit: "td-accion",delete:"td-accion",estado:"td-accion"},
                    headings: {
                        numero_documento: 'Identificación',
                        telefono : 'Teléfono',
                        edit: 'Editar',
                        delete: 'Eliminar',
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
                    sortable: ['nombres', 'apellidos'],
                    filterable: ['nombres','apellidos','numero_documento'],
                },
                newData : {
                    tipoDocumento : '',
                    numeroDocumento : '',
                    nombres: '',
                    apellidos: '',
                    direccion : '',
                    telefono : '',
                    email : '',
                    contrasena : '',
                    confirmar : ''
                }
            }
        },
        methods:{
            delet: async function(id){
                const token = this.$session.get("dataSession");
                const parameter = {
                    method: 'delete',
                    url: 'http://127.0.0.1:8000/api/auth/usuario'+'/'+id,
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
            load:async function(){
                const token = this.$session.get("dataSession");
                const parameter = {
                    method: 'get',
                    url: 'http://127.0.0.1:8000/api/auth/usuario/3',
                    headers: {
                        Authorization: "Bearer " + token.access_token
                    }
                }
                const response = await this.axios(parameter);
                this.tableData = response.data.data
                console.log(response);
            },
        },
        async beforeMount() {
            this.load()
        }
    }
</script>