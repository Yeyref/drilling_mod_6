<template>
  <div>
    <b-container>
      <h1 class="mt-5">Escribe tu opinion para el juego: {{ get_name }}</h1>
      <b-form @submit="onSubmit">
        <b-form-group
          class="mb-3"
          id="input-group-1"
          label="Opinion:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.opinion"
            type="text"
            placeholder="Tu opinion debe ir aqui..."
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Nombre"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-button
          v-if="editar"
          @click="editar = !editar"
          class="mt-3"
          type="submit"
          variant="primary"
          >Actualizar</b-button
        >
        <b-button v-else class="mt-3" type="submit" variant="primary"
          >Agregar</b-button
        >
      </b-form>

      <div v-if="this.form.arrayPersonas == 0">
        <h2 class="mt-5">A continuacion podras ver tu opinion</h2>
        <b-alert class="mt-3" show variant="danger"
          >No existen opiniones para mostrar</b-alert
        >
      </div>

      <div v-else>
        <h2 class="mt-5">A continuacion podras ver tu opinion</h2>
        <div
          v-for="(persona, index) in form.arrayPersonas"
          :key="index"
          v-show="showOpinion"
        >
          <div>
            <b-card no-body class="mb-4">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-alert show>Opinion creada por: {{ persona.name }}</b-alert>
              </b-card-header>
              <b-card-body>
                <b-card-text class="mb-2">Opinion: {{ persona.opinion }}</b-card-text>
                <hr>
                <div class="alinear">
                  <b-button variant="danger" @click="remove(persona, index)"
                  >Eliminar</b-button
                >
                <b-button
                  variant="warning"
                  @click="
                    update(index), (editar = !editar), removeUpdate(index)
                  "
                  >Editar</b-button>
                </div>
                
              </b-card-body>
            </b-card>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "OpinionComponent",
  data() {
    return {
      form: {
        arrayPersonas: [],
        opinion: "",
        name: "",
      },
      showOpinion: true,
      editar: false
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      var persona = {
        name: this.form.name,
        opinion: this.form.opinion,
      }; 
      this.form.arrayPersonas.push(persona);
      this.form.name = "";
      this.form.opinion = "";
      this.showOpinion = true;
    },

    remove(persona, index) {
      let response = confirm(
        `¿Esta seguro de eliminar la opinion de ${persona.name} ?`
      );
      if (response) {
        this.form.arrayPersonas.splice(index, 1);
      }
    },

    update(index) {
      this.form.name = this.form.arrayPersonas[index].name;
      this.form.opinion = this.form.arrayPersonas[index].opinion;
      this.showOpinion = false;
    },

    removeUpdate(index) {
      this.form.arrayPersonas.splice(index, 1);
    },
  },

  computed: {
    get_name: function () {
      return this.$route.params.name;
    },
  },
};
</script>

<style scoped>
 .alinear{
  display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
