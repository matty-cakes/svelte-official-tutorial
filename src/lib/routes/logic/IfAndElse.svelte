<script>
  const base = 'If "ifs" and "buts" were candy and nuts'
  const originalPhrase = "we'd all have a Merry Christmas."
  const mattPhrase = "Tommy would get a little younger for Christmas."
  const arielPhrase = "Rory and Dean would be married at Christmas."

  let original = true
  let matt = false
  let ariel = false

  const changeValue = (e) => {
    const v = e.target.value
    switch (v) {
      case "matt":
        matt = true
        original = false
        ariel = false
        break
      case "ariel":
        matt = false
        original = false
        ariel = true
        break
      default:
        matt = false
        original = true
        ariel = false
    }
  }
</script>

<div>
  <div class="phrase">
    {#if matt}
      <p>
        {base}
        <span> {mattPhrase}</span>
      </p>
    {:else if ariel}
      <p>
        {base}
        <span> {arielPhrase}</span>
      </p>
    {:else}
      <p>
        {base}
        <span> {originalPhrase}</span>
      </p>
    {/if}
  </div>

  <button value="original" on:click={changeValue}>Original</button>
  <button value="matt" on:click={changeValue}>Matt</button>
  <button value="ariel" on:click={changeValue}>Ariel</button>
</div>

<style>
  .phrase {
    max-width: 350px;
    margin-bottom: 1rem;
  }

  span {
    font-weight: 700;
  }

  button {
    padding: 0.45rem;
    background-color: aliceblue;
    font-weight: 800;
  }
</style>
