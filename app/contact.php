<?php

require 'vendor/class.simple_mail.php';

// simple honey-pot check
if (empty($_POST['name'])) {

  // get sender
  if ( isset($_POST['email']) && !empty($_POST['email']) && filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL)) {

    $sender = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

  } else {
    header('location: index.html#contact?error_email');
  }

  // get subject
  if ( isset($_POST['subject']) && !empty($_POST['subject']) ) {

    $subject = filter_var(trim($_POST['subject']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);

  } else {
    header('location: index.html#contact?error_subject');
  }

  // get content
  if ( isset($_POST['content']) && !empty($_POST['content']) ) {

    $content = filter_var(trim($_POST['content']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);

  } else {
    header('location: index.html#contact?error_content');
  }

  $mail = new SimpleMail();
  $mail->setTo('theZiegergmail.com', 'Eric Zieger')
    ->setSubject('[@ERIC]' . $subject)
    ->setFrom($sender, $sender)
    ->addMailHeader('Reply-To', $sender, $sender)
    ->addGenericHeader('Content-Type', 'text/html; charset="utf-8"')
    ->setMessage($content)
    ->setWrap(78);

  $send = $mail->send();

  if ($send) {
    header('location: index.html#contact?success');
  } else {
    header('location: index.html#contact?error');
  }


} else {
  header('location: index.html#contact?honeypot');
}
