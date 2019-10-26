<template>
  <div>
    <Navbar />
    <div class="container-fluid customnav-pt">
      <div class="row">
        <Alert />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Sidebar></Sidebar>
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Alert from "./AlertMessage";
export default {
  components: {
    Sidebar,
    Navbar,
    Alert
  }
};
</script>