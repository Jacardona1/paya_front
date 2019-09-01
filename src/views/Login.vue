<template>
    <div class="login-form">
    <form>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="">
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control" placeholder="">
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox"> Manténme conectado
                </label>
                <label class="pull-right">
                    <a href="#">Olvidaste tu contraseña?</a>
                </label>

            </div>
            <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Ingresar</button>
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
    }
</script>
