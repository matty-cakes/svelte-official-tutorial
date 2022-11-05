<script>
  let count = 0
  $: doubled = count * 2
  const incCount = () => (count += 1)
</script>

<div>
  <button on:click={incCount}>
    Clicked {count}
    {count === 1 ? "time" : "times"}
  </button>
  <p>By the way, the count doubed is: {doubled}</p>
</div>

<style>
  button {
    padding: 1rem;
    background-color: rgb(196, 116, 237);
    color: rgb(58, 57, 57);
    border-radius: 5px;
    font-family: "Courier New", Courier, monospace;
    font-weight: bolder;
    margin-bottom: 10px;
  }
</style>
