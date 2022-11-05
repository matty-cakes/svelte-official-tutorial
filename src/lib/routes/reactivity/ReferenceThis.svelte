<script>
  let numbers = [1, 3, 5, 7, 9]

  // this will not cause an update as the item's identity remains the same
  // numbers.push(n)

  // this will cause an update as assignment is happening
  const addNumber = () => (numbers = [...numbers, numbers.at(-1) + 2])

  // sum is a `reactive` statement the sums the entire set of numbers
  $: sum = numbers.reduce((t, n) => t + n, 0)
</script>

<div>
  <p>{numbers.join(" + ")} = {sum}</p>
  <button on:click={addNumber}>Add A Number!</button>
</div>

<style>
  p {
    margin-bottom: 20px;
  }
  button {
    padding: 0.95rem;
    background-color: rgb(10, 120, 80);
    color: white;
    border-radius: 5px;
    font-weight: 400;
    margin-bottom: 10px;
  }
</style>
