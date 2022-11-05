<script>
  let count = 0
  $: doubled = count * 2
  const incCount = () => (count += 1)

  $: console.log(`the count is ${count}!`)

  $: if (count > 9) {
    alert("The count is getting dangerously high...")
    count = 9
  }
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
    background-color: rgb(160, 8, 97);
    color: white;
    border-radius: 5px;
    font-weight: 400;
    margin-bottom: 10px;
  }
</style>
