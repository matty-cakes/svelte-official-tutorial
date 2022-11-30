<!-- You can also use shorthand to bind values -->
<script>
  let value = `Some words are *italic*, some are **bold**... but reall the tutorial can be broken so... deal`
</script>

<div>
  <p>{value}</p>
  <br />
  <textarea bind:value name="some-textarea" id="text" cols="30" rows="10" />
</div>

<style>
  textarea {
    width: 100%;
    max-width: 1500px;
    height: 200px;
  }
</style>
