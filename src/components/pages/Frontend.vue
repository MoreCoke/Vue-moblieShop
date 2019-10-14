<template>
  <div>
    <Navbar />
    <Alert />
    <main class="pt-5">
      <router-view></router-view>
    </main>
    <!-- <Sidebar/> -->
  </div>
</template>

<script>
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Alert from "../AlertMessage";
export default {
  components: {
    Sidebar,
    Navbar,
    Alert
  }
};
</script>