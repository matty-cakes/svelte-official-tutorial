<script>
  import Router, { link } from "svelte-spa-router"

  // Basics
  import Home from "./lib/routes/basics/Home.svelte"
  import HelloWorld from "./lib/routes/basics/HelloWorld.svelte"
  import HelloMatt from "./lib/routes/basics/HelloMatt.svelte"
  import AllComingTogether from "./lib/routes/basics/AllComingTogether.svelte"
  import Stylin from "./lib/routes/basics/Stylin.svelte"
  import NestIt from "./lib/routes/basics/NestIt.svelte"
  import PlaySafely from "./lib/routes/basics/PlaySafely.svelte"

  // Reactivity
  import Assignments from "./lib/routes/reactivity/Assignments.svelte"
  import Declarations from "./lib/routes/reactivity/Declarations.svelte"
  import Statements from "./lib/routes/reactivity/Statements.svelte"
  import ReferenceThis from "./lib/routes/reactivity/ReferenceThis.svelte"

  // Props
  import JustProps from "./lib/routes/props/just-props/JustProps.svelte"
  import DefaultProps from "./lib/routes/props/default-props/DefaultProps.svelte"
  import SpreadProps from "./lib/routes/props/spread-props/SpreadProps.svelte"

  // Logic
  import IfAndElse from "./lib/routes/logic/IfAndElse.svelte"
  import LoopIt from "./lib/routes/logic/LoopIt.svelte"
  import AsyncMagic from "./lib/routes/logic/AsyncMagic.svelte"

  // Events
  import BasicEvent from "./lib/routes/events/BasicEvent.svelte"
  import InlineHandler from "./lib/routes/events/InlineHandler.svelte"
  import Modifier from "./lib/routes/events/Modifier.svelte"
  import ComponentEvents from "./lib/routes/events/ComponentEvents.svelte"
  import BubbleUp from "./lib/routes/events/BubbleUp.svelte"
  import DomBubbles from "./lib/routes/events/DOMBubbles.svelte"

  // Bindings
  import SimpleInput from "./lib/routes/binding/SimpleInput.svelte"
  import Numbers from "./lib/routes/binding/Numbers.svelte"
  import Checkboxes from "./lib/routes/binding/Checkboxes.svelte"
  import Groups from "./lib/routes/binding/Groups.svelte"
  import Shorthand from "./lib/routes/binding/Shorthand.svelte"
  import SelectIt from "./lib/routes/binding/SelectIt.svelte"
  import SelectMultiple from "./lib/routes/binding/SelectMultiple.svelte"
  import Textarea from "./lib/routes/binding/Textarea.svelte"

  // Admin Routes
  import NotFound from "./lib/routes/NotFound.svelte"

  const routes = {
    "/": Home,
    "/hello-world": HelloWorld,
    "/hello-matt": HelloMatt,
    "/all-coming-together": AllComingTogether,
    "/stylin": Stylin,
    "/nest-it": NestIt,
    "/play-safely": PlaySafely,

    // Reactivity
    "/reactivity/assignments": Assignments,
    "/reactivity/declarations": Declarations,
    "/reactivity/statements": Statements,
    "/reactivity/reference-this": ReferenceThis,

    // Props
    "/props/just-props": JustProps,
    "/props/default-props": DefaultProps,
    "/props/spread-props": SpreadProps,

    // Logic
    "/logic/if-else": IfAndElse,
    "/logic/loop-it": LoopIt,
    "/logic/async-magic": AsyncMagic,

    // Events
    "/events/basic-event": BasicEvent,
    "/events/inline-handler": InlineHandler,
    "/events/modifier": Modifier,
    "/events/component-events": ComponentEvents,
    "/events/bubble-up": BubbleUp,
    "/events/dom-bubbles": DomBubbles,

    // Bindings
    "/bindings/simple-input": SimpleInput,
    "/bindings/numbers": Numbers,
    "/bindings/checkboxes": Checkboxes,
    "/bindings/groups": Groups,
    "/bindings/shorthand": Shorthand,
    "/bindings/select-it": SelectIt,
    "/bindings/select-multiple": SelectMultiple,
    "/bindings/textarea": Textarea,


    // Catch-all - This is optional, but if present it must be the last
    "*": NotFound,
  }
