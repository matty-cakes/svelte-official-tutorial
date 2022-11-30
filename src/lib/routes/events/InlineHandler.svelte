<script>
  let m = {
    x: 0,
    y: 0,
  }
</script>

<div on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
  <p>The mouse position is {m.x} and {m.y}</p>
</div>

<style>
  div {
    width: 100%;
    height: 8rem;
    padding: 1rem;
    border: 3px solid red;
    text-align: center;
    border-radius: 4px;
    box-shadow: 20px 10px;
  }
</style>
