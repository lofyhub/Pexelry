<template>
  <div>
    <div class="about-section">
      <div>
        <h2>About Pexelry</h2>
        <p>more about us</p>
      </div>
      <div>
        <vue-scroll-indicator
          height="4px"
          color="#32d9cb"
          background="none"
        ></vue-scroll-indicator>
      </div>
    </div>
    <div class="pexelry-about">
      <h3>Pexelry</h3>
      <p>
        Application that leverages the pexels api to enable you find beautifull
        photos and pictures.
      </p>
      <p>
        Empowering Creators By providing free stock photos Pexels helps millions
        of creators all over the world to easily create beautiful products and
        designs. <br /><span>About Us</span><br />

        Pexels provides high quality and completely free stock photos licensed
        under the Pexels license. All photos are nicely tagged, searchable and
        also easy to discover through our discover pages.

        <br /><span>Photos</span><br />
        We have hundreds of thousands free stock photos and every day new high
        resolution photos will be added. All photos are hand-picked from photos
        uploaded by our users or sourced from free image websites. We make sure
        all published pictures are high-quality and licensed under the Pexels
        license.

        <br /><span>Photo Sources</span><br />
        Only free images from our community of photographers are added to our
        photo database. We constantly try to deliver as many high quality free
        stock photos as possible to the creatives who use our website.

        <br /><span>Mission</span><br />
        We help millions of designers, writers, artists, programmers and other
        creators to get access to beautiful photos that they can use freely
        which empowers them to create amazing products, designs, stories,
        websites, apps, art and other work. We call it: "Empowering Creators"

        <br /><span>Contribute</span><br />
        Upload your own pictures to support the Pexels community:
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.about-section {
  background-image: url("../assets/pexels-marley-clovelly-3673525.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  font-weight: bold;
  font-size: 4.5rem;
}
p {
  font-size: 2.5rem;
}
.pexelry-about {
  max-width: 48rem;
  padding-top: 3rem;
  margin: 0 auto;
}
.pexelry-about h1 {
  text-align: center;
}
.pexelry-about p {
  font-size: 20px;
}
span {
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 2rem;
}
</style>