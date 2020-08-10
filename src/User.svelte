<script>
  import { db } from "./firestore.js";
  import { text } from "svelte/internal";
  export let index = "";
  export let user = {};
</script>

<style>
  .user form {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    /* height: 32vh; */
    width: 100%;
    max-width: 100vw;
    background-color: rgba(0, 0, 0, 0.32);
  }
  form input:nth-child(1) {
    min-width: 32vw;
  }
</style>

<!--#########################-->
<!--##########################-->
<div class="user">
  <form>
    <input type="text" value={user.email} />
    <input type="text" value={user.name} />
    <button>delete</button>
  </form>
</div>
