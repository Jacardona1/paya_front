<template>
    <div>
        <aside id="left-panel" class="left-panel" style="width: 18%;">
            <nav class="navbar navbar-expand-sm navbar-default">

                <div class="navbar-header">
<!--                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">-->
<!--                        <i class="fa fa-bars"></i>-->
<!--                    </button>-->
                    <br>
                    <img src="./../../public/images/logo.png" alt="Logo" style="width: 198px;">
                </div>

                <div id="main-menu" class="main-menu collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <h3 class="menu-title"><center>Panel principal</center> </h3><!-- /.menu-title -->
                        <li class="menu-item-has-children dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-truck"></i>Servicios</a>
                            <ul class="sub-menu children dropdown-menu">
                                <li><i class="fa fa-check-square"></i><router-link to="/servicios/activos">Activos</router-link></li>
<!--                                <li><i class="fa fa-list-ul"></i><a href="ui-badges.html">Historico</a></li>-->
                            </ul>
                        </li>
                        <li class="menu-item-has-children dropdown" style="display: none;">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-search"></i>Consultas</a>
                            <ul class="sub-menu children dropdown-menu">
                                <li><i class="fa fa-building-o"></i><a href="tables-basic.html">Empresas</a></li>
                                <li><i class="fa fa-users"></i><a href="tables-data.html">Empleados</a></li>
                                <li><i class="fa fa-users"></i><a href="tables-data.html">Clientes</a></li>

                            </ul>
                        </li>
                        <li class="menu-item-has-children dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-folder"></i>Administracion</a>
                            <ul class="sub-menu children dropdown-menu">
                                <li v-show="user.user_tipo_id === 4"><i class="fa fa-building-o"></i><router-link to="/administracion/empresas">Empresas</router-link></li>
                                <li><i class="fa fa-users"></i><router-link to="/administracion/empleados">Empleados</router-link></li>
                                <li v-show="user.user_tipo_id === 4"><i class="fa fa-users"></i><router-link to="/administracion/clientes">Clientes</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-cogs"></i>Configuraciones</a>
                            <ul class="sub-menu children dropdown-menu">
<!--                                <li><i class="menu-icon fa fa-th"></i><a href="forms-basic.html">Costos</a></li>-->
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </nav>
        </aside><!-- /#left-panel -->

        <!-- Left Panel -->

        <!-- Right Panel -->

        <div id="right-panel" class="right-panel" style="width: 82%;">

            <!-- Header-->
            <header id="header" class="header">

                <div class="header-menu">

                    <div class="col-sm-7">
                    </div>

                    <div class="col-sm-5">
                        <div class="user-area dropdown float-right">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img class="user-avatar rounded-circle" src="./../../public/images/avatar/avatar.png" alt="User Avatar">
                            </a>

                            <div class="user-menu dropdown-menu">
<!--                                <a class="nav-link" href="#"><i class="fa fa-user"></i> My Profile</a>-->

<!--                                <a class="nav-link" href="#"><i class="fa fa-user"></i> Notifications <span class="count">13</span></a>-->

<!--                                <a class="nav-link" href="#"><i class="fa fa-cog"></i> Settings</a>-->

                                <a class="nav-link" href="javascript: void(0);" v-on:click="logout"><i class="fa fa-power-off"></i> Salir</a>
                            </div>
                        </div>

                    </div>
                </div>

            </header><!-- /header -->
            <!-- Header-->
            <router-view/>
        </div><!-- /#right-panel -->

        <!-- Right Panel -->
    </div>
</template>

<script>

    export default {
        name: 'layouDashboard',
        data (){
          return{
              user:''
          }
        },
        methods:{
          async  logout(){
              const token = this.$session.get("dataSession");
              const parameter = {
                  method: 'get',
                  url: this.$urlServer+'logout',
                  headers: {
                      Authorization: "Bearer " + token.access_token
                  }
              }
              try {
                  const response = await this.axios(parameter);
                  if(response.status === 200 ){
                      this.$session.destroy();
                      this.$router.push('/login');
                  }else{
                      console.log(response.status)
                  }
              }catch (error) {
                  console.error(error);
              }
            }
        },
        beforeCreate: async function() {
            const token = this.$session.get("dataSession");
            this.user = await this.$userLogin(token.access_token)
            if (!this.$session.exists()) {
                this.$router.push('/login')
            }else{
                this.$router.push('/servicios/activos')

            }
        },
    }
</script>
