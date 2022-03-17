<template>
  <form @submit.prevent="addFriend">
    <div class="form-group">
      <label for="name">Name: </label>
      <input
        type="text"
        v-model="name"
        class="form-control"
        id="name"
        placeholder="Enter name"
      />
    </div>
    <div class="form-group">
      <label for="phone">Phone: </label>
      <input
        type="text"
        v-model="phone"
        class="form-control"
        id="phone"
        placeholder="Enter phone"
      />
    </div>
    <div class="form-group">
      <label for="email">Email: </label>
      <input
        type="text"
        v-model="email"
        class="form-control"
        id="email"
        placeholder="Enter email"
      />
    </div>
    <label for="isFavorite">Favorite</label>
    <input type="checkbox" id="isFavorite" v-model="isFavorite" />
    <button type="submit" class="btn btn-primary">Add Friend</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isFavorite: false,
      name: "",
      phone: "",
      email: "",
    };
  },
  emits: ["addFriend"],
  methods: {
    addFriend() {
      this.$emit("add-friend", {
        id: new Date().toDateString(),
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: this.isFavorite,
      });
    },
  },
};
</script>
