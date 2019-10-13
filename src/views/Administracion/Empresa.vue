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
                            <strong class="card-title">Lista empresa</strong>
                        </div>
                        <div class="card-body">
                            <div id="people">
                                <v-client-table :data="tableData" :columns="columns" :options="options">
                                    <a slot="edit"  slot-scope="props" class="fa fa-edit fa-lg action" :href="props.row.id"></a>
                                    <a slot="delete"  slot-scope="props" class="fa fa-eraser fa-lg action" :href="props.row.id"></a>
                                </v-client-table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- .animated -->
    </div><!-- .content -->
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
                columns: ['name', 'age','edit','delete'],
                tableData: [
                    {id: 1, name: "John", age: "20"},
                    {id: 2, name: "Jane", age: "24"},
                    {id: 3, name: "Susan", age: "16"},
                    {id: 4, name: "Chris", age: "55"},
                    {id: 5, name: "Dan", age: "40"},
                    {id: 1, name: "John", age: "20"},
                    {id: 2, name: "Jane", age: "24"},
                    {id: 3, name: "Susan", age: "16"},
                    {id: 4, name: "Chris", age: "55"},
                    {id: 5, name: "Dan", age: "40"},
                    {id: 1, name: "John", age: "20"},
                    {id: 2, name: "Jane", age: "24"},
                    {id: 3, name: "Susan", age: "16"},
                    {id: 4, name: "Chris", age: "55"},
                    {id: 5, name: "Dan", age: "40"},
                    {id: 1, name: "John", age: "20"},
                    {id: 2, name: "Jane", age: "24"},
                    {id: 3, name: "Susan", age: "16"},
                    {id: 4, name: "Chris", age: "55"},
                    {id: 5, name: "Dan", age: "40"}
                ],
                options: {
                    columnsClasses: {edit: "td-accion",delete:"td-accion"},

                    headings: {
                        name: 'Country Name',
                        age: 'Country Code',
                        id: 'Editar',
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
                    sortable: ['name', 'age'],
                    filterable: ['name', 'age'],
                }
            }
        }
    }
</script>