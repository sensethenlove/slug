<script lang="ts">
  import { slug } from '$lib'

  let response: string

  function setResponse (e: Event) {
    const target = e.target as HTMLInputElement
    response = slug(target.value)
  }
</script>


<main>
  <textarea on:input={ setResponse } />
  { #if response }
    <div>{ response }</div>
  { /if }
</main>


<style>
  :global(html) {
    font-family: Inter, ui-sans-serif, system-ui;
    font-size: 62.5%; /* https://stackoverflow.com/questions/59920538 */
  }

  :global(body) {
    font-size: 1.8rem;
    line-height: 1.369;
  }

  textarea {
    width: 27rem;
    aspect-ratio: 1.618 / 1;
    outline: 0;
    padding: 0.6rem 0.9rem;
    line-height: 1.369;
    font-size: 1.5rem;
    border-radius: 0.9rem;
    border-color: transparent;
    border: 1px solid #ced3d6;
    font-family: Inter, ui-sans-serif, system-ui;
  }

  textarea:focus {
    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
  }
</style>
