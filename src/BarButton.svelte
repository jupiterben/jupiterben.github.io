<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let text = "";
  export let icon: string;
  export let value: any;
  export let active = false;

  const dispatch = createEventDispatcher();

  let isHovered = false;
  function handleMouseOver() {
    isHovered = true;
  }
  function handleMouseOut() {
    isHovered = false;
  }

  function calStyle(active: boolean, isHovered: boolean) {
    let clsHover = "bg-white/50";
    let clsActive = "bg-white/50";
    let clsCommon = "p-2 w-12 h-12 rounded-full";
    if (active) {
      return clsCommon + " " + clsActive;
    } else if (isHovered) {
      return clsCommon + " " + clsHover;
    } else {
      return clsCommon;
    }
  }
</script>

<button
  class={calStyle(active, isHovered)}
  on:click={() => dispatch("click", { value })}
  on:mouseover={handleMouseOver}
  on:mouseout={handleMouseOut}
  on:focus={handleMouseOver}
  on:blur={handleMouseOut}
>
  <img src={icon} alt="" />
</button>

<style>
</style>
