<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()

  const sayHello = () => {
    dispatch("message", { text: "Well Hello!" })
  }
</script>

<button on:click={sayHello}>Send a Message Why Not?</button>

<style>
  button {
    padding: 2rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
</style>
