<script>
  import JustPropsNested from "./JustPropsNested.svelte"

  // This will be passed in as a prop to `JustPropsNested`
  let answer = 42
</script>

<div>
  <JustPropsNested {answer} />
</div>
