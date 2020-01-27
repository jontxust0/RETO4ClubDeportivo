<?php
print_r($_SESSION);
session_start();
session_destroy();
print_r($_SESSION);
echo 1;

