<template>
    <div>
        <div class="breadcrumbs">
            <div class="col-sm-4">
                <div class="page-header float-left">
                    <div class="page-title">
                        <h1>Maestro servicio (activos)</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Activos</a></li>
                            <li class="active">Maestro</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="content mt-3">
            <div class="animated fadeIn">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="clearfix">
                                    <i class="fa fa-flag bg-flat-color-5 p-3 font-2xl mr-3 float-left text-light"></i>
                                    <div class="h5 text-secondary mb-0 mt-1">{{ totalLibres }}</div>
                                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Libres</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="clearfix">
                                    <i class="fa fa-flag bg-flat-color-2 p-3 font-2xl mr-3 float-left text-light"></i>
                                    <div class="h5 text-secondary mb-0 mt-1">{{ totalGenerado }}</div>
                                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Generado</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="clearfix">
                                    <i class="fa fa-flag bg-flat-color-2 p-3 font-2xl mr-3 float-left text-light"></i>
                                    <div class="h5 text-secondary mb-0 mt-1">{{ totalLogistica }}</div>
                                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Logistica</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="clearfix">
                                    <i class="fa fa-flag bg-flat-color-2 p-3 font-2xl mr-3 float-left text-light"></i>
                                    <div class="h5 text-secondary mb-0 mt-1">{{ totalDistribucion }}</div>
                                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Distribución</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="clearfix">
                                    <i class="fa fa-flag bg-flat-color-3 p-3 font-2xl mr-3 float-left text-light"></i>
                                    <div class="h5 text-secondary mb-0 mt-1">{{ totalEntregado }}</div>
                                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Entregado</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Lista Servicios (Activos)</strong>
                            </div>

                            <div class="card-body">
                                <div id="people">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <template slot="estado" slot-scope="props">
                                            <span class="badge badge-success"
                                                  v-if="props.row.estado_servicio_id === 1">Libre</span>
                                            <span class="badge badge-info"
                                                  v-if="props.row.estado_servicio_id === 2">Generado</span>
                                            <span class="badge badge-info"
                                                  v-if="props.row.estado_servicio_id === 3">Logistica</span>
                                            <span class="badge badge-info"
                                                  v-if="props.row.estado_servicio_id === 4">Distribución</span>
                                            <span class="badge badge-warning"
                                                  v-if="props.row.estado_servicio_id === 5">Entregado</span>
                                        </template>

                                        <div slot="child_row" slot-scope="props">
                                            <div class="row">
                                                <div class="col">
                                                        <div class="card-body text-secondary"><strong>Forma pago: </strong><br>{{props.row.formaPago}}</div>
                                                </div>
                                                <div class="col">
                                                    <div class="card-body text-secondary"><strong>Tipo empaque: </strong><br>{{props.row.tipoEmpaque}}</div>
                                                </div>
                                                <div class="col">
                                                        <div class="card-body text-secondary"><strong>Dice contener: </strong><br>{{props.row.dice_contener}}</div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="card-body text-secondary"><strong>Fecha/Hora creación:  </strong><br>{{props.row.created_at}}</div>
                                                </div>
                                                <div class="col">
                                                    <div class="card-body text-secondary"><strong>Fecha/Hora admision: </strong><br>{{props.row.fecha_hora_admision}}</div>
                                                </div>
                                                <div class="col">
                                                    <div class="card-body text-secondary"><strong>Fecha/Hora estimada entrega: </strong><br>{{props.row.fecha_hora_estimada_entrega}}</div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="card-body text-secondary"><strong>Valor comercial: </strong><br>${{props.row.valor_comercial}}</div>
                                                </div>
                                                <div class="col">
                                                    <div class="card-body text-secondary"><strong>Valor flete: </strong><br>${{props.row.valor_flete}}</div>
                                                </div>
                                                <div class="col">
                                                    <div class="card-body text-secondary"><strong>Costo manejo: </strong><br>${{props.row.costo_manejo}}</div>
                                                </div>
                                                <div class="col">
                                                    <div class="card-body text-secondary"><strong>Valor descuento: </strong><br>${{props.row.valor_descuento}}</div>
                                                </div>
                                                <div class="col">
                                                    <div class="card-body text-secondary"><strong>Otros conceptos: </strong><br>${{props.row.otros_conceptos}}</div>
                                                </div>
                                            </div>
                                            <div class="row">

                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="card-body text-secondary"><strong>Observaciones: </strong><br>{{props.row.observaciones}}</div>
                                                </div>
                                            </div>
                                            </div>
                                    </v-client-table>
                                </div>
                            </div>

                        </div>
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
    .VueTables__child-row-toggler {
        width: 16px;
        height: 16px;
        line-height: 16px;
        display: block;
        margin: auto;
        text-align: center;
    }

    .VueTables__child-row-toggler--closed::before {
        content: "+";
    }

    .VueTables__child-row-toggler--open::before {
        content: "-";
    }
</style>
<script>

    export default {
        name: 'activos',
        data() {
            return {
                columns: ['tipoServicio', 'remitente', 'destinatario','colaborador','estado', 'total_servicio'],
                tableData: [],
                options: {
                    templates: {
                        total_servicio: function (h, row, index) {
                            return '$'+ Intl.NumberFormat().format(row.total_servicio)
                        }
                    },
                    columnsClasses: {edit: "td-accion", delete: "td-accion", estado: "td-accion"},
                    headings: {
                        tipoServicio: 'Tipo servicio',
                        colaborador: 'Empleado',
                        telefono: 'Teléfono',
                        edit: 'Editar',
                        delete: 'Eliminar',
                        estado_servicio_id: 'Estado'
                    },
                    texts: {
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
                    sortable: ['tipoServicio', 'remitente', 'destinatario','colaborador','estado' ],
                    filterable: ['tipoServicio', 'remitente', 'destinatario','colaborador','estado'],
                },
                totalLibres: 0,
                totalGenerado: 0,
                totalLogistica: 0,
                totalDistribucion: 0,
                totalEntregado: 0

            }
        },
        methods:{
            load: async function () {
                const token = this.$session.get("dataSession");
                const user = await this.$userLogin(token.access_token)
                const id = (user.user_empresa_id?user.user_empresa_id:0)
                const parameter = {
                    method: 'get',
                    url: this.$urlServer+'servicio/'+id,
                    headers: {
                        Authorization: "Bearer " + token.access_token
                    }
                }
                const response = await this.axios(parameter);
                this.tableData = response.data.data[0]
                this.totalLibres = response.data.data[1]
                this.totalGenerado = response.data.data[2]
                this.totalLogistica = response.data.data[3]
                this.totalDistribucion = response.data.data[4]
                this.totalEntregado = response.data.data[5]
            },
        },
        async beforeMount() {
            this.load()
        }
    }
</script>
