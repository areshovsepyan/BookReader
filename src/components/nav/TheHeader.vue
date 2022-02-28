<template>
  <header>
    <h1>
      <router-link to="/"> BookReader</router-link>
    </h1>
    <nav>
      <ul>
        <li><router-link to="/get-started">Get Started</router-link></li>
        <li><router-link to="/about-us">About Us</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 900px;

  border: 2px solid #057d9f;
  border-radius: 0.75rem;

  height: 5rem;
  background-color: #057d9f;
  margin: 0 auto;

  margin-bottom: 1.75rem;
}
h1 {
  font-family: 'prometheus', sans-serif;
  margin-left: 2rem;
}

nav {
  margin-right: 1.5rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid transparent;
}

a:hover,
a:active,
a.router-link-active {
  border-color: #a7ecff;
}
h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  color: white;
  border-color: transparent;
}

</style>