</script>

<main>
  <div class="container">
    <div class="left">
      <div class="section-title">The Basics</div>
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
      <div class="section-title">Reactvity</div>
      <ul>
        <li><a href="/reactivity/assignments" use:link>007 Assignments</a></li>
        <li>
          <a href="/reactivity/declarations" use:link>008 Declarations</a>
        </li>
        <li>
          <a href="/reactivity/statements" use:link>009 Statements</a>
        </li>
        <li>
          <a href="/reactivity/reference-this" use:link>010 Reference This</a>
        </li>
      </ul>
      <div class="section-title">Properties</div>
      <ul>
        <li>
          <a href="/props/just-props" use:link>011 Just Props</a>
        </li>
        <li>
          <a href="/props/default-props" use:link>012 Default Props</a>
        </li>
        <li>
          <a href="/props/spread-props" use:link>013 Spread Props</a>
        </li>
      </ul>
      <div class="section-title">Logic</div>
      <ul>
        <li>
          <a href="/logic/if-else" use:link>014 If And Else</a>
        </li>
        <li>
          <a href="/logic/loop-it" use:link>015 Loop It</a>
        </li>
        <li>
          <a href="/logic/async-magic" use:link>016 Async Magic</a>
        </li>
      </ul>
      <div class="section-title">Events</div>
      <ul>
        <li>
          <a href="/events/basic-event" use:link>017 Basic Events</a>
        </li>
        <li>
          <a href="/events/inline-handler" use:link>018 Inline Handler</a>
        </li>
        <li>
          <a href="/events/modifier" use:link>019 Modifiers</a>
        </li>
        <li>
          <a href="/events/component-events" use:link>020 Component Events</a>
        </li>
        <li>
          <a href="/events/bubble-up" use:link>021 Bubble Up</a>
        </li>
        <li>
          <a href="/events/dom-bubbles" use:link>022 DOM Bubbles</a>
        </li>
      </ul>
      <div class="section-title">Bindings</div>
      <ul>
        <li>
          <a href="/bindings/simple-input" use:link>023 Basic Bindings</a>
        </li>
        <li>
          <a href="/bindings/numbers" use:link>024 Numeric Bindings</a>
        </li>
        <li>
          <a href="/bindings/checkboxes" use:link>025 Checkbox Bindings</a>
        </li>
        <li>
          <a href="/bindings/groups" use:link>026 Group Bindings</a>
        </li>
        <li>
          <a href="/bindings/shorthand" use:link>027 Binding Shorthand</a>
        </li>
        <li>
          <a href="/bindings/select-it" use:link>028 Select It</a>
        </li>
        <li>
          <a href="/bindings/select-multiple" use:link>029 Select Multiple</a>
        </li>
        <li>
          <a href="/bindings/textarea" use:link>030 Binding Textarea</a>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="intro">
        <div class="welcome">Welcome To The Svelte Tutorial</div>
        <div class="explanation">
          <p>
            This is a step by step recreation of the tutorial demonstrations
            from Svelte's website. I often feel as though I get more out of this
            manner of doing tutorials as there is something irreplacable about
            the code running on my machine.
          </p>
          <br />
          <p>
            This tutorial employs the help of <code>svelte-spa-router</code> to accomplish
            it's routing requirements. Aside from this it is the boilerplate project
            provided by the Vite Svelte template. At the moment the back and forward
            buttons won't work since it uses hash based routing... Not crazy about
            this, but you get what you get and you don't throw a fit. Beneath the
            line below you will find the result of a tutorial. The Svelte site does
            these in a superior fashion via its tabs, but that isn't my goal... my
            goal is to learn it.
          </p>
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
    min-width: 225px;
    max-width: 325px;
    width: 21%;
    padding: 1rem 1rem;
  }

  .left ul {
    margin-bottom: 1rem;
  }

  .left li {
    margin-bottom: 5px;
  }

  .left a {
    color: aliceblue;
  }

  .left .section-title {
    margin-bottom: 5px;
    color: aliceblue;
    font-weight: bold;
  }

  .right {
    padding: 1rem 2.75rem;
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
