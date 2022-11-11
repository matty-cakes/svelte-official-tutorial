<script>
  import SpreadPropsNested from "./SpreadPropsNested.svelte"

  const authorInfo = {
    name: "Douglas Adams",
    book: "The Hitchhiker's Guide to the Galaxy",
    year: 1979,
  }
</script>

<div>
  <SpreadPropsNested {...authorInfo} />
</div>
