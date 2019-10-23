<template>
  <div class="vuebody">
    <div class="wrapper">
      <Navbar />
      <Alert />
      <main class="pt-5">
        <router-view></router-view>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Alert from "../AlertMessage";
import Footer from "../Footer";
export default {
  components: {
    Sidebar,
    Navbar,
    Alert,
    Footer
  }
};
</script>