<script>
  const movies = [
    "To Kill A Mockingbird",
    "The Usual Suspects",
    "The Rescuers Down Under",
    "Monty Python and The Holy Grail",
    "Gladiator",
    "Scream",
    "The Godfather",
    "Hercules",
    "The Mummy",
  ]
</script>

<div>
  <h1>Some Random Films</h1>
  <ul>
    {#each movies as movie, i (`key_${i}`)}
      <li>{i + 1}: {movie}</li>
    {/each}
  </ul>
</div>

<style>
</style>
