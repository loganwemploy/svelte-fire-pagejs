<script>
  import { db } from "./firestore.js";
  import User from "./User.svelte";
  //   export let index;
  //   export let id;
  let users = [];
  db.collection("users").onSnapshot((data) => {
    users = data.docs;
  });
</script>

<style>

</style>

<!--#########################-->
<!--##########################-->
<div id="users">
  {#each users as user, i}
    <li style="display:flex;">
      <User id={user.id} user={user.data()} index={i} />
      &nbsp; {`# ${i + 1}`}
    </li>
  {/each}

</div>
