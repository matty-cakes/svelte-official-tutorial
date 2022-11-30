<script>
</script>

<div>
  <button on:click|once={() => alert("one and done!")}
    >Once is enough for anyone!</button
  >
</div>

<style>
  div {
    width: 100%;
    height: 8rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 50%;
    padding: 2rem;
    background-color: cadetblue;
    color: aliceblue;
  }
</style>
