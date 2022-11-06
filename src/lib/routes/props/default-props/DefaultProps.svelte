<script>
  import DefaultPropsNested from "./DefaultPropsNested.svelte"

  // This will be passed in as a prop to `DefaultPropsNested`
  let answer = "forty two I'd bet..."
</script>

<div>
  <DefaultPropsNested {answer} />
</div>
