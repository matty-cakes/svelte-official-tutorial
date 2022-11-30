<script>
  import MessageEventButton from "../../components/MessageEventButton.svelte"

  const handleDispatchedMessage = (e) => {
    alert(e.detail.text)
  }
</script>

<MessageEventButton on:message={handleDispatchedMessage} />
