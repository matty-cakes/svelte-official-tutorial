<script>
  import { marked } from "marked"
    let value = `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`

</script>

<div class="grid">
  <p>Input</p>
  <textarea bind:value name="markdown-area" id="input" />

  <p>Output</p>
  <div class="output">{@html marked(value)}</div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 5em 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1em;
    width: 100%;
    height: 100%;
  }

  textarea {
    flex: 1;
    resize: none;
    height: 15rem;
  }

  /* Reset the Reset (app.css) */
  /* You MUST use :global to accomplish this because it can't see the tags made by marked and will otherwise purge them */
  .output :global(strong) {
    font-weight: 700;
  }

  .output :global(em) {
    font-style: italic;
  }

  .output :global(ul) { 
    list-style-type: disc; 
    list-style-position: inside; 
  }
  .output :global(ul ul) { 
    list-style-type: circle; 
    list-style-position: inside; 
    margin-left: 15px; 
 }

 .output :global(ol ul) { 
    list-style-type: circle; 
    list-style-position: inside; 
    margin-left: 15px; 
 }

 .output :global(ol ol) { 
    list-style-type: lower-latin; 
    list-style-position: inside; 
    margin-left: 15px; 
 }

 .output :global(ul ol) { 
    list-style-type: lower-latin; 
    list-style-position: inside; 
    margin-left: 15px; 
 }

</style>
