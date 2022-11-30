<script>
  let m = {
    x: 0,
    y: 0,
  }

  const handleMouseMove = (e) => {
    m.x = e.clientX
    m.y = e.clientY
  }
</script>

<div on:mousemove={handleMouseMove}>
  <p>The mouse position is {m.x} and {m.y}</p>
</div>

<style>
  div {
    width: 100%;
    height: 8rem;
    padding: 1rem;
    border: 1px solid salmon;
    text-align: center;
  }
</style>
