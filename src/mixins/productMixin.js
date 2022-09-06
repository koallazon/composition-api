export default {
  data() {
    return {
      name: "에어 조던 6 레트로",
      filterType: "ALL",
      products: [
        {
          size: 250,
          inventory: 30,
          color: "white",
        },
        {
          size: 260,
          inventory: 0,
          color: "black",
        },
        {
          size: 270,
          inventory: 20,
          color: "red1",
        },
      ],
    };
  },
  computed: {
    hasProduct() {
      return this.products.length > 0;
    },
    filteredProducts() {
      let conditions = (item) => true;
      if (this.filterType === "STOCK")
        conditions = (item) => item.inventory > 0;
      return this.products.filter(conditions);
    },
  },
  methods: {
    changeFilterType(type) {
      if (!["ALL", "STOCK"].includes(type))
        throw new Error("invalid type params");
      this.filterType = type;
    },
  },
};
