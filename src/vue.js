const app = new Vue({
  el: "#app",
  data() {

    return {
      items: [],
      search: '',
      data: [
        [
          desc = 'general',
          {titulo: 'Empezando'},
          {titulo: 'hola32'},
          {titulo: 'hola41'},
          {titulo: 'hola123'},
        ],
        [
          desc = 'programmer',
          {titulo: 'hola2'},
          {titulo: 'hola12'},
          {titulo: 'hola32'},
          {titulo: 'hola41'},
          {titulo: 'hola123'},
        ],
        [
          desc = 'marketing',
          {titulo: 'hola3'},
          {titulo: 'hola12'},
          {titulo: 'hola32'},
          {titulo: 'hola41'},
          {titulo: 'hola123'},
        ]
      ]
    }

  },
  mounted() {
    this.items = this.data[0];
    this.search = '';
  },
  methods: {
    changeMenu: function(item) {
      switch (item) {
        case 'general':
          this.items = this.data[0];
          break;
        case 'programmer':
          this.items = this.data[1];
          break;
        case 'marketing':
          this.items = this.data[2];
          break;
      }
    }
  },

  computed: {
    filtro() {
      return this.items.slice(1).filter(item => {
        return item.titulo.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
});