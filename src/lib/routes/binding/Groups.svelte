<script>
  const MINT_CHOCOLATE_CHIP = "mint chocolate chip"
  const COOKIES_AND_CREAM = "cookies and cream"
  const RASPBERRY_RIPPLE = "raspberry ripple"
  const menu = [MINT_CHOCOLATE_CHIP, COOKIES_AND_CREAM, RASPBERRY_RIPPLE]

  let flavours = [MINT_CHOCOLATE_CHIP]
  let scoops = 1

  // Real tutorial does shadowing here... meh
  const join = (_flavours = []) => {
    if (_flavours.length === 1) {
      return _flavours[0]
    }
    return `${_flavours.slice(0, -1)} and ${_flavours[_flavours.length - 1]}`
  }
</script>

<div class="container">
  <h1>🍦</h1>

  <div class="size-container">
    <h2>Sizes</h2>

    <label>
      <input type="radio" bind:group={scoops} name="scoops" value={1} />
      One Scoop
    </label>

    <label>
      <input type="radio" bind:group={scoops} name="scoops" value={2} />
      Two Scoops
    </label>

    <label>
      <input type="radio" bind:group={scoops} name="scoops" value={3} />
      Three Scoops
    </label>
  </div>

  <div class="flavours-container">
    <h2>Flavours</h2>

    {#each menu as flavour}
      <label>
        <input
          type="checkbox"
          bind:group={flavours}
          name="flavours"
          value={flavour}
        />
        {flavour}
      </label>
    {/each}
  </div>

  {#if flavours.length === 0}
    <p>Please select at least one flavor...</p>
  {:else if flavours.length > scoops}
    <p>There are more flavors than scoops... Illogical 🤖</p>
  {:else}
    <p>
      You ordered {scoops}
      {scoops === 1 ? "scoop" : "scoops"} of {join(flavours)}
    </p>
  {/if}
</div>

<style>
  .container {
    background-color: rgb(230, 80, 105);
    color: antiquewhite;
    width: 100%;
    padding: 2rem;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: 300;
  }

  label:before {
    content: "\a";
    white-space: pre;
  }

  .flavours-container {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
</style>
