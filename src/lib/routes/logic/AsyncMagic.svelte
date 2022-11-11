<script>
  const API = "https://randomuser.me/api/"
  const getRandomUser = async () => {
    const res = await fetch(API)
    const text = await res.text()

    console.log(text)

    if (res.ok) {
      return text
    } else {
      throw new Error(text)
    }
  }

  let promise = getRandomUser()

  function handleClick() {
    promise = getRandomUser()
  }
</script>

<div>
  <h1>Some User Information</h1>
  <div class="the-blob">
    {#await promise}
      <p>...waiting</p>
    {:then text}
      <p>The text is {text}</p>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
  <button on:click={handleClick}>Get User Data</button>
</div>

<style>
  .the-blob {
    max-width: 500px;
    overflow-wrap: break-word;
    height: 475px;
    font-family: "Courier New", Courier, monospace;
  }
</style>
