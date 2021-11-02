<template>
  <div class="faq-page-hide" id="faq-page-hide">
    <section class="main-section">
      <div id="faqs" class="container">
        <h2 class="line-heading">Frequently Asked Questions</h2>
        <div id="faqSection" class="fullwidth-container">
          <div>
            <button class="collapsible">Is MyCloaks safe?</button>
            <div class="faq-content">
              <p>
                Yes! MyCloaks is totally safe! MyCloaks is an open-source
                project and you can check out our GitHub
                <a href="#" target="_blank">here</a> if you want to check it
                out! MyCloaks doesn't save any of your information either.
              </p>
            </div>
            <button class="collapsible">
              MyCloaks isn't working, or I have a question!
            </button>
            <div class="faq-content">
              <p>
                Is your MyCloaks not working? That's totally fine! It happens to
                everyone sometimes. All you have to do is
                <a href="https://discord.gg/UgMPRuQJ35" target="_blank"
                  >join our Discord</a
                >
                and ask your question or concern. Patiently wait as one of our
                Support Members, or regular member, will answer your question
                soon! You also have the option to
                <a href="mailto:#" target="_blank">email our Support Team</a>
                for any reason given.
              </p>
            </div>
            <button class="collapsible">Where can I request a cosmetic?</button>
            <div class="faq-content">
              <p>
                All you have to do to get a cosmetic added to your account is by
                <a href="https://discord.gg/UgMPRuQJ35" target="_blank"
                  >joining our Discord</a
                >, reading our
              </p>
              <ul>
                <li>#⋐💭⋑︱information</li>
              </ul>
              <p>channel and following the instructions!</p>
            </div>
            <button class="collapsible">Are there other costs involved?</button>
            <div class="faq-content">
              <p>
                No! MyCloaks is 100% free of any costs, fees or subscriptions.
                However, by donating to MyCloaks you will keep our free service
                up and running and you will receive a couple of extra perks such
                as Discord perks, cosmetics options and a lot more.
              </p>
            </div>
          </div>
          <div>
            <button class="collapsible">Can I make my own cosmetics?</button>
            <div class="faq-content">
              <p>
                Yes, you totally can!
                <a href="https://discord.gg/UgMPRuQJ35" target="_blank"
                  >Join our Discord</a
                >, follow the given format, edit it to your likings and submit
                your cosmetic! Keep in mind that currently you can only make and
                request <strong>Capes</strong>!
              </p>
            </div>
          </div>
          <div>
            <button class="collapsible">
              I'm interested in becoming a Staff Member, Developer or Designer,
              can I do that? If I can, where can I do that?
            </button>
            <div class="faq-content">
              <p>
                Of course you can apply!
                <a href="https://discord.gg/UgMPRuQJ35" target="_blank"
                  >join our Discord</a
                >, head over to
              </p>
              <ul>
                <li>#⋐📚⋑︱apply</li>
              </ul>
              <p>
                see if you meet the requirements, check if the application(s)
                are open and apply! Good luck on the application!
              </p>
            </div>
          </div>
          <div>
            <button class="collapsible">
              On which clients does MyCloaks work?
            </button>
            <div class="faq-content">
              <p>
                Any, as long as the client has
                <a href="https://optifine.net/home" target="_blank">Optifine</a>
                pre-installed it will work perfectly fine! You can also use this
                without a client, just make sure that you have
                <a href="https://optifine.net/home" target="_blank">Optifine</a>
                installed! It does also work on Badlion Client, however this
                does require a few extra steps to complete!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    var coll = document.getElementsByClassName("collapsible");

    for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          content.style.visibility = "hidden";
          content.style.margin = "0 2%";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.visibility = "visible";
          content.style.margin = "12px 2%";
        }
      });
    }
  },
};
</script>
