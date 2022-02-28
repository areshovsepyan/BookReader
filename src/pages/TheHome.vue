<template>
  <base-badge>
    <div>
      <p>
        This is a simple web application for reading your books. Push "Get
        Started", hold your book in front of the camera, press 'Space'. It will
        copy the text from your book and read it for you.
      </p>
      <router-link to="/get-started">Get Started</router-link>
    </div>
  </base-badge>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  font-size: 1.1rem;
  font-weight: bold;
}
a {
  text-decoration: none;
  color: #025167;
  font-weight: bold;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #001d25;
}
</style>
