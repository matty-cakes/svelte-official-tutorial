<script>
  import Router, { link } from "svelte-spa-router"

  import Home from "./lib/routes/Home.svelte"
  import HelloWorld from "./lib/routes/HelloWorld.svelte"
  import HelloMatt from "./lib/routes/HelloMatt.svelte"
  import AllComingTogether from "./lib/routes/AllComingTogether.svelte"
  import Stylin from "./lib/routes/Stylin.svelte"
  import NestIt from "./lib/routes/NestIt.svelte"
  import PlaySafely from "./lib/routes/PlaySafely.svelte"

  import NotFound from "./lib/routes/NotFound.svelte"

  const routes = {
    "/": Home,
    "/hello-world": HelloWorld,
    "/hello-matt": HelloMatt,
    "/all-coming-together": AllComingTogether,
    "/stylin": Stylin,
    "/nest-it": NestIt,
    "/play-safely": PlaySafely,

    // Catch-all - This is optional, but if present it must be the last
    "*": NotFound,
  }
</script>

<main>
  <div class="container">
    <div class="left">
      <ul>
        <li><a href="/hello-world" use:link>001 Hello World</a></li>
        <li><a href="/hello-matt" use:link>002 Hello Matt</a></li>
        <li>
          <a href="/all-coming-together" use:link>003 All Coming Together</a>
        </li>
        <li><a href="/stylin" use:link>004 Stylin</a></li>
        <li><a href="/nest-it" use:link>005 Nest It</a></li>
        <li><a href="/play-safely" use:link>006 Play Safely</a></li>
      </ul>
    </div>
    <div class="right">
      <div class="intro">
        <div class="welcome">Welcome To The Svelte Tutorial</div>
        <div class="explanation">
          This tutorial employs the help of <code>svelte-spa-router</code> to accomplish
          it's routing requirements. Aside from this it is the boilerplate project
          provided by the Vite Svelte template. At the moment the back and forward
          buttons won't work since it uses hash based routing... Not crazy about
          this, but you get what you get and you don't throw a fit. Beneath the line
          below you will find the result of a tutorial. The Svelte site does these
          in a superior fashion via its tabs, but that isn't my goal... my goal is
          to learn it.
        </div>
        <hr />
      </div>

      <div class="tutorial-body">
        <Router {routes} />
      </div>
    </div>
  </div>
</main>

<style>
  .container {
    display: flex;
  }

  .left {
    background-color: #676778;
    height: 100vh;
    min-width: 300px;
    max-width: 400px;
    width: 20%;
    padding: 10px;
  }

  .left li {
    margin-bottom: 5px;
  }

  .left a {
    color: aliceblue;
  }

  .right {
    margin: 10px 25px;
    display: flex;
    flex-direction: column;
  }

  .intro {
    margin-bottom: 4rem;
  }

  .explanation {
    margin-bottom: 1rem;
  }

  .welcome {
    font-weight: bolder;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .tutorial-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    border: 2px solid #676778;
  }
</style>
