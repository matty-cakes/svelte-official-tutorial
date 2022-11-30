<script>
  let name = "world"
</script>

<div>
  <label for="name">Provide a Name:</label>
  <input
    id="name"
    placeholder="please provide a dope name"
    bind:value={name}
    type="text"
  />
  <h2>Hello {name}</h2>
</div>

<style>
  input {
    margin-bottom: 32px;
  }
  h2 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
  }
</style>
