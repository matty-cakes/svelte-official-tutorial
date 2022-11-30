<script>
  let a = 2
  let b = 3
</script>

<div>
  <label>
    <input bind:value={a} type="number" min="0" max="10" />
    <input bind:value={a} type="range" min="0" max="10" />
  </label>

  <label>
    <input bind:value={b} type="number" min="0" max="10" />
    <input bind:value={b} type="range" min="0" max="10" />
  </label>

  <p>{a} + {b} = {a + b}</p>
</div>

<style>
  label {
    display: flex;
  }

  input {
    margin-bottom: 10px;
    margin-right: 5px;
  }

  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
</style>
