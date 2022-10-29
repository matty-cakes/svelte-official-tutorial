<script>
  let str = "This string has some <strong>HTML!!!</strong>"
</script>

<div>
  <p>Some Safe Stuff: {str}</p>
  <p>Some Less Safe Stuff {@html str}</p>
</div>
