<script>import { slug } from "./";
let response;
function setResponse(e) {
  const target = e.target;
  response = slug(target.value);
}
</script>


<div class="stl--slug">
  <textarea on:input={ setResponse } />
  { #if response }
    <div>{ response }</div>
  { /if }
</div>


<style>.stl--slug {
  font-size: 15px;
  line-height: 1.369;
  font-family: Inter, ui-sans-serif, system-ui;
}
.stl--slug textarea {
  width: 270px;
  aspect-ratio: 1.618/1;
  outline: 0;
  padding: 6px 9px;
  line-height: 1.369;
  font-size: 15px;
  border-radius: 9px;
  border-color: transparent;
  border: 1px solid #ced3d6;
  font-family: Inter, ui-sans-serif, system-ui;
}
.stl--slug textarea:focus {
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}</style>
