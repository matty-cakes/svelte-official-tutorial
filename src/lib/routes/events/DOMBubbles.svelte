<script>
  import DOMButton from "./BubbleHelpers/DOMButton.svelte"

  const handleClick = (event) => {
    alert(event.target.value)
  }
</script>

<DOMButton on:click={handleClick} />
