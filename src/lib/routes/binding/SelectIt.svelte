<script>
  let questions = [
    { id: 1, text: "What is your favorite tasty treat?" },
    { id: 2, text: "What is your favorite lishy snack?" },
    { id: 3, text: "What is your favorite yum yum eatie poo?" },
  ]

  let selected
  let answer = ""

  const handleSubmit = () => {
    alert(`Your easy to guess answer was : ${answer}`)
  }
</script>

<div class="container">
  <h2>Insecurity Questions</h2>

  <form on:submit|preventDefault={handleSubmit}>
    <select bind:value={selected} on:change={() => (answer = "")}>
      {#each questions as question}
        <option value={question}>{question.text}</option>
      {/each}
    </select>

    <input bind:value={answer} type="text" />

    <button disabled={!answer} type="submit">Submit</button>
  </form>

  <p>selected question: {selected ? selected.id : "[waiting...]"}</p>
</div>

<style>
  button {
    background-color: burlywood;
    color: brown;
    padding: 1rem;
  }
</style>
