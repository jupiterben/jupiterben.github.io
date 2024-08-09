<script lang="ts">
  import SideBar from "./SideBar.svelte";
</script>

<main
  class="m-0 h-screen bg-gray-100
bg-[url('images/bg.jpg')] bg-center bg-cover"
>
  <SideBar />
  <div class="w-full h-screen p-20">
    <div class="bg-slate-500 h-full overflow-hidden overflow-y-auto flex">
        <div class="w-80 h-60 m-2 bg-white"></div>
        <div class="w-40 h-40 m-2 bg-white"></div>
        <div class="w-40 h-40 m-2 bg-white"></div>
        <div class="w-40 h-40 m-2 bg-white"></div>
        <div class="w-40 h-40 m-2 bg-white"></div>

    </div>
  </div>
</main>

<style>
</style>
