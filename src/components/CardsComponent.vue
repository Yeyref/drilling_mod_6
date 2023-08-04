<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="4" v-for="(game, index) in games" :key="index">
          <div class="mb-4">
            <b-card class="centrar" no-body style="max-width: 18rem" :img-src="game.background_image" img-alt="Image"
              img-top>
              <b-card-body>
                <b-card-title>{{
                  game.name
                }}
                </b-card-title>
              </b-card-body>
              <b-list-group flush>
                <b-list-group-item>Rating: {{ game.rating }}</b-list-group-item>
                <b-list-group-item>Realeased: {{ game.released }}</b-list-group-item>
                <b-list-group-item>Updated: {{ game.updated }}</b-list-group-item>
              </b-list-group>

              <b-card-body class="alinear">
                <b-button variant="primary" @click="redirect(game)">Opinar</b-button>
                <b-link @click="administration(game)"><svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 512 512">
                    <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg></b-link>
              </b-card-body>
            </b-card>
          </div>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CardsComponent",
  data() {
    return {
      games: [],
    };
  },

  methods: {
    getGames() {
      let url =
        "https://api.rawg.io/api/games?key=4e2ed62fcee748f09717a15e6eb0dea5&dates=2019-09-01,2019-09-30&platforms=18,1,7";
      axios
        .get(url)
        .then((response) => {
          this.games = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    redirect(game) {
      this.$router.push(`/opiniones/${game.name}`);
    },
    administration(game) {
      this.$router.push(`/admin/${game.name}`);
    }
  },
  created() {
    this.getGames();
  },
};
</script>

<style scoped>
svg {
  fill: #ff0000;
}

.centrar {
  margin: 0 auto;
}
.alinear{
  display: flex;
    justify-content: space-evenly;
    align-items: center;
}
img {
  width: auto;
  height: 10rem;
}
</style>
