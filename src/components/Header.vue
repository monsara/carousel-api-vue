<script setup></script>

<template>
  <header
    class="container-fluid d-flex py-2 py-xxl-3 px-4 justify-content-between align-items-center border-bottom"
  >
    <nav class="navbar navbar-expand-lg navbar-light w-100">
      <a class="navbar-brand fw-bold d-flex align-items-center fs-4" href="#">
        <img
          src="@/assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top me-2"
          alt="Logo"
        />
        Osmo
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <a
            class="navbar-brand fw-bold d-flex align-items-center fs-4"
            href="#"
          >
            <img
              src="@/assets/logo.png"
              width="30"
              height="30"
              class="d-inline-block align-top me-2"
              alt="Logo"
            />
            Osmo
          </a>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul
            class="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3 text-uppercase gap-5 fw-bold"
          >
            <li class="nav-item active">
              <a class="nav-link text-secondary" href="#">Download</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">Support</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">Stories</a>
            </li>
            <li class="nav-item">
              <a
                class="btn btn-outline-dark fw-bold px-4 py-2 py-xxl-3 rounded-5"
                href="#"
                >Sign in</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.navbar-nav {
  font-family: 'Roboto Mono';
}

.nav-item .btn,
.cta-btn {
  font-size: 15px;
}
</style>
