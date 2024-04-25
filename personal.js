console.log("script loaded");
console.log("CodeHaven V1.2.5 (mobile version V1.2)");

//RESPONSIVE DISPLAY

width = window.innerWidth;

if (width <= 890) {
  console.log("small screen initialized:", width);
  document.getElementById("Benefits").innerHTML = "<h1>Why Do You Need A Website?</h1> <div class='wd'> <div class='w-item'> <img class='w-img' alt='Stand Out' src='stand-out.png' /> <div class='wi'> <h3 class='w-h'>Stand out</h3> <p class='w-p'> You won't get the level of flexibility and control in any other digital space than what a personal website can offer. Everybody uses social media such as Facebook, Instagram or even Google to market their brand. You will impress your audience more in comparison to those who use the normal social media applications. It shows that you are hard working and dedicated to seeking opportunities. </p> </div> </div> <div class='w-item'> <img class='w-img' alt='SHowcase Yourself' src='wand.png' /> <div class='wi'> <h3 class='w-h'>Showcase yourself</h3> <p class='w-p'> Everyone has skills talents and acheivements they want to share, or atleast it would be good for their career. WHen you have a personal site not only can you share large amounts of information to large amounts of people at once, but also it looks professional and modern. Additionally, A website shows the viewer that you are so important that you have your own website. </p> </div> </div> <div class='w-item'> <img class='w-img' alt='Creadabillity' src='trust.png' /> <div class='wi'> <h3 class='w-h'>Look Credable</h3> <p class='w-p'> A well-designed website signals professionalism and credibility. It demonstrates that you take your professional image seriously and are willing to invest time and effort into showcasing your abilities. It also provides a platform to display testimonials, case studies, or client reviews, further enhancing your credibility. </p> </div> </div> <div class='w-item'> <img class='w-img' alt='Personal Brand' src='marketing.png' /> <div class='wi'> <h3 class='w-h'>Personal Brand</h3> <p class='w-p'>If you are looking to build a career as a photographer or as a musician, you might have a portfolio showcasing your work. By building a personal website, you label your self-worth and your identity as a professional. In your personal website, you not only advertise your skills but build a brand around yourself. It opens up countless new doors of opportunities and elevates your professional status. </p> </div> </div> <div class='w-item'> <img class='w-img' alt='Develope Your Career' src='promotion.png' /> <div class='wi'> <h3 class='w-h'>Develope Your Career</h3> <p class='w-p'> Either if you’re starting out as a rookie stand up comedian or if you have been a sports coach for over a decade, a personal website can be equally important for both. Owning a personal website can open channels and present opportunities that you didn’t know exist. One great example is that using a personal website, you can tailor various courses and study material and earn by selling it on your website. You can display in flying colors about all of your ventures and experiences and develop a reputation depending on how you market yourself on your personal website. </p> </div> </div> <div class='w-item'> <img class='w-img' alt='Networking' src='networking.png' /> <div class='wi'> <h3 class='w-h'>Build your Network</h3> <p class='w-p'> Success cannot come to you on your own. You need to be in the presence of success people to build a successful empire. That is what your personal website can do for you. The target market and success you can achieve with a personal website when compared to social media is unparalleled. Unlike your social media handles, your personal website is your personal space. Depending on how you've built and maintained it, you can connect to people from across the world and land business opportunities you've never even dreamt of. </p> </div> </div> </div>";
} 

//FAQ
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//REVEAL

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add('activer');
      }
      else {
          reveals[i].classList.remove('activer');
      }
  }
}