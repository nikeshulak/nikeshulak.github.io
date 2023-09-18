<?php
  for($i = 10; $i <= 91; $i++)
  echo "echo 'export const mahaGeeta$i = []' > $i.js<br />";

  // chmod u+x generateFile.sh
  // ./generateFile.sh