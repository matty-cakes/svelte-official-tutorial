<script>
  import Outer from "./BubbleHelpers/Outer.svelte"

  const handleEvent = (event) => {
    alert(event.detail.text)
  }
</script>

<Outer on:message={handleEvent} />
