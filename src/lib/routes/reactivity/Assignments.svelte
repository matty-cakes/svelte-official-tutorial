<script>
  let count = 0
  const incCount = () => (count += 1)
</script>

<button on:click={incCount}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>

<style>
  button {
    padding: 1rem;
    background-color: aquamarine;
    color: rgb(58, 57, 57);
    border-radius: 5px;
    font-family: "Courier New", Courier, monospace;
    font-weight: bolder;
  }
</style>
