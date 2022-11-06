<script>
  import JustAParagraph from "../../components/JustAParagraph.svelte"

  let name = "Matt".toUpperCase()
</script>

<div>
  <div class="sentence">
    Hello <span class="name">{name}</span> <span class="you">you</span>
    <span class="are">are</span> <span class="awesome">awesome</span>
  </div>
  <JustAParagraph />
</div>

<style>
  .sentence {
    color: rgb(19, 74, 192);
    font-family: "Comic Sans MS", cursive;
    font-size: 1.5em;
  }
</style>
