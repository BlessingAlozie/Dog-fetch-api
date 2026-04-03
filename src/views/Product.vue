<template>
  <h1>{{ message }}</h1>

  <div class="cardSection">
    <div class="card" v-for="(dog, index) in paginatedDogs" :key="dog.img">
      <img :src="dog.img" alt="Dog Image" loading="lazy" />
      <div class="sub-div">
        <div class="flex">
          <p>Name: {{ dog.name }}</p>
          <p :style="{ fontWeight: 600 }">Price: ₦{{ dog.price }}.00</p>
        </div>
        <button>Buy Now</button>
      </div>
    </div>
  </div>
   <!-- pagination controls -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentpage === 1">Prev</button>

      <span>Page {{ currentpage }} of {{ totalpages }}</span>

      <button @click="nextPage" :disabled="currentpage === totalpages">
        Next
      </button>
    </div>
    <!-- ----- -->

</template>
<script>
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      message: "Hello Blessing, No more going back!",
      dogArray: [],

      dogNames: [
        { name: "buddy", price: 150000 },
        { name: "max", price: 200000 },
        { name: "charlie", price: 180000 },
        { name: "bella", price: 160000 },
        { name: "lucy", price: 175000 },
        { name: "daisy", price: 195000 },
        { name: "molly", price: 215000 },
        { name: "lola", price: 225000 },
        { name: "sadie", price: 235000 },
        { name: "bailey", price: 245000 },
        { name: "rocky", price: 155000 },
        { name: "jack", price: 165000 },
        { name: "toby", price: 185000 },
        { name: "coco", price: 205000 },
        { name: "zoey", price: 215000 },
        { name: "luna", price: 225000 },
        { name: "gracie", price: 235000 },
        { name: "ruby", price: 245000 },
        { name: "abby", price: 255000 },
        { name: "sophie", price: 265000 },
      ],

      // Pagination variables
      currentpage: 1,
      itemsperpage: 8,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          "https://dog.ceo/api/breed/hound/images"
        );
        const images = response.data.message.slice(
          50,
          50 + this.dogNames.length
        );

        this.dogArray = images.map((imageUrl, index) => {
          return {
            img: imageUrl,
            name: this.dogNames[index].name,
            price: this.dogNames[index].price,
          };
        });

        console.log(this.dogArray);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },

    // pagination methods
      nextPage() {
        if (this.currentpage < this.totalpages) {
          this.currentpage++;
        }
      },
      prevPage() {
        if (this.currentpage > 1) {
          this.currentpage--;
        }
      },
    },

  computed: {
    paginatedDogs() {
      const start = (this.currentpage - 1) * this.itemsperpage;
      const end = start + this.itemsperpage;
      return this.dogArray.slice(start, end);
    },
    totalpages() {
      return Math.ceil(this.dogArray.length / this.itemsperpage);
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin-top: 20px;
}

.cardSection {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding-left: 100px;
  padding-right: 100px;
}
img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.sub-div {
  padding: 10px 20px 20px 20px;
}
.card {
  height: 400px;
  background-color: #e1e1e1;
  padding-bottom: 40px;
}
.flex {
  display: flex;
  justify-content: space-between;
}
button{
  padding: 12px 20px;
  background-color: #158b8f;
  color: #fff;
  border-radius: 50px;
  border: none   ;
  cursor: pointer;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  gap: 20px;
}
</style>
