<template>
    <div>
        <b-container v-if="name != '' && lastName != ''">
            <b-row>
                <b-col cols="2">
                    <div class="sidebar">
                        <svg class="userimg" xmlns="http://www.w3.org/2000/svg" height="1em"
                            viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                        </svg>
                        <h2>Bienveni@</h2>
                        <h4>{{ name }} {{ lastName }}</h4>
                    </div>
                </b-col>
                <b-col cols="8">
                    <div>
                        <h2 class="mt-5">Resumen de tu cuenta</h2>
                        <h3>
                            Le diste me gusta al juego <strong>{{ get_name }}</strong>
                        </h3>

                        <p>¿Deseas comprar coins para este juego?</p>

                        <b-button class="mt-3" @click="randomValue" :disabled="isButtonDisabled">Agregar Coins</b-button>
                        <hr>
                        <h3>Cantidad de coins comprados:</h3>
                        <b-progress class="mt-2" :max="max" show-value>
                            <b-progress-bar v-if="value <= 20" :label="`$${value}`" :value="value"
                                variant="success"></b-progress-bar>
                            <b-progress-bar v-else-if="value <= 30" :label="`$${value}`" :value="value"
                                variant="warning"></b-progress-bar>
                            <b-progress-bar v-else-if="value <= 50" :label="`$${value}`" :value="value"
                                variant="danger"></b-progress-bar>
                        </b-progress>
                        <div v-if="value === 50">
                            <p>Llegaste al maximo de credito</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mt-5">
                        <b-card header-tag="header" footer-tag="footer" bg-variant="warning">
                            <template #header>
                                <h6 class="mb-0">% de finalizacion de juego</h6>
                            </template>
                            <b-card-text>17% <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                                </svg></b-card-text>
                        </b-card>
                        <b-card header-tag="header" footer-tag="footer" bg-variant="success">
                            <template #header>
                                <h6 class="mb-0">Logros en el juego</h6>
                            </template>
                            <b-card-text>166 <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z" />
                                </svg></b-card-text>
                        </b-card>
                        <b-card header-tag="header" footer-tag="footer" bg-variant="primary">
                            <template #header>
                                <h6 class="mb-0">Recompensas</h6>
                            </template>
                            <b-card-text>200 <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
                                </svg></b-card-text>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <b-container v-else>
            <h1 class="mt-5">Para ver la informacion ingresa tus datos:</h1>
            <b-button @click="getData" variant="success">Datos</b-button>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "AdminComponent",
    data() {
        return {
            name: "",
            lastName: "",
            value: 0,
            max: 100,
            maxLimit: 50,
        };
    },

    computed: {
        get_name: function () {
            return this.$route.params.name;
        },
        isButtonDisabled() {
            return this.value >= this.maxLimit;
        },
    },

    methods: {
        getData() {
            this.name = prompt("Ingresa su nombre:");
            this.lastName = prompt("Ingrese su apellido:");
        },

        randomValue() {
            if (this.value + 2 <= this.maxLimit) {
                this.value += 2;
            }
        },
    },
};
</script>

<style scoped>
.sidebar {
    height: 100vh;
    width: 320px;
    display: flex;
    flex-direction: column;
    background-color: #333;
    color: white;
    top: 0;
    margin: 0;
    position: fixed;
    left: 0;
    z-index: -1;
    padding: 10px;
    align-items: center;
}

.sidebar h2 {
    margin-top: 20px;
}

.userimg {
    text-align: center;
    height: 50px;
    width: 50px;
    margin-top: 80px;
    fill: #0ab6ff
}
</style>
