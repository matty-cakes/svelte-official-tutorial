<script>
  let yes = false
</script>

<div class="container">
  <label>
    <input type="checkbox" bind:checked={yes} />
    Yes! Send me spam on the regular!
  </label>
  <div>
    {#if yes}
      <p>Thanks we will totally spam you all the time... love ya!</p>
    {:else}
      <p>You must subscribe... don't you get it?</p>
    {/if}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  label {
    margin-bottom: 1rem;
  }

  p {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
</style>
