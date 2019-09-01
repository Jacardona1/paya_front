<template>
    <div class="login-form">
    <form>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="" v-model="email">
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control" placeholder="" v-model="password">
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox"> Manténme conectado
                </label>
                <label class="pull-right">
                    <a href="#">Olvidaste tu contraseña?</a>
                </label>

            </div>
            <button type="button" class="btn btn-success btn-flat m-b-30 m-t-30" v-on:click="login">Ingresar</button>
                <hr>
            <div class="register-link m-t-15 text-center">
                <p>No tiene cuenta ? <a href="#"> Registrate aqui</a></p>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                email: "",
                password: "",
            }
        },
        methods:{
            async login(){
                const parameter = {
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/auth/login',
                    data: {
                        email: this.email,
                        password: this.password
                    }
                }
                try {
                    const response = await this.axios(parameter)
                    if(response.status === 200 && response.data.token_type === 'Bearer'){
                        this.$session.start()
                        this.$session.set('dataSession', response.data)
                        this.$router.push('/inicio')
                    }else{
                        console.log(response.status)
                    }
                }catch (error) {
                    console.error(error);
                }
    }
        }
    }
</script>
