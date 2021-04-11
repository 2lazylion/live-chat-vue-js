<template>
  <footer>
    <p>Made by Edward Cadet with Net Ninja's Udemy Course</p>
    <p>
      github:
      <a href="https://github.com/2lazylion/live-chat-vue-js">
        https://github.com/2lazylion/live-chat-vue-js
        </a>
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  display: flexbox;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
}

footer p {
    margin: 10px 0;
}

footer a {
    color: #49a393;
}

footer a:visited {
    color: #32685e;
}

footer a:hover {
    color: #5ae4ca;
}

footer a:active {
    color: #32685e;
}
</style>