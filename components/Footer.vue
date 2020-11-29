<template>
  <div class="footercomp">
    <div class="footer">
      <div class="learn">
        <h3>Learn</h3>
        <ul>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer"
              >PPC Marketing</a
            >
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">SEO</a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer"
              >UX/UI</a
            >
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer"
              >Web Design</a
            >
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer"
              >Social Media</a
            >
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer"
              >Case Studies</a
            >
          </li>
        </ul>
      </div>
      <div class="product">
        <h3>Product</h3>

        <ul>
          <li><a href="">FAQ</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Support</a></li>
        </ul>
      </div>
      <div class="company">
        <h3>Company</h3>
        <ul>
          <li><a href="">Contact Us</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Our Team</a></li>
          <li><a href="http://">Investors</a></li>
        </ul>
      </div>
      <div class="newsletter">
        <h3>Join Our newsletter</h3>
        <div class="news">
          <form>
            <input
              type="email"
              value=""
              required
              placeholder="Add your email here"
            />
            <span><button>SIGN UP</button></span> <br />
            <span class="span">Get exclusive deals and more!</span>
          </form>
        </div>
        <div class="connect">
          <h3>Connect with us</h3>
          <div class="social">
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'instagram']"
                /></a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'twitter']"
                /></a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'instagram']"
                /></a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'github']"
                /></a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'youtube']"
                /></a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'linkedin']"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      Copyright @ 2020 Pexelry "pic it" , All rights Reserved | Terms &
      Conditions | Private Policy
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footercomp {
  background-color: lightseagreen;
  padding-top: 2rem;
}
ul {
  list-style: none;
}
ul li a {
  color: #333333;
}
ul li a:hover {
  color: #333333;
  text-decoration: none;
}
ul li {
  padding: 0.5rem 0;
}
h3 {
  font-size: 1.4rem;
  text-align: center;
  padding-bottom: 1.5rem;
}
input {
  padding: 4px 18px;
  opacity: 0.5;
  font-style: italic;
}
input:focus {
  outline: none;
}
button {
  padding: 5px 10px;
  border: none;
  color: white;
  background: green;
  font-size: 16px;
}
button:hover {
  background-color: #28a745;
}
button:focus {
  outline: none;
}
.footer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.social ul {
  display: flex;
  font-size: 21px;
}
.social ul li {
  padding-left: 0.5rem;
  padding-top: 0;
}
.connect h3 {
  padding: 1rem 0;
}
.span {
  opacity: 0.5;
  padding-top: 1rem;
  text-align: center;
  font-style: italic;
}
.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  font-weight: 500;
  font-size: 1.25rem;
  font-style: italic;
}
</style>