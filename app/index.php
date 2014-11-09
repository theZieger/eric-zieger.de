<!doctype html>
<html class="no-js" lang="en">
  <head>

    <meta charset="utf-8">

    <title>Eric Zieger - Trainee Media Designer</title>

    <meta name="description" content="Personal website of Eric Zieger. Trainee Media Designer, front-end enthusiast, located in Leipzig, Germany.">
    <meta name="google-site-verification" content="VXi6KkpQvEWLFGQPT5wrl4N2IRIR_L82jZv616Ly1Zs" />
    <meta name="viewport" content="width=device-width">

    <link rel="author" href="humans.txt" />
    <link rel="shortcut icon" href="favicon.ico">
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,700' rel='stylesheet' type='text/css'>

    <!-- build:css(.) styles/vendor.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="bower_components/normalize-css/normalize.css" />
    <!-- endbower -->
    <!-- endbuild -->
    <!-- build:css(.tmp) styles/main.css -->
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/navigation.css">
    <link rel="stylesheet" href="styles/icons.css">
    <link rel="stylesheet" href="styles/sections.css">
    <link rel="stylesheet" href="styles/contact.css">
    <link rel="stylesheet" href="styles/buttons.css">
    <link rel="stylesheet" href="styles/footer.css">
    <link rel="stylesheet" href="styles/media-queries.css">
    <!-- endbuild -->
    <!-- build:js scripts/vendor/modernizr.js -->
    <!-- endbuild -->

    <!--[if gte IE 9]><style type="text/css">.s1{filter:none;}</style><![endif]-->
  </head>

  <!--[if lt IE 8 ]><body class="ie7" id="home" lang="en"> <![endif]-->
  <!--[if (gt IE 9)|!(IE)]><!--><body id="home" lang="de"><!--<![endif]-->

    <header>
      <input type="checkbox" class="nav-checkbox" id="nav-checkbox" />
      <nav class="nav">
        <ul class="nav-items">
          <li><a class="nav-item" href="#home"><i class="icon-house"></i> Home</a></li>
          <li><a class="nav-item" href="#about-me"><i class="icon-user"></i> About me</a></li>
          <li><a class="nav-item" href="#contact"><i class="icon-chat"></i> Contact</a></li>
        </ul>
      </nav>
      <label class="nav-toggle icon-list" for="nav-checkbox">toggle menu</label>
    </header>

    <section class="content s1">
      <img class="content-portrait" src="images/eric-zieger.jpg" alt="Eric Zieger, front-end stack developer from Leipzig, Germany" />
      <h1 class="content-shortbio">Trainee Media Designer, front-end enthusiast, located in Leipzig, Germany.</h1>

      <?php if (isset($_GET['success'])) : ?>
        <div class="msg-box">
          <span>
            <h2><i class="icon-checkmark"></i> Thank you!</h2>
          </span>
        </div>
        <script>localStorage.clear();</script>
      <?php endif ?>

      <?php if (isset($_GET['honeypot'])) : ?>
        <div class="msg-box msg-warning">
          <span>
            <h2><i class="icon-question"></i> Are you sure you are a real human being?</h2>
          </span>
      <?php endif ?>

      <?php if (isset($_GET['error_mail']) OR isset($_GET['error_subject']) OR isset($_GET['error_content'])) : ?>
        <div class="msg-box msg-error">
          <span>
            <h2><i class="icon-warning"></i> Uuuh, you forget to <a href="#contact">fill out</a> one or more of the form inputs.</h2>
          </span>
        </div>
      <?php endif ?>

      <?php if (isset($_GET['error'])) : ?>
        <div class="msg-box msg-error">
          <span>
            <h2><i class="icon-warning"></i> Error while sending mail. Sorry for that!</h2>
          </span>
        </div>
      <?php endif ?>
    </section><!-- end of welcome -->

    <section id="about-me" class="content">
      <h2>About me</h2>
      <p>Hi, my name is Eric Zieger. I'm a trainee Media Designer for digital and print media located in Leipzig, Germany. That means I'm participating in the design and production process of promotional materials and digital media products. I'm developing conceptr and create awesome products. Most of the time this includes websites, corporate design and mobile web experiences.</p>
      <p>I love to write code for websites. Especially everything that is related to the front-end stack. But my job isn't just about making things pretty on the web. It requires aesthetic sensitivity and programmatic rigor. All in all I truly enjoy the act of creation and I love collaborating with smart and clever people.</p>
      <p>And I think I can admit that I'm quite good at what I'm doing. Since by now I'm working over 6 years in the web development industry and over this period I’ve had the chance to work for some pretty cool companies and customers that have done some pretty amazing things.</p>
      <p>In my rather limited spare time I learn japanese at the community college Leipzig, like to read a good book, keep my body in a good shape or play the drums from time to time.</p>
      <p>Or if you don't want to use the contact form above you can use your own email client and contact me via <strong class="no-breaks">mail [at] eric-zieger.de</strong>.</p>
    </section><!-- end of about me -->

    <section id="contact" class="contact">
      <div class="content">
        <h2>Contact me</h2>

        <form action="contact.php" method="post">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Name" />

            <label class="label" for="email">Email</label>
            <input id="email" name="email" type="text" placeholder="Email" />

            <label class="label" for="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="Subject" />

            <label for="content">How can I help?</label>
            <textarea id="content" name="content"></textarea>

            <input class="btn" type="submit" value="send" />
        </form>
      </div>
    </section><!-- end of contact -->

    <section>
      <div class="content">
        <h2>About this website</h2>
        <p>This site is tagged as v1.1.0 over on GitHub. Which by no way means that the current result you are looking at right now will be the same for the years to come. No, it's more like a playground to me and I decided to deploy it everytime I have a new feature or bug fix pushed to my master branch. You could call it something like continuous delivery.</p>
        <a class="btn" href="https://github.com/theZieger/eric-zieger.de/"><i class="icon-github"></i> visit the repo</a>
      </div>
    </section>

    <footer>
      <div class="content">
        <p>Copyright &copy; 2014. Made with &hearts; by Eric Zieger. | <a href="legal-imprint.html">Legal Disclosure</a></p>
        <ul>
          <li><a target="_blank" href="https://twitter.com/the_Zieger" class="icon icon-twitter">Twitter</a></li>
          <li><a target="_blank" href="https://github.com/theZieger" class="icon icon-github">GitHub</a></li>
          <li><a href="mailto:mail@eric-zieger.de" class="icon icon-mail">GitHub</a></li>
        </ul>
      </div>
    </footer>

    <!-- build:js(.) scripts/vendor.js -->
    <!-- bower:js -->
    <script src="bower_components/modernizr/modernizr.js"></script>
    <script src="bower_components/smooth-scroll/smooth-scroll.js"></script>
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js({app,.tmp}) scripts/main.js -->
      <script src="scripts/main.js"></script>
    <!-- endbuild -->

    <!--[if lt IE 8]>
      <script src="scripts/ie7.js"></script>
    <![endif]-->

  </body>
</html>
